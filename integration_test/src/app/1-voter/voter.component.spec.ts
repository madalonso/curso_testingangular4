import { TestBed, ComponentFixture } from '@angular/core/testing'; //para o teste integrado => configura ambiente (TesteBed) simula a criacao de uma instacia com valor do componente (ComponentFixture)
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

  it('', () => {
  });
});
