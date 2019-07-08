import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvAddComponent } from './env-add.component';

describe('EnvAddComponent', () => {
  let component: EnvAddComponent;
  let fixture: ComponentFixture<EnvAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
