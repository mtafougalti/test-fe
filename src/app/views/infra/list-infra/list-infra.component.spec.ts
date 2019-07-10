import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfraComponent } from './list-infra.component';

describe('ListInfraComponent', () => {
  let component: ListInfraComponent;
  let fixture: ComponentFixture<ListInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
