import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCards]'
})
export class BorderCardsDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder("#f5f5f5");  
    
  }
  
  // definir la couleur  initiale et mettre un alias pour les bordures
  @Input("pokemonBorderCards") borderColor: string |undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }
  // définission de methode de style sur le dom
  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }
}
