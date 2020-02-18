// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatriculasComponent } from './matriculas.component';
// import { MatriculasService } from './services/matriculas.service';
// import { Matriculas } from './entities/matriculas';
// import { PoModule, PoButtonModule, PoTableModule } from '@portinari/portinari-ui';

// describe('MatriculasComponent', () => {
//   let component: MatriculasComponent;
//   let fixture: ComponentFixture<MatriculasComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         PoModule,
//         PoButtonModule,
//         PoTableModule
//       ],
//       declarations: [ MatriculasComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MatriculasComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('deve buscar as matriculas ao iniciar o componente', () => {
//     const matriculasService = new MatriculasService();

//     matriculasService
//       .getMatriculas()
//       .subscribe(matriculas => {
//         expect(matriculas instanceof Matriculas).toBeTruthy();
//       });
//   });

// });
