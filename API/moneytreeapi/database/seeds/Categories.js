/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Categories').del()
  await knex('Categories').insert([
    {Id: 1, UserId: 1, Name: 'AAA Salary', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, Type: 1, Budget: null},
    {Id: 2, UserId: 1, Name: 'AAA Grocery', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, Type: 2, Budget: 5000.00},
    {Id: 3, UserId: 2, Name: 'BBB Salary', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, Type: 1, Budget: null},
    {Id: 4, UserId: 2, Name: 'BBB Grocery', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, Type: 2, Budget: 7000.00},
    {Id: 5, UserId: 3, Name: 'CCC Salary', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, Type: 1, Budget: null},
    {Id: 6, UserId: 3, Name: 'CCC Grocery', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, Type: 2, Budget: 9000.00}
  ]);
};
