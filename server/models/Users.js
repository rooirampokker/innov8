'use strict';

let Bookshelf = require('./database');

var User = Bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true
});

module.exports = Bookshelf.model('User', User);