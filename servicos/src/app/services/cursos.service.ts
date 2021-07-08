import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter(); // Emite eventos para componentes que herdarão a mesma instância
  static criouNovoCurso = new EventEmitter<string>(); // Emite eventos para componentes sem relação
  // EventEmitter<string> só foi utilizado para mostrar que também podemos declarar o tipo.
  
  private cursos: string[] = ['Angular', 'Java', 'TypeScript'];
  
  constructor() { 
    console.log('CursosService')
  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
