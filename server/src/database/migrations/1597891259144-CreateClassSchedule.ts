import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateClassSchedule1597891259144
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class_schedule',
        columns: [
          {
            type: 'uuid',
            name: 'id',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            type: 'uuid',
            name: 'class_id',
            isNullable: true,
          },
          {
            type: 'int',
            name: 'week_day',
          },
          {
            type: 'int',
            name: 'from',
          },
          {
            type: 'int',
            name: 'to',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'classes',
      new TableForeignKey({
        name: 'ClassScheduleClasses',
        columnNames: ['class_id'],
        referencedTableName: 'classes',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('classes', 'ClassScheduleClasses');

    await queryRunner.dropTable('class_schedule');
  }
}
