import { FormGroup } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';

export abstract class FormBaseComponent {

  public form: FormGroup;
  @Output() eventoSalvar: EventEmitter<any> = new EventEmitter();

  public enviarFormulario(): void {
    if (!this.form.valid) { return; }

    this.eventoSalvar.emit(this.form.value);
  }

  public limparFormulario(): void {
    this.form.reset();
  }

}
