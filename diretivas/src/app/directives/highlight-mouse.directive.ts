import { HostBinding } from '@angular/core';
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() { //'mouseenter' é o nome do evento que queremos escutar
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseOut() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  } //'mouseleave'

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    // aqui poderia colocar qualquer código extra
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
    ) { }

}
