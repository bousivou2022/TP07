const { khmerDate } = require('./lib');
const date = new khmerDate(new Date('2022-01-20T17:30:55.839Z'));
console.log(date.getDate());