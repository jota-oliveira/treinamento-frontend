import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { ValidaCPF } from 'utils/form-validators-customizados';
import { FormBuilder, Validators } from '@angular/forms';
import { PoSelectOption } from '@portinari/portinari-ui';
import { FormBaseComponent } from 'utils/forms/form-base-component';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent extends FormBaseComponent implements OnInit {

  public opcoesFormaDeIngresso: PoSelectOption[];

  @Input() aluno: Aluno;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.criarFormulario(
      this.buscarDadosIniciaisDoFormulario()
    );
  }

  private buscarDadosIniciaisDoFormulario(): Aluno {
    if (this.aluno) { return this.aluno; }

    return new Aluno({
      id: null,
      nome: '',
      email: '',
      cpf: null,
      matricula: null,
      formaIngresso: '',
      turma: []
    });
  }

  private criarFormulario(aluno: Aluno) {
    this.opcoesFormaDeIngresso = this.getOpcoesFormaDeIngresso();

    this.form = this.formBuilder.group({
      nome: [aluno.nome, Validators.required],
      email: [aluno.email, [Validators.required, Validators.email]],
      cpf: [aluno.cpf, [Validators.required, ValidaCPF]],
      matricula: [aluno.matricula, Validators.required],
      formaIngresso: [aluno.formaIngresso, Validators.required]
    });
  }

  private getOpcoesFormaDeIngresso(): PoSelectOption[] {
    return [
      { label: 'Enem', value: 'Enem' },
      { label: 'Enade', value: 'Enade' },
      { label: 'Vestibular', value: 'Vestibular' },
    ];
  }

}
