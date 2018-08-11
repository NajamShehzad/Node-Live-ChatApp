var moment  = require('moment');
var generateMessage = (from,text) =>{
    var time = moment().valueOf();
    return({
        from,
        text,
        createdAt: moment(time).format('h:ma')
    })
};

module.exports = {generateMessage};