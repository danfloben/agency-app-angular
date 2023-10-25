import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyCreateComponent } from './agency-create.component';

describe('AgencyCreateComponent', () => {
  let component: AgencyCreateComponent;
  let fixture: ComponentFixture<AgencyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyCreateComponent]
    });
    fixture = TestBed.createComponent(AgencyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
