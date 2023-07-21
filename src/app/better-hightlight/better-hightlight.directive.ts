import { ElementRef, HostBinding, HostListener } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

ngOnInit(): void {
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey' )
  // this.renderer.setStyle(this.elRef.nativeElement, 'color','white' )
}

//inshort hostlistener is used for events and hostbinding is used for accessing the dom elements
//  without using the renderer and elementRef ,native element

//setting the initial value
@HostBinding('style.backgroundColor') background : string = 'red';
@HostBinding('style.color') color : string = 'black';

// we can use the hostbinding in place of renderer and it is easy to use to manipulate the dom
@HostListener('mouseenter') mouseover(evenetData: Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'color','red' )
  this.background = 'blue'
  this.color = 'white'
}
@HostListener('mouseleave') mouseleave(evenetData: Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'color','white' )
  this.background = 'transparent'
  this.color = 'black'
}

}
//by using hostlistener we can handle the dom events useing the renderer to access the dom elements

// In Angular, Renderer2 is a service provided by the Angular framework to manipulate the DOM safely.
// It is used to interact with the underlying DOM elements without directly accessing or modifying them through ElementRef or using vanilla JavaScript DOM manipulation.
// The use of Renderer2 ensures that your application remains secure and is compatible with server-side rendering or web workers.

// The main reason for using Renderer2 instead of directly manipulating the DOM is that it allows Angular to
// work seamlessly with different rendering engines, such as those used in browsers or server-side rendering.
