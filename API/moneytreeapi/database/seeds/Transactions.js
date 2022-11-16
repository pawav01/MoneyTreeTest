/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed (knex) {
  // Deletes ALL existing entries
  await knex('Transactions').del()
  await knex('Transactions').insert([
    { Id: 1, UserId: 1, Name: 'AAA June Salary', CreatedAt: '2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, TransactionDate: '2022-11-07T18:40:20+00:00', AccountId: 2, CategoryId: 1, Amount: 10000.00},
    { Id: 2, UserId: 1, Name: 'AAA July Grocery', CreatedAt: '2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, TransactionDate: '2022-11-07T18:40:20+00:00', AccountId: 1, CategoryId: 2, Amount: 1000.00 },
    { Id: 3, UserId: 2, Name: 'BBB July Salary', CreatedAt: '2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, TransactionDate: '2022-11-07T18:40:20+00:00', AccountId: 4, CategoryId: 3, Amount: 12000.00 },
    { Id: 4, UserId: 2, Name: 'BBB August Grocery', CreatedAt: '2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, TransactionDate: '2022-11-07T18:40:20+00:00', AccountId: 3, CategoryId: 4, Amount: 2000.00 },
    { Id: 5, UserId: 3, Name: 'CCC August Salary', CreatedAt: '2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, TransactionDate: '2022-11-07T18:40:20+00:00', AccountId: 6, CategoryId: 5, Amount: 11000.00 },
    { Id: 6, UserId: 3, Name: 'CCC September Salary', CreatedAt: '2022-11-07T18:40:20+00:00', UpdatedAt: '2022-11-07T18:40:20+00:00', IsDeleted: false, TransactionDate: '2022-11-07T18:40:20+00:00', AccountId: 5, CategoryId: 6, Amount: 1300.00 },
  ]);
}
