import { ObjetoPessoa } from './ObjetoPessoa';
import { Validacoes } from 'utils/validacoes.helper';

export abstract class Pessoa {

  id: number;
  private _nome: string;
  private _email: string;
  private _cpf: string;

  constructor(pessoa: ObjetoPessoa) {
    this.cpfValido(pessoa.cpf);

    this.id = pessoa.id;
    this._nome = pessoa.nome;
    this._email = pessoa.email;
    this._cpf = pessoa.cpf;
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
    const patternApenasNumeros = /^[0-9]/;

    if (!patternApenasNumeros.test(item)) {
      throw new Error('Por favor, informe apenas os dígitos do CPF');
    }
  }

  private cpfValido = (cpf: string = null): void => {
    if (cpf) {
      try {
          this.stringContemApenasDigitos(cpf);
          if (!Validacoes.validaCPF(cpf)) { throw new Error('CPF inválido'); }
      } catch (error) {
        throw new Error(error);
      }
    }
  }

}
