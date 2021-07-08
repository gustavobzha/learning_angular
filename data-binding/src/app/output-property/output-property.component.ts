import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //outputs: ['mudouValor'] assim como o Input, o output também pode ser declarado aqui, mas é desaconselhável.
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0; // Recebendo valor do componente pai através do @Input

  @Output() mudouValor = new EventEmitter(); // Expondo um evento/valor para o componente pai através do @Output

  @ViewChild('campoInput') campoValorInput: ElementRef;
  
  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor}); // como argumento podemos passar qualquer valor, seja uma stringo ou um objeto complexo
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor}); // como argumento podemos passar qualquer valor, seja uma stringo ou um objeto complexo
  }

  constructor() { }

  ngOnInit() {
  }

}
