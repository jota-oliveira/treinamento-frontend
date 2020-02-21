import { AbstractControl } from '@angular/forms';
import { Validacoes } from './validacoes.helper';

export function ValidaCPF(control: AbstractControl) {
  let cpfValido = true;

  if (control.value) {
    try {
      cpfValido = Validacoes.validaCPF(control.value);
    } catch (error) {
      cpfValido = false;
    }
  }

  return cpfValido ? null : { cpfInvalido: true };
}
