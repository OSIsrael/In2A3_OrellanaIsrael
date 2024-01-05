import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ej3Page } from './ej3.page';

describe('Ej3Page', () => {
  let component: Ej3Page;
  let fixture: ComponentFixture<Ej3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ej3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
