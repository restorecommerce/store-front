import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-size-picker',
  templateUrl: './product-size-picker.component.html',
  styleUrls: ['./product-size-picker.component.scss']
})
export class ProductSizePickerComponent implements OnInit {
  size = '';

  sizeArray = ['39', '40', '41', '42', '43', '44', '45', '46']

  constructor() { }

  ngOnInit(): void {}
  
}
