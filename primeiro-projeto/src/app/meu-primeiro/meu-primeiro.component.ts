import { Component } from '@angular/core';

@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p> Meu primeiro component do angular 6 </p>
    `
}) //Para indicar ao angular que essa classe é um componente do angular e {} são os metadados (detalhes) como se fosse um objeto em JS com chave e valor

export class MeuPrimeiroComponent { }