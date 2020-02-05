import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'resize-divider',
  templateUrl: './resize-divider.component.html',
  styleUrls: ['./resize-divider.component.css']
})
export class ResizeDividerComponent implements AfterViewInit {

  @ViewChild('resizeContainer', { static: false }) resizeContainer: ElementRef;
  @ViewChild('dragger', { static: false }) dragger: ElementRef;
  @ViewChild('contentLeft', { static: false }) contentLeft: ElementRef;
  @ViewChild('contentRight', { static: false }) contentRight: ElementRef;

  name = 'Angular';

  constructor(
    private renderer: Renderer2,
  ) {

  }

  ngAfterViewInit() {
    let draggable = false;

    this.renderer.listen(this.dragger.nativeElement, 'mousedown', () => {
      draggable = true;
    });

    this.renderer.listen(this.resizeContainer.nativeElement, 'mousemove', (event) => {
      if (draggable) {
        this.resizeContent(event);
      }
    });

    this.renderer.listen(this.resizeContainer.nativeElement, 'mouseup', (event) => {
      if (draggable) {
        this.resizeContent(event);
        draggable = false;
      }
    });

    this.renderer.listen(this.resizeContainer.nativeElement, 'mouseleave', () => {
      draggable = false;
    });
  }

  private resizeContent(event: any) {
    let containerGeo = this.resizeContainer.nativeElement.getBoundingClientRect();
    if (event.clientX > containerGeo.left) {
      this.renderer.setStyle(
        this.dragger.nativeElement,
        'left',
        event.clientX - containerGeo.left
      );
      this.renderer.setStyle(
        this.contentLeft.nativeElement,
        'width',
        event.clientX - containerGeo.left
      );
      this.renderer.setStyle(
        this.contentRight.nativeElement,
        'width',
        containerGeo.width - (event.clientX - containerGeo.left)
      );
    }
  }

}
