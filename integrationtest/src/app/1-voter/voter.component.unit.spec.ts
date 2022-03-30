import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing'; //para o teste integrado => configura ambiente (TesteBed) simula a criacao de uma instacia com valor do componente (ComponentFixture)
import { By } from '@angular/platform-browser';  //elemento do html
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    //simula as configuracoes do NgModule
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);  //Cria uma instancia siumlado do objeto 
    component = fixture.componentInstance; //atribui essa instacia para o componente

  });

  it('should increase total votes when I click the upvote button', () => {
       
    //let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    //button.triggerEventHandler('click', null);
    
    component.upVote(); //teste unitario

    expect(component.totalVotes).toBe(1);

  });


});

