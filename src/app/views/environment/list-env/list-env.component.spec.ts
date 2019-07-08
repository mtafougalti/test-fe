import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnvComponent } from './list-env.component';

describe('ListEnvComponent', () => {
  let component: ListEnvComponent;
  let fixture: ComponentFixture<ListEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
