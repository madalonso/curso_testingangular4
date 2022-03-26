import { greet } from "./greet";

describe('greet', () =>  { //funcao que ser testada
    it('should include the name int the message', () => { //teste que sera feito
        expect(greet('mosh')).toContain('mosh');
    })
})
