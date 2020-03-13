import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBaseComponent } from './form-base-component';
import { Component, OnInit } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

@Component({
  selector: 'app-fake-form',
  template: '<form [formGroup]="form"><input type="text" name="nome" formControlName="nome" /></form>',
})
class FakeFormComponent extends FormBaseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({ nome: ['', Validators.required] });
  }
}

let component: FakeFormComponent;
let fixture: ComponentFixture<FakeFormComponent>;

describe('FormBaseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FakeFormComponent],
      imports: [ ReactiveFormsModule ],
      providers: [
        FormBuilder,
        FakeFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });

  it('enviarFormulario deve disparar o eventEmitter eventoSalvar', () => {
    spyOn(component.eventoSalvar, 'emit');
    component.form.controls.nome.setValue('teste');
    component.enviarFormulario();

    expect(component.eventoSalvar.emit).toHaveBeenCalled();
  });

  it('enviarFormulario não deve disparar o eventEmitter eventoSalvar se formulário inválido', () => {
    spyOn(component.eventoSalvar, 'emit');
    component.enviarFormulario();
    expect(component.eventoSalvar.emit).not.toHaveBeenCalled();
  });

  it('limparFormulario deve limpar o formulario quando chamado', () => {
    component.form.controls.nome.setValue('teste');
    expect(component.form.value.nome).toEqual('teste');
    component.limparFormulario();
    expect(component.form.value.nome).toBe(null);
  });

});
