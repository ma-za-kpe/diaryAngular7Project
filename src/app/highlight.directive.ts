import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = "lime";
  }

  // @HostListener("click") onClicks() {
  //   this.textDeco("gray");
  // }

  // @HostListener("dblclick") onDoubleClicks() {
  //   this.textDeco("None");
  // }

  // private textDeco(action: string) {
  //   // this.elem.nativeElement.style.textDecoration = action;
  //   this.elem.nativeElement.style.backgroundColor = action;
  // }
}
