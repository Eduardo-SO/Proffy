import { EntityRepository, Repository } from 'typeorm';
import Class from '../models/Class';

interface ClassItem {
  week_day: number;
  subject: string;
  time: string;
}

@EntityRepository(Class)
class ClassesRepository extends Repository<Class> {
  public async findClass(data: ClassItem): Promise<Class | undefined> {
    const { week_day, subject, time } = data;

    const classItem = await this.findOne({
      where: {
        week_day,
        subject,
        time,
      },
    });

    return classItem;
  }
}

export default ClassesRepository;
