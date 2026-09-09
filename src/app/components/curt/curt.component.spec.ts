import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtComponent } from './curt.component';

describe('CurtComponent', () => {
  let component: CurtComponent;
  let fixture: ComponentFixture<CurtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
