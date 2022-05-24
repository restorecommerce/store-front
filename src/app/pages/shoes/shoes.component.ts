import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product, timeout } from '../../components/products/products.component';

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
      this.products = shoes;
    });
  }
}
