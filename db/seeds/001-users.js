/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("mid_table").del();
  await knex("mid_table").insert([
    { first_name: "Haruki", last_name: "Mori", email: "haruki@gmail.com" },
    { first_name: "Kevin", last_name: "Messi", email: "kevin@gmail.com" },
    { first_name: "John", last_name: "Paul", email: "john@gmail.com" },
  ]);
};
