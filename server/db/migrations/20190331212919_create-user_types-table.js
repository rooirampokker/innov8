exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE user_types(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id integer REFERENCES users(id),
    type_id integer REFERENCES types(id),
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE user_types`
    return knex.raw(dropQuery)
}
