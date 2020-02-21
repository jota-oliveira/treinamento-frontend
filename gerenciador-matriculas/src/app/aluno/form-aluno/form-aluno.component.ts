import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { ValidaCPF } from 'utils/form-validators-customizados';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent implements OnInit, OnChanges {

  public formAluno: FormGroup;
  private dadosIniciais: Aluno = null;

  @Input() aluno: Aluno;
  @Output() salvarAluno: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    this.dadosIniciais = changes.aluno.currentValue;
  }

  ngOnInit() {
    this.criarFormulario(
      this.buscarDadosIniciaisDoFormulario()
    );
  }

  private buscarDadosIniciaisDoFormulario(): Aluno {
    if (this.dadosIniciais) { return this.dadosIniciais; }

    return new Aluno({
      nome: '',
      email: '',
      cpf: null,
      matricula: null,
      formaIngresso: '',
      turma: []
    });
  }

  private criarFormulario(aluno: Aluno) {
    this.formAluno = this.formBuilder.group({
      nome: [aluno.nome, Validators.required],
      email: [aluno.email, [Validators.required, Validators.email]],
      cpf: [aluno.cpf, [Validators.required, ValidaCPF]],
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

  public limparFormulario(): void {
    this.formAluno.reset();
  }

}
