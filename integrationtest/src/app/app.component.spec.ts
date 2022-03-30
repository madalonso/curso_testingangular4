/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './2-todos/todos.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])], 
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  
  });

 

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  })

  xit('should have a link to todos page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    
    // <a href="/todos">
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
    
    
    expect(index).toBeGreaterThan(-1);
  })

});
