import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoraiteBooksComponent } from './favoraite-books.component';

describe('FavoraiteBooksComponent', () => {
  let component: FavoraiteBooksComponent;
  let fixture: ComponentFixture<FavoraiteBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoraiteBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoraiteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
