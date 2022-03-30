import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA], 
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });
});
