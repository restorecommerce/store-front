import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
} from '@angular/core';
import { ProductImage } from 'src/app/models/product';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.scss'],
})
export class ProductZoomComponent implements OnInit, AfterViewChecked {
  @Input() zoom: boolean;
  @Input() imageIndex: number;
  @Input() zoomOutWidth: number;
  @Input() imageArray: ProductImage[];
  @Output() zoomChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('productZoomContainer') productZoomContainer: ElementRef;
  @ViewChild('thumbnails') thumbnails: ElementRef;
  @ViewChild('pictures') pictures: ElementRef;
  @ViewChild('image') image: ElementRef;

  public zoomIn: boolean = false;
  public imageArrayIndex: number;
  public zoomWidth: number;
  public scrollWindow;
  public lastPoint = { x: null, y: null };
  constructor() {}

  ngOnInit(): void {
    this.zoomWidth = this.zoomOutWidth;
  }

  ngAfterViewChecked() {
    this.scrollWindow = document.querySelector('vcl-panel-dialog');
  }

  @HostListener('click') getIndex() {
    let selectedThumbnail =
      this.productZoomContainer.nativeElement.querySelector(
        'div.gallery-thumb-wrapper.selected'
      );
    let allThumbnails = selectedThumbnail.parentNode;
    this.imageArrayIndex = Array.prototype.indexOf.call(
      allThumbnails.children,
      selectedThumbnail
    );
  }

  @HostListener('window:keydown.arrowup') scrollUp() {
    this.scrollWindow.scrollBy(0, -27);
  }

  @HostListener('window:keydown.arrowdown') scrollDown() {
    this.scrollWindow.scrollBy(0, 27);
  }

  zoomOutImageClicked(event) {
    if (event.srcElement.src != undefined) {
      this.zoomWidth = event.path[0].naturalWidth;
      this.zoomIn = true;
    }
  }

  zoomInImageClicked(event) {
    this.zoomWidth = this.zoomOutWidth;
    this.zoomIn = false;
  }

  mouseScroll(event) {
    const leftOrRight =
      event.clientX > this.lastPoint.x
        ? 'right'
        : event.clientX < this.lastPoint.x
        ? 'left'
        : 'none';
    const upOrDown =
      event.clientY > this.lastPoint.y
        ? 'down'
        : event.clientY < this.lastPoint.y
        ? 'up'
        : 'none';

    if (leftOrRight === 'right') {
      this.scrollWindow.scrollBy(20, 0);
    }

    if (leftOrRight === 'left') {
      this.scrollWindow.scrollBy(-20, 0);
    }

    if (upOrDown === 'down') {
      this.scrollWindow.scrollBy(0, 20);
    }

    if (upOrDown === 'up') {
      this.scrollWindow.scrollBy(0, -20);
    }

    this.lastPoint.x = event.clientX;
    this.lastPoint.y = event.clientY;
  }

  public unZoom(): void {
    this.zoomChange.emit((this.zoom = false));
  }

  public previous(): void {
    if (this.imageIndex == 0) {
      this.imageIndex = this.imageArray.length - 1;
    } else {
      this.imageIndex--;
    }
  }

  public next(): void {
    if (this.imageIndex == this.imageArray.length - 1) {
      this.imageIndex = 0;
    } else {
      this.imageIndex++;
    }
  }

  public select(index: number): void {
    this.imageIndex = index;
  }
}
