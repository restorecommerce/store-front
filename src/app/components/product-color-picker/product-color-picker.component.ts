import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-color-picker',
  templateUrl: './product-color-picker.component.html',
  styleUrls: ['./product-color-picker.component.scss'],
})
export class ProductColorPickerComponent implements OnInit {
  @Input() selectedColor: string;
  @Input() colors: string[];

  constructor() {}

  ngOnInit(): void {}

  onChangeProductColor(color: string) {}
}
