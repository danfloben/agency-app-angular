import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesListComponent } from './agencies-list.component';

describe('AgenciesListComponent', () => {
  let component: AgenciesListComponent;
  let fixture: ComponentFixture<AgenciesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenciesListComponent]
    });
    fixture = TestBed.createComponent(AgenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
