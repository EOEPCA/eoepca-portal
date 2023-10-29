import { Directive, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elastic]'
})
export class ElasticDirective implements AfterViewInit {

  private initialHeight: string | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // You can set the initialHeight here if needed
    this.initialHeight = el.nativeElement.style.height;
  }

  ngAfterViewInit() {
    this.resize();
  }

  @HostListener('input', ['$event'])
  @HostListener('change', ['$event'])
  onInput(event: Event) {
    this.resize();
  }

  private resize() {
    this.renderer.setStyle(this.el.nativeElement, 'height', this.initialHeight);
    this.renderer.setStyle(this.el.nativeElement, 'height', `${this.el.nativeElement.scrollHeight}px`);
  }
}