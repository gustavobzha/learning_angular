import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string // Declarando variável
  
  cursos: string[]; 

  constructor(private cursosService: CursosService) { 
    this.nomePortal = "http://loiane.training" // inicializando variável

    // var service = new CursosService(); // Iniciando serviço de forma manual
    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
  }

}
