import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      icon: 'po-icon po-icon-home',
      link: '/',
      label: 'Início'
    },
    {
      icon: 'po-icon po-icon-document-filled',
      link: 'matriculas',
      label: 'Matrículas'
    },
    {
      icon: 'po-icon po-icon-document-filled',
      link: 'aluno',
      label: 'aluno'
    },
    {
      icon: 'po-icon po-icon-document-filled',
      link: 'professor',
      label: 'professor'
    },
    {
      icon: 'po-icon po-icon-document-filled',
      link: 'disciplina',
      label: 'disciplina'
    }
  ];
}
