import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {

  @Input() tooltip = '';

  constructor(private el : ElementRef, private renderer :Renderer2) { }


  ngOnInit(): void {}


  @HostListener('mouseenter') onMouseEnter() {
      this.customTooltipContent();
  }

  @HostListener('mouseleave') onMouseLeave() {    
    this.renderer.setStyle(this.el.nativeElement, 'visibility','hidden')
  }

  private customTooltipContent(){
      this.renderer.setStyle(this.el.nativeElement, 'visibility','visible')
  }
}
