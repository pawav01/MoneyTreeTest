/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable('Tasks', table => {
      table.increments('Id').primary();
      table.integer('UserId').notNullable().references('Id').inTable('Users');
      table.string('Name', 100).notNullable();
      table.timestamp('ScheduledAt').notNullable();
      table.timestamp('CreatedAt').notNullable();
      table.timestamp('UpdatedAt').notNullable();
      table.boolean('IsDeleted').notNullable();
  
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
      return knex.schema.dropTable('Tasks');
  }
  