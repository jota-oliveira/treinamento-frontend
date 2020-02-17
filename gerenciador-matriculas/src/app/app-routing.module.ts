import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'professor', loadChildren: () => import('./professor/professor.module').then(m => m.ProfessorModule) },
  { path: 'aluno', loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule) },
  { path: 'turma', loadChildren: () => import('./turma/turma.module').then(m => m.TurmaModule) },
  { path: 'disciplina', loadChildren: () => import('./disciplina/disciplina.module').then(m => m.DisciplinaModule) },
  { path: 'matriculas', loadChildren: () => import('./matriculas/matriculas.module').then(m => m.MatriculasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
