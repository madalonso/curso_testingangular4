import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());

  });

  it('shuold  create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy(); //criar um componente name
    expect(component.form.contains('email')).toBeTruthy(); //criar um componente name
  });

  it('should make the name control required set empty value', () => {
    let control = component.form.get('name');

    control?.setValue(''); //set valor em branco para um campo requerido
    expect(control?.valid).toBeFalsy(); // esperado que a validacao seja falso
  });

  it('should make  the name control required set a valid value', () => {
    let control = component.form.get('name');

    control?.setValue('Mark'); //set um valor para um campo requerido
    expect(control?.valid).toBeTruthy(); // esperado que a validacao seja verdadeiro
  });

});