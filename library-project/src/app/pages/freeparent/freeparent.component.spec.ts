import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeparentComponent } from './freeparent.component';

describe('FreeparentComponent', () => {
  let component: FreeparentComponent;
  let fixture: ComponentFixture<FreeparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
