import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDisciplinaComponent } from './grid-disciplina.component';

describe('GridDisciplinaComponent', () => {
  let component: GridDisciplinaComponent;
  let fixture: ComponentFixture<GridDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
