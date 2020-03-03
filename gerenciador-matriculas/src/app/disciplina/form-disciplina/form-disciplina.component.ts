import { Component, OnInit, Input } from '@angular/core';
import { Disciplina } from 'disciplina/entities/disciplina';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBaseComponent } from 'utils/forms/form-base-component';

@Component({
  selector: 'app-form-disciplina',
  templateUrl: './form-disciplina.component.html',
  styleUrls: ['./form-disciplina.component.css']
})
export class FormDisciplinaComponent extends FormBaseComponent implements OnInit {

  @Input() disciplina: Disciplina;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.criarFormulario(
      this.buscarDadosIniciaisDoFormulario()
    );
  }

  private buscarDadosIniciaisDoFormulario(): Disciplina {
    if (this.disciplina) { return this.disciplina; }

    return new Disciplina({
      id: null,
      cargaHoraria: null,
      descricao: null,
      professor: null,
      sigla: null,
      turma: []
    });
  }

  private criarFormulario(disciplina: Disciplina) {
    this.form = this.formBuilder.group({
      cargaHoraria: [disciplina.cargaHoraria, Validators.required],
      descricao: [disciplina.descricao, Validators.required],
      sigla: [disciplina.sigla, Validators.required]
    });
  }

}
