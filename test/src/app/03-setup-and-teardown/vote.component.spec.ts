import { VoteComponent } from './vote.component'; 
// #3 usando comando para definir execucao antes do teste

describe('VoteComponent', () => {
  let component: VoteComponent;

  //comando para executar antes de cada teste
  beforeEach(()=> {
    component = new VoteComponent();
  })

  //beforeAll - Um vez antes dos testes
  //afterEach - Uma vez depois de cada teste
  //afterAll - Uma vez depois do testes

  it('should decrement totalVoltes when downvoted', () => {

    component.downVote(); //Act
    expect(component.totalVotes).toBe(-1); //Assert
    
  });

  it('should increment totalVoltes when upvoted', () => {
 
    component.upVote(); //Act
    expect(component.totalVotes).toBe(1); //Assert

  });
});

/*
// #2 declarando o objeto uma unica vez
describe('VoteComponent', () => {
  let component = new VoteComponent(); //Arrange

  it('should decrement totalVoltes when downvoted', () => {
    
    component.downVote(); //Act
    expect(component.totalVotes).toBe(-1); //Assert
    
  });

  it('should increment totalVoltes when upvoted', () => {
 
    component.upVote(); //Act
    expect(component.totalVotes).toBe(0); //Assert

  });
});
*/

/* 
// #1 declarando o objeto em cada teste
describe('VoteComponent', () => {
  it('should increment totalVoltes when upvoted', () => {
    
    let component = new VoteComponent(); //Arrange
    component.upVote(); //Act
    expect(component.totalVotes).toBe(1); //Assert

  });

  it('should decrement totalVoltes when downvoted', () => {
    
    let component = new VoteComponent(); //Arrange
    component.downVote(); //Act
    expect(component.totalVotes).toBe(-1); //Assert
    
  });

});
*/