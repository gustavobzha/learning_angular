import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      // Ele vai renderizar essa view embutida no nosso template
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } 
    else { // Caso a condição seja verdadeira
      //Não queremos que seja renderizado mais, então limpamos a view, dessa forma distruindo o elemento
      this._viewContainerRef.clear();
    }
  }

  //Injetando as dependências
  constructor(private _templateRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) { }
}
