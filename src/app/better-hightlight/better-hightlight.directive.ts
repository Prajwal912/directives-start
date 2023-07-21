import { ElementRef, HostListener } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

ngOnInit(): void {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey' )
  // this.renderer.setStyle(this.elRef.nativeElement, 'color','white' )
}

@HostListener('mouseenter') mouseover(evenetData: Event){
  this.renderer.setStyle(this.elRef.nativeElement, 'color','red' )
}
@HostListener('mouseleave') mouseleave(evenetData: Event){
  this.renderer.setStyle(this.elRef.nativeElement, 'color','white' )
}

}
//by using hostlistener we can handle the dom events useing the renderer to access the dom elements

// In Angular, Renderer2 is a service provided by the Angular framework to manipulate the DOM safely.
// It is used to interact with the underlying DOM elements without directly accessing or modifying them through ElementRef or using vanilla JavaScript DOM manipulation.
// The use of Renderer2 ensures that your application remains secure and is compatible with server-side rendering or web workers.

// The main reason for using Renderer2 instead of directly manipulating the DOM is that it allows Angular to
// work seamlessly with different rendering engines, such as those used in browsers or server-side rendering.
