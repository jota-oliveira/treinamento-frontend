import { ObjetoPessoa } from './ObjetoPessoa';

export abstract class Pessoa {

  private _nome: string;
  private _email: string;
  private _cpf: number;

  constructor(pessoa: ObjetoPessoa) {
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

  get cpf(): number {
    return this._cpf;
  }

  set cpf(cpf: number) {
    this._cpf = cpf;
  }
}
