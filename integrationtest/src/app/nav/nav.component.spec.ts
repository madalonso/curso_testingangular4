import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), RouterModule],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to todos page', fakeAsync(() => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    
    // <a href="/todos">
    let index = debugElements.findIndex(de=> de.properties['href'] === '/todos');
    fixture.detectChanges();
    tick();
    expect(index).toBeGreaterThan(-1);
  }))
});
