/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('Users', table => {
    table.increments('Id').primary();
    table.string('UserName', 50).notNullable();
    table.string('FirstName', 50).notNullable();
    table.string('LastName', 50).notNullable();
    table.string('Password', 50).notNullable();
    table.timestamp('CreatedAt').notNullable();
    table.timestamp('UpdatedAt').notNullable();
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('Users');
}
