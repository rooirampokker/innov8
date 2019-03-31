exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE user_documents(
    id SERIAL PRIMARY KEY NOT NULL,
        user_id integer REFERENCES users(id),
        document_id integer REFERENCES documents(id),
        created_at TIMESTAMP
)`
return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE user_documents`
    return knex.raw(dropQuery)
}
