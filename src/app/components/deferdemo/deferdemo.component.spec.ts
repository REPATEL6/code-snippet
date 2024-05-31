import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferdemoComponent } from './deferdemo.component';

describe('DeferdemoComponent', () => {
  let component: DeferdemoComponent;
  let fixture: ComponentFixture<DeferdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
