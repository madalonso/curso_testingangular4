import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { HttpClient } from '@angular/common/http';
import { Observable, from, empty, throwError} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let http: HttpClient;

  beforeEach(() => {
    service = new TodoService(http);
    component = new TodosComponent(service);

  });

  it('should set todos property with the itens returned from the server', () => {
    let todos = [1, 2, 3];
    
    //simula a execucao do metodo de um objeto
    spyOn(service, 'getTodos').and.callFake( () => {
      return from([ todos ])
    }); 

    component.ngOnInit();

    expect(component.todos).toBe(todos);

  });

  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake( t => {
      return empty();
    });
    
    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('should add new todo returned from the server', () => {
    let todo = {id: 1};    
    let spy = spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });

  it('should set the message property if server returns an error  when adding a new todo', () => {
    let error = 'erro from the server';    
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);

  });

  xit('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);    
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  //xit desabilita o teste
  xit('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);    
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();

  });


});