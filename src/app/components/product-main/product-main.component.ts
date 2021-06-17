import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {

  public zoomImage = false;
  public imageIndex = 0;

  ngOnInit(): void {}
}
