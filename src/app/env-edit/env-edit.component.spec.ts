import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvEditComponent } from './env-edit.component';

describe('EnvEditComponent', () => {
  let component: EnvEditComponent;
  let fixture: ComponentFixture<EnvEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
