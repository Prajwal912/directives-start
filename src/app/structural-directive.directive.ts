import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {
//when using the directive then use the input
//if we are creating the property i have to set it to use
// to grab the template -- TemplateRef
// to grab the view container or which part of the template -- ViewContainerRef
//createEmbeddedView is used to access the dom of the grabbed template particular part where we have to work and insert the condition that we made through directive
//same name to be used when using the custom directive name
@Input() set appStructuralDirective(condition: boolean){
  if(!condition){
    this.vcref.createEmbeddedView(this.templateref)
  }else{
    this.vcref.clear()
  }
}




  constructor(private templateref: TemplateRef<any>, private vcref: ViewContainerRef) { }

}
