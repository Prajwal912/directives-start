import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  //[] used this because now we can use the highlight directive without [] anywhere
 selector:'[appBasicHighlight]'
})
export class BasicHighLightDirective implements OnInit{
   constructor(private elemRef: ElementRef){}

   ngOnInit(){
    // ElementRef is a class in Angular that allows you to access and manipulate the underlying DOM element associated with a component or directive.
     this.elemRef.nativeElement.style.backgroundColor = 'green'
   }
}

