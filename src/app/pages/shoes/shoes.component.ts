import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product, timeout } from '../products/products.component';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss'],
})
export class ShoesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getShoes();
  }

  getShoes() {
    this.productService.getShoes().subscribe((shoes) => {
      console.log('This was ran, and it returned!');
      console.log(shoes);
      console.log('*****************');
      this.products = shoes;
    });
  }

  onProductClicked(payload: number | string) {
    this.router.navigate(['products', payload]);
  }

  onProductColorChanged(payload: { id: string | number; color: string }) {
    this.products = this.products.map((shoe) => {
      if (shoe.id === payload.id) {
        console.log('We want to change the color of the product!');
        shoe.selectedColor = payload.color;
      }
      return shoe;
    });

    // This is not optimal!
  }
}
