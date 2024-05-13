import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoogieBtnComponent } from './boogie-btn.component';

describe('BoogieBtnComponent', () => {
  let component: BoogieBtnComponent;
  let fixture: ComponentFixture<BoogieBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoogieBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoogieBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
