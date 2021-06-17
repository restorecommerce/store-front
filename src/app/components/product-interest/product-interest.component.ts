import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-interest',
  templateUrl: './product-interest.component.html',
  styleUrls: ['./product-interest.component.scss']
})
export class ProductInterestComponent implements OnInit {
  public switch: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> { this.changing() }, 5000); 
  }

  private changing(): void {
    this.switch = !this.switch;
  }
}
