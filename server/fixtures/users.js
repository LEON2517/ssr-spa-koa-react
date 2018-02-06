const oid = require('../libs/oid');
require('../models/user');

exports.User = [{
  _id:      oid('user-mk'),
    firstName: 'Max',
    lastName: 'Kirillov',
    email:    "mk@javascript.ru",
    password: '123456'
}, {
  _id:      oid('user-iliakan'),
    firstName: 'Kirill',
    lastName: 'Maximov',
    email:    "iliakan@javascript.ru",
    password: '123456'
}];
