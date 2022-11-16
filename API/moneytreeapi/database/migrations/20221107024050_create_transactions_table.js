/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return knex.schema.createTable('Transactions', table => {
      table.increments('Id').primary();
      table.integer('UserId').notNullable().references('Id').inTable('Users');
      table.integer('CategoryId').notNullable().references('Id').inTable('Categories');
      table.integer('AccountId').notNullable().references('Id').inTable('Accounts');
      table.string('Name', 100).notNullable();
      table.decimal('Amount').notNullable();
      table.timestamp('TransactionDate').notNullable();
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
      return knex.schema.dropTable('Transactions');
  }
  