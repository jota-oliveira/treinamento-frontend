import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent implements OnInit {

  public formAluno: FormGroup;

  @Output() salvarAluno: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarFormulario(new Aluno({
      nome: '',
      email: '',
      cpf: null,
      matricula: null,
      formaIngresso: '',
      turma: []
    }));
  }

  private criarFormulario(aluno: Aluno) {
    this.formAluno = this.formBuilder.group({
      nome: [aluno.nome, Validators.required],
      email: [aluno.email, [Validators.required, Validators.email]],
      cpf: [aluno.cpf, Validators.required],
      matricula: [aluno.matricula, Validators.required],
      formaIngresso: [aluno.formaIngresso, Validators.required]
    });
  }

  public enviarFormulario(): void {
    if (!this.formAluno.valid) { return; }

    this.salvarAluno.emit(this.formAluno.value);
  }

  public getOpcoesFormaDeIngresso = (): any[] => [
    { label: 'Enem', value: 'Enem' },
    { label: 'Enade', value: 'Enade' },
    { label: 'Vestibular', value: 'Vestibular' },
  ]

}
