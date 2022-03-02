import { Directive, ElementRef, Renderer, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  @HostBinding('style.border') border:string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  		this.changeColor('blue');
  		this.border= '2px solid black';
   }
  
   changeColor(color: string){
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color)
    }
}
