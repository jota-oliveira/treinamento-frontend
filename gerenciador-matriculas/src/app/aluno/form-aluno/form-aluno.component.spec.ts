import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAlunoComponent } from './form-aluno.component';
import { PoFieldModule, PoButtonModule } from '@portinari/portinari-ui';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Aluno } from 'aluno/entities/aluno';

describe('FormAlunoComponent', () => {
  let component: FormAlunoComponent;
  let fixture: ComponentFixture<FormAlunoComponent>;
  const mockAluno: Aluno = new Aluno({
    id: 1,
    nome: 'Luke Skywalker',
    email: 'luke@galaxynet.com',
    cpf: '11111111111',
    matricula: 15,
    formaIngresso: 'Vestibular',
    turma: []
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlunoComponent ],
      imports: [
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        FormAlunoComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('Formulário geral', () => {
    it('deve criar o component', () => {
      expect(component).toBeTruthy();
    });

    it('os itens precisam ser required', () => {
      const formControls = component.form.controls;

      expect(formControls.nome.untouched).toBeTruthy();
      expect(formControls.nome.dirty).toBeFalsy();
      expect(formControls.nome.valid).toBeFalsy();

      formControls.nome.setValue('test');
      expect(formControls.nome.valid).toBeTruthy();

      formControls.nome.setValue('');
      expect(formControls.nome.valid).toBeFalsy();
    });

    it('cpf precisa ser válido', () => {
      const formControls = component.form.controls;

      expect(formControls.cpf.untouched).toBeTruthy();
      expect(formControls.cpf.dirty).toBeFalsy();
      expect(formControls.cpf.valid).toBeFalsy();

      formControls.cpf.setValue('test');
      expect(formControls.cpf.valid).toBeFalsy();
      formControls.cpf.setValue('');
      expect(formControls.cpf.valid).toBeFalsy();
      formControls.cpf.setValue('12332112332');
      expect(formControls.cpf.valid).toBeFalsy();
      formControls.cpf.setValue('853.513.468-93');
      expect(formControls.cpf.valid).toBeFalsy();
      formControls.cpf.setValue('85351346893');
      expect(formControls.cpf.valid).toBeTruthy();
    });

    it('email precisa ser válido', () => {
      const formControls = component.form.controls;

      expect(formControls.email.untouched).toBeTruthy();
      expect(formControls.email.dirty).toBeFalsy();
      expect(formControls.email.valid).toBeFalsy();

      formControls.email.setValue('test');
      expect(formControls.email.valid).toBeFalsy();
      formControls.email.setValue('');
      expect(formControls.email.valid).toBeFalsy();
      formControls.email.setValue('12332112332');
      expect(formControls.email.valid).toBeFalsy();
      formControls.email.setValue('jdoaisdj@djasiod');
      expect(formControls.email.valid).toBeFalsy();
      formControls.email.setValue('teste@teste.com');
      expect(formControls.email.valid).toBeTruthy();
    });
  });

  describe('Formulário no modo de criação', () => {
    it('deve conter um formulário instanciado', () => {
      expect(component.form).toBeTruthy();
    });

    it('status do formulário deve estar como INVALID', () => {
      expect(component.form.status).toBe('INVALID');
    });

    it('buscarDadosIniciaisDoFormulario deve entregar um aluno nulo como dado inicial do formulário', () => {
      const aluno = new Aluno({
        id: null,
        nome: null,
        email: null,
        cpf: null,
        matricula: null,
        formaIngresso: null,
        turma: []
      }).toObjectDTO();

      expect(component['buscarDadosIniciaisDoFormulario']().toObjectDTO()).toEqual(aluno);
    });

    it('deve criar um formulário de alunos com os dados não preenchidos', () => {
      const formControls = component.form.controls;

      expect(formControls.nome.value).toBeNull();
      expect(formControls.email.value).toBeNull();
      expect(formControls.cpf.value).toBeNull();
      expect(formControls.matricula.value).toBeNull();
      expect(formControls.formaIngresso.value).toBeNull();
    });
  });

  describe('Formulário no modo de edição', () => {
    it('buscarDadosIniciaisDoFormulario deve entregar um aluno preenchido como dado inicial do formulário', () => {
      component.aluno = mockAluno;
      expect(component['buscarDadosIniciaisDoFormulario']().toObjectDTO()).toEqual(mockAluno.toObjectDTO());
    });

    it('deve criar um formulário com dados preenchidos', () => {
      component.aluno = mockAluno;
      component['criarFormulario'](component['buscarDadosIniciaisDoFormulario']());

      const formControls = component.form.controls;

      expect(formControls.nome.value !== null).toBeTruthy();
      expect(formControls.email.value !== null).toBeTruthy();
      expect(formControls.cpf.value !== null).toBeTruthy();
      expect(formControls.matricula.value !== null).toBeTruthy();
      expect(formControls.formaIngresso.value !== null).toBeTruthy();
    });
  });

});
