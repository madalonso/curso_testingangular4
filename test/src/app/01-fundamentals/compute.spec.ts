import {compute} from './compute';

describe('compute', () =>  { //funcao que ser testada
    it('should return 0 if input is negative', () => { //teste que sera feito
        const result = compute(-1);
        expect(result).toBe(0);
    })
})

describe('compute', () =>  { //funcao que ser testada
    it('should increment the input it is positive', () => { //teste que sera feito
        const result = compute(2);
        expect(result).toBe(3);
    })
})