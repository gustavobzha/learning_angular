import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs: ['nomeQualquer:nome']
  // inputs: ['nomeQualquer'] // apenas a nível de curiosidade mostrar que essas duas formas são possíveis
  // mas por questão de leitura de código fica muito mais claro utilizar o decotator para saber se uma variável
  // é ou não um input-property
})
export class InputPropertyComponent implements OnInit {

  // Decorator Input também faz parte do angular/core e deve ser importado
  @Input() nome: string = ''; //Dessa forma conseguimos export uma propriedade chamada nome
  // para o seletor "app-curso"

  // @Input('nome') nomeQualquer: string = '';
  // O input também possui uma propriedade onde podemos declarar a variável de um nome e no html
  // para fazer o input-property declararmos com outro nome como pode ser notado, em Data-binding.component.html
  // estamos falando que "nome" irá receber nomeDoCurso, mas na verdade "nome" é a variável nomeQualquer.

  constructor() { }

  ngOnInit() {
  }

}
