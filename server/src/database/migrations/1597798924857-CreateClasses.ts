import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateClasses1597798924857 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
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
            name: 'user_id',
            isNullable: true,
          },
          {
            type: 'varchar',
            name: 'subject',
          },
          {
            type: 'decimal',
            name: 'cost',
            precision: 10,
            scale: 2,
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
        name: 'ClassesUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('classes', 'ClassesUser');

    await queryRunner.dropTable('users');
  }
}
