import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ScreenService } from 'src/app/core/services/screen.service';
import { IoRestorecommerceImageImage, IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnChanges {
  loading = false;
  zoomImage = false;
  productZoomContainerWidth: number;
  public galleryImages: IoRestorecommerceImageImage[];
  imageIndex = 0;



  @Input() product: IoRestorecommerceProductPhysicalVariant;

  constructor(
    private displayService: ScreenService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadImages();
    // this.galleryImages[0].url
  }

  loadImages() {
    this.loading = true;
    setTimeout(() => {
      const { images } = this.product;
      this.galleryImages = images;
      this.loading = false;
    }, 100);
  }

  zoom(): void {
    this.zoomImage = true;
  }

  screenWidth() {
    return this.displayService.getScreenSize();
  }

  tabletWidth() {
    return this.displayService.tabletSize();
  }
}
