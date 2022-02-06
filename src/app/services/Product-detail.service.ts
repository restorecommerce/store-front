import { Injectable } from '@angular/core';
import { Product } from '../models/product';

export class ProductDetailService {
  status = 'idle';
  product: Product;
}
