import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ProductImage } from 'src/app/models/productImage';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.scss']
})
export class ProductZoomComponent implements OnInit, AfterViewChecked {

  @Input() zoom: boolean;
  @Input() imageIndex: number;
  @Input() imageArray: ProductImage[];
  @Output() zoomChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('thumbnails') el:ElementRef;

  public zoomIn: boolean = false;
  public index: number;

  constructor(private rd: Renderer2) {}

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    let allThumbnails = this.el.nativeElement.children[0].children[0].children;
    //allThumbnails.forEach(function(thumb, i){
    //  if (thumb.classList[1] === 'selected') {
    //    return i;
    //  }
    //});

    for (let thumb of allThumbnails) {
      if (thumb.classList[1] != undefined) {
        this.index = Array.prototype.indexOf.call(allThumbnails, thumb);
      }
    };
  }

  public unZoom(): void {
    this.zoomChange.emit(this.zoom=false);
  }

  public previous(): void {
    if (this.imageIndex == 0) {
      this.imageIndex = this.imageArray.length - 1;
    }
    else {
      this.imageIndex--;
    }
  }

  public next(): void {
    if (this.imageIndex == this.imageArray.length - 1) {
      this.imageIndex = 0;
    }
    else {
      this.imageIndex++;
    }
  }

  public select(index: number): void {
    this.imageIndex = index;
  }
}