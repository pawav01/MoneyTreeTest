/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Passwords', table => {
        table.increments('Id').primary();
        table.integer('UserId').notNullable().references('Id').inTable('Users');
        table.string('Password', 100).notNullable();
        table.timestamp('CreatedAt').notNullable();
        table.timestamp('UpdatedAt').notNullable();
    }).raw('INSERT INTO Passwords (UserId, Password, CreatedAt, UpdatedAt) SELECT Id, Password, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM Users');
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('Passwords');
}
