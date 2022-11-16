/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Tasks').del()
  await knex('Tasks').insert([
    {Id: 1, UserId: 1, Name: 'AAA Task 1', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, ScheduledAt:'2022-11-07T18:40:20+00:00' },
    {Id: 2, UserId: 1, Name: 'AAA Task 2', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, ScheduledAt:'2022-11-07T18:40:20+00:00' },
    {Id: 3, UserId: 2, Name: 'BBB Task 1', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, ScheduledAt:'2022-11-07T18:40:20+00:00' },
    {Id: 4, UserId: 2, Name: 'BBB Task 2', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, ScheduledAt:'2022-11-07T18:40:20+00:00' },
    {Id: 5, UserId: 3, Name: 'CCC Task 1', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, ScheduledAt:'2022-11-07T18:40:20+00:00' },
    {Id: 6, UserId: 3, Name: 'CCC Task 2', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, ScheduledAt:'2022-11-07T18:40:20+00:00' },
  ]);
}
