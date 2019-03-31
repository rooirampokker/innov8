exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE types(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP
  )`
    return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE types`
    return knex.raw(dropQuery)
}