import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { PoStepperComponent, PoMultiselectOption } from '@portinari/portinari-ui';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from 'aluno/services/aluno.service';
import { DisciplinaService } from 'disciplina/services/disciplina.service';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { Turma } from 'turma/entities/turma';
import { TurmaDTO } from 'turma/entities/turma-dto.interface';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.css']
})
export class FormTurmaComponent implements OnInit {

  @Output() salvarFormulario: EventEmitter<TurmaDTO> = new EventEmitter();
  @ViewChild('stepper', { static: false }) stepper: PoStepperComponent;

  public form: FormGroup;
  private defaultDadosDosSteps = {
    step1: {
      campos: ['anoLetivo', 'descricao', 'numeroVagas', 'periodoLetivo'],
      valido: false,
    },
    step2: {
      campos: ['disciplinas'],
      valido: false,
    },
    step3: {
      campos: ['alunos'],
      valido: false,
    }
  };

  public dadosDosSteps = {...this.defaultDadosDosSteps};

  public alunoOptions: Array<PoMultiselectOption> = [
    { value: 'portinariMultiselect1', label: 'Portinari Multiselect 1' }
  ];

  public disciplinaOptions: Array<PoMultiselectOption> = [
    { value: 'portinariMultiselect1', label: 'Portinari Multiselect 1' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private disciplinaService: DisciplinaService,
    private notificacao: NotificacaoFactoryService
  ) { }

  ngOnInit() {
    this.criarFormulario(
      this.buscarDadosIniciaisDoFormulario()
    );
  }

  public filtrarAlunos(pesquisa: string): void {
    this.alunoService.getList({
      nome: pesquisa
    })
      .subscribe(
        alunos => {
        this.alunoOptions = [
          ...this.alunoOptions,
          ...alunos.map(aluno => (
            { value: aluno.id, label: aluno.nome }
          ))
        ];
        },
        erro => {
          this.notificacao.mensagemErro(erro);
        }
      );
  }

  public filtrarDisciplinas(pesquisa: string): void {
    this.disciplinaService.getList({
      descricao: pesquisa
    })
      .subscribe(
        disciplinas => {
          this.disciplinaOptions = [
            ...this.disciplinaOptions,
            ...disciplinas.map(disciplina => (
              { value: disciplina.id, label: disciplina.descricao }
            ))
          ];
        },
        erro => {
          this.notificacao.mensagemErro(erro);
        }
      );
  }

  private buscarDadosIniciaisDoFormulario(): Turma {
    return new Turma({
      id: null,
      alunos: [],
      anoLetivo: null,
      descricao: null,
      disciplinas: [],
      numeroVagas: null,
      periodoLetivo: null
    });
  }

  private criarFormulario(turma: Turma) {
    this.form = this.formBuilder.group({
      alunos: [turma.alunos, Validators.required],
      anoLetivo: [turma.anoLetivo, Validators.required],
      descricao: [turma.descricao, Validators.required],
      disciplinas: [turma.disciplinas, Validators.required],
      numeroVagas: [turma.numeroVagas, Validators.required],
      periodoLetivo: [turma.periodoLetivo, Validators.required],
    });
  }

  public proximoStep(nomeStepAtual: string): void {
    this.validarStep(nomeStepAtual);

    if (this.dadosDosSteps[nomeStepAtual].valido) {
      this.stepper.next();
    }
  }

  public stepAnterior(): void {
    this.stepper.previous();
  }

  public validarStep(nomeStep: string): void {
    const dadosDoStepAtual = this.dadosDosSteps[nomeStep];
    const validacaoItensDoFormulario: boolean[] = this.validacaoItensPorStep(nomeStep);

    dadosDoStepAtual.valido = validacaoItensDoFormulario.includes(true) ? false : true;
    this.dadosDosSteps[nomeStep] = dadosDoStepAtual;
  }

  private validacaoItensPorStep(nomeStep: string): boolean[] {
    return this.dadosDosSteps[nomeStep].campos
      .map((itemDoForm: string) => {
        return this.form.controls[itemDoForm].invalid;
      });
  }

  public habilitarProximoStep(nomeStep: string): boolean {
    return true;
    return this.dadosDosSteps[nomeStep].valido;
  }

  public enviarFormulario(): void {
    const turma: TurmaDTO = { id: null, ...this.form.value };
    this.salvarFormulario.emit(turma);
  }

  public limparFormulario(): void {
    this.form.reset();
    this.stepper.first();
    this.dadosDosSteps = this.defaultDadosDosSteps;
  }

}
