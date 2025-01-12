import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchesBooksComponent } from './purches-books.component';

describe('PurchesBooksComponent', () => {
  let component: PurchesBooksComponent;
  let fixture: ComponentFixture<PurchesBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchesBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
