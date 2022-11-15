/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Accounts').del()
  await knex('Accounts').insert([
    {Id: 1, UserId: 1, Name: 'AAA Savings', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false},
    {Id: 2, UserId: 1, Name: 'AAA Checking', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false},
    {Id: 3, UserId: 2, Name: 'BBB Savings', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false},
    {Id: 4, UserId: 2, Name: 'BBB Checking', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false},
    {Id: 5, UserId: 3, Name: 'CCC Savings', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false},
    {Id: 6, UserId: 3, Name: 'CCC Checking', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false},
  ]);
}
