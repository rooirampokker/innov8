exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE documents(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    format_type VARCHAR(255),
    data_type VARCHAR(255),
    size INT, 
    data BYTEA,
    created_at TIMESTAMP
  )`
    return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
    let dropQuery = 'DROP TABLE documents'
    return knex.raw(dropQuery)
}