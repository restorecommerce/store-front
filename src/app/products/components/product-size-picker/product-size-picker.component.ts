import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-size-picker',
  templateUrl: './product-size-picker.component.html',
  styleUrls: ['./product-size-picker.component.scss'],
})
export class ProductSizePickerComponent {
  size: number;

  @Input() sizeArray: number[];
  @Output() sizeSelected = new EventEmitter<number>();

  constructor() {}

  // listen for change on the product size picker, and then proceed
  // to emit it so that the parent stores IItem
}
