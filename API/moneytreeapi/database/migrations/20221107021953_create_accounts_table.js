/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Accounts', table => {
    table.increments('Id').primary();
    table.integer('UserId').notNullable().references('Id').inTable('Users');
    table.string('Name', 100).notNullable();
    table.timestamp('CreatedAt').notNullable();
    table.timestamp('UpdatedAt').notNullable();
    table.boolean('IsDeleted').notNullable();

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Accounts');
};
