import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private el: ElementRef) { }

  @Input() defaultColor: string;
  @Input('appHighlight') highlightColor: string;

  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // tslint:disable-next-line:typedef
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
