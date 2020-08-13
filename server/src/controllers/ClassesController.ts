import { Request, Response } from 'express';
import { hash } from 'bcrypt';

import db from '../database/connection';
import convertHoursInMinutes from '../utils/convertHoursInMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const time = filters.time as string;
    const subject = filters.subject as string;
    const week_day = filters.week_day as string;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = convertHoursInMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*' ,'users.*'])

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    const trx = await db.transaction();
    
    try {
      const hashedPassword = await hash(password, 8);
      
      const insertedUsersIds = await trx('users').insert({
        name,
        email,
        password: hashedPassword,
        avatar,
        whatsapp,
        bio,
      });
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        user_id,
        subject,
        cost,
      });
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursInMinutes(scheduleItem.from),
          to: convertHoursInMinutes(scheduleItem.to),
        })
      )
      
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
    
      return response.status(201).send();
    } catch (error) {
      await trx.rollback();
  
      return response.status(400).json({ 
        error: 'Unexpected error while creating a new class' 
      });
    }
  }
}