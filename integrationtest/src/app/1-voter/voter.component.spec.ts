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

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges(); //para o angular detectar a mudanca de numero para string na hora de renderizar
    
    let de = fixture.debugElement.query(By.css('.vote-count'))
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');

  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges(); 
    
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'))

    expect(de.classes['highlighted']).toBeTruthy();

  });

  it('should increase total votes when I click the upvote button', () => {
       
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);
    
    expect(component.totalVotes).toBe(1);

  });


});


/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/