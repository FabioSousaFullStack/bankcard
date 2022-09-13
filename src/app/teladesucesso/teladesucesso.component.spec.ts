import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeladesucessoComponent } from './teladesucesso.component';

describe('TeladesucessoComponent', () => {
  let component: TeladesucessoComponent;
  let fixture: ComponentFixture<TeladesucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeladesucessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeladesucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
