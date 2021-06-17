import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductImage } from 'src/app/models/productImage';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.scss']
})
export class ProductZoomComponent implements OnInit {

  @Input() zoom: boolean;
  @Input() imageIndex: number;
  @Input() imageArray: ProductImage[];
  @Output() zoomChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public zoomIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
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