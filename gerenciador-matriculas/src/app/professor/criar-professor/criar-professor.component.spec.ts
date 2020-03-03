import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProfessorComponent } from './criar-professor.component';

describe('CriarProfessorComponent', () => {
  let component: CriarProfessorComponent;
  let fixture: ComponentFixture<CriarProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
