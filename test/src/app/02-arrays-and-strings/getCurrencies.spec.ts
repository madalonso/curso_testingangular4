import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () =>  { //funcao que ser testada
    it('should return the supported currencies', () => { //teste que sera feito
        const result:string[] = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})
