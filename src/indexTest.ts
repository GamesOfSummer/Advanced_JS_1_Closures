import { summation } from './intex';
import { strict as assert } from 'assert';



describe('Fxn', function () {
    describe('#summation()', function () {

        assert.equal(summation(1), 1);
        assert.equal(summation(8), 36);



    });
});


