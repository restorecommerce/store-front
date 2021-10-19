import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit, AfterViewChecked {
  public loading = false;
  public zoomImage = false;
  public imageIndex = 0;
  public dataService: CartService;
  public productZoomContainerWidth: number;


  @ViewChild('pictures') pictures:ElementRef;

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    let windowHeight = window.innerHeight;
    let imageContainerWidth = this.pictures.nativeElement.children[0].children[0].offsetWidth;
    let imageContainerHeight = this.pictures.nativeElement.children[0].children[0].offsetHeight;
    this.productZoomContainerWidth = (imageContainerWidth/imageContainerHeight)*windowHeight - 115 ;
  }

  ngOnChanges() {
    this.loading = true;
    setTimeout(() => this.loading = false, 100)
  }

  public zoom(): void {
    this.zoomImage = true;
  }
}
