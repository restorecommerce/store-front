import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-color-picker',
  templateUrl: './product-color-picker.component.html',
  styleUrls: ['./product-color-picker.component.scss'],
})
export class ProductColorPickerComponent {
  @Input() selectedColor: string;
  @Input() colors: string[] = [];

  @Output() mouseOver = new EventEmitter();
  @Output() mouseOut = new EventEmitter();

  constructor() {}

  onMouseEnter(color: string) {
    this.mouseOver.emit(color);
  }

  onMouseLeave(color: string) {
    this.mouseOut.emit(color);
  }

  onChangeProductColor(color: string) {}
}
