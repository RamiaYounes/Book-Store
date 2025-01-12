import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchparentComponent } from './purchparent.component';

describe('PurchparentComponent', () => {
  let component: PurchparentComponent;
  let fixture: ComponentFixture<PurchparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
