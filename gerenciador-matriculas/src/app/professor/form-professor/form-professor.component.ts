import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Professor } from 'professor/entities/professor';
import { ValidaCPF } from 'utils/form-validators-customizados';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from 'utils/forms/form-base-component';

@Component({
  selector: 'app-form-professor',
  templateUrl: './form-professor.component.html',
  styleUrls: ['./form-professor.component.css']
})
export class FormProfessorComponent extends FormBaseComponent implements OnInit {

  @Input() professor: Professor;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.criarFormulario(
      this.buscarDadosIniciaisDoFormulario()
    );
  }

  private buscarDadosIniciaisDoFormulario() {
    if (this.professor) { return this.professor; }

    return new Professor({
      id: null,
      nome: '',
      email: '',
      cpf: null,
      disciplina: [],
      titulacao: ''
    });
  }

  private criarFormulario(professor: Professor) {
    this.form = this.formBuilder.group({
      nome: [professor.nome, Validators.required],
      email: [professor.email, [Validators.required, Validators.email]],
      cpf: [professor.cpf, [Validators.required, ValidaCPF]],
      titulacao: [professor.titulacao, Validators.required],
    });
  }

}
