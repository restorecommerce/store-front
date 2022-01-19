import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product, timeout } from '../products/products.component';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss'],
})
export class ShoesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getShoes();
  }

  getShoes() {
    this.productService.getProducts().subscribe((shoes) => {
      console.log('*************');
      console.log(shoes);
      console.log('============');
      this.products = shoes;
    });
  }
}
