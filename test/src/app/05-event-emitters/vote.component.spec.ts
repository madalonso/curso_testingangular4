import { CompileShallowModuleMetadata } from '@angular/compiler';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted expect 1', () => {
    //let totalVotes = null;
    let totalVotes: number = -1; // inicia a variavel com -1
    
    component.voteChanged.subscribe(tv => totalVotes = tv); // seta a variavel totalVotes igual ao evento
    component.upVote(); // dispara o evento 
        
    //expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1); // apos execucao do evento retorna 1
    

  });

  it('should raise voteChanged event when upvoted - expect not null', () => {
    let totalVotes = null; //inicia a variavel com null
    
    component.voteChanged.subscribe(tv => totalVotes = tv); // seta a variavel totalVotes igual ao evento
    component.upVote(); // dispara o evento 
        
    expect(totalVotes).not.toBeNull(); // apos execucao do evento retorna 1 e a variavel nao eh null

  });

});