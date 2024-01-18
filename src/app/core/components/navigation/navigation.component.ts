import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategoryService } from 'src/app/features/products/services/product-category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  categories$ = this.productCategoryService.category$;

  constructor(
    private router: Router,
    private productCategoryService: ProductCategoryService
  ) {}

  navigate(value: string): void {
    this.router.navigateByUrl(value);
  }
}
