import { Component, OnInit } from '@angular/core';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      cursoCriado => this.cursos.push(cursoCriado)
    )
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

}
