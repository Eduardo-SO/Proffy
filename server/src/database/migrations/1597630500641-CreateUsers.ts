import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1597630500641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            type: 'uuid',
            name: 'id',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            type: 'varchar',
            name: 'name',
          },
          {
            type: 'varchar',
            name: 'email',
            isUnique: true,
          },
          {
            type: 'varchar',
            name: 'password',
          },
          {
            type: 'varchar',
            name: 'avatar',
          },
          {
            type: 'varchar',
            name: 'whatsapp',
          },
          {
            type: 'varchar',
            name: 'bio',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
