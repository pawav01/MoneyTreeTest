/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Users').del()
  await knex('Users').insert([
    {Id: 1, FirstName: 'AAA', LastName: 'Testing', Username: 'AAATesting', Password: 'AAATesting', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00'},
    {Id: 2, FirstName: 'BBB', LastName: 'Testing', Username: 'BBBTesting', Password: 'BBBTesting', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00'},
    {Id: 3, FirstName: 'CCC', LastName: 'Testing', Username: 'CCCTesting', Password: 'CCCTesting', CreatedAt:'2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00'}
  ]);
};
