/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('Passwords').del()
    await knex('Passwords').insert([
      {Id: 1, UserId: 1, Password: 'AAATesting', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00'},
      {Id: 2, UserId: 2, Password: 'BBBTesting', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00'},
      {Id: 3, UserId: 3, Password: 'CCCTesting', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00'}
    ]);
  }
  