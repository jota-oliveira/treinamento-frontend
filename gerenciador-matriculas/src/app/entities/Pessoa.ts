import { PessoaDTO } from './pessoa-dto.interface';
import { Validacoes } from 'utils/validacoes.helper';
import { Modelo } from './modelo.interface';
import { TurmasResolver } from 'turma/turmas.resolver';

export abstract class Pessoa implements Modelo {

  private _id: number;
  private _nome: string;
  private _email: string;
  private _cpf: string;

  constructor(pessoa: PessoaDTO) {
    this.cpfValido(pessoa.cpf);

    this._id = pessoa.id;
    this._nome = pessoa.nome;
    this._email = pessoa.email;
    this._cpf = pessoa.cpf;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get email(): string {
      return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this.cpfValido(cpf);
    this._cpf = cpf;
  }

  private stringContemApenasDigitos(item: string): void {
    const patternApenasNumeros = /^\d+$/;

    if (!patternApenasNumeros.test(item)) {
      throw new Error('Por favor, informe apenas os dígitos do CPF');
    }
  }

  private cpfValido = (cpf: string = null): void => {
    if (cpf) {
      return this.verificarCPF(cpf);
    }
  }

  private verificarCPF(cpf: string) {
    try {
      this.stringContemApenasDigitos(cpf);
      if (!Validacoes.validaCPF(cpf)) { throw new Error('CPF inválido'); }
    } catch (error) {
      throw error;
    }
  }

  public toObjectDTO(): PessoaDTO {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf
    };
  }

}
