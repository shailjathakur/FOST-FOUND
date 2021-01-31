import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerComponent } from './galler.component';

describe('GallerComponent', () => {
  let component: GallerComponent;
  let fixture: ComponentFixture<GallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
