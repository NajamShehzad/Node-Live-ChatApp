const expect = require('expect');
var { generateMessage } = require('./message');

describe('genrateMessage', () => {

    it('Should Generate the correct message object', () => {
        var from = 'najam';
        var text = 'Hi! there who are you ?';
        var message = generateMessage(from, text);


        // expect(message.createdAt).toBeCloseTo('number');
        expect(message).toInclude({ from, text });


    });

});