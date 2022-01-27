import { ProductImage } from 'src/app/models/product';

import * as blackSneakers from 'src/app/data/blackSneakers.json';
import * as brownSneakers from 'src/app/data/brownSneakers.json';
import * as whiteSneakers from 'src/app/data/whiteSneakers.json';
import * as whiteShirt from 'src/app/data/whiteShirt.json';

export class ProductRecommendationService {
  private color: string = 'brown';
  private currentImageArray: ProductImage[] = (brownSneakers as any).default;
  private loading: boolean = false;

  public getLoading() {
    return this.loading;
  }

  public getColor(): string {
    return this.color;
  }

  public selectColor(color: string): void {
    switch (color) {
      case 'black': {
        this.currentImageArray = (blackSneakers as any).default;
        this.color = color;
        this.loading = true;
        setTimeout(() => (this.loading = false), 100);
        break;
      }
      case 'brown': {
        this.currentImageArray = (brownSneakers as any).default;
        this.color = color;
        this.loading = true;
        setTimeout(() => (this.loading = false), 100);
        break;
      }
      case 'white': {
        this.currentImageArray = (whiteSneakers as any).default;
        this.color = color;
        this.loading = true;
        setTimeout(() => (this.loading = false), 100);
        break;
      }
    }
  }

  public getColorName(): string {
    switch (this.color) {
      case 'black':
        return 'Schwarz';
      case 'brown':
        return 'Braun';
      case 'white':
        return 'Weiß';
    }
  }

  public getCurrentImageArray(): ProductImage[] {
    return this.currentImageArray;
  }
}
