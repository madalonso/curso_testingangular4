/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { Observable, from } from 'rxjs';


//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA], 
      imports: [HttpClientModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
    
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    
  }); 
 
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should loa todos from the server', () => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));
    
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });
  */

  it('should loa todos from the server', async(() => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve( [1, 2, 3] ));
    
    fixture.detectChanges();
    
    fixture.whenStable().then(()=>{
      expect(component.todos.length).toBe(3);
    });

    console.log("EXPECT WAS CALLED")
  }));

  it('should loa todos from the server', fakeAsync(() => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve( [1, 2, 3] ));
    
    fixture.detectChanges();
    
    tick();
    expect(component.todos.length).toBe(3);
    console.log("EXPECT WAS CALLED")
  }));

});