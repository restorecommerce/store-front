import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-teaser',
  templateUrl: './service-teaser.component.html',
  styleUrls: ['./service-teaser.component.scss'],
})
export class ServiceTeaserComponent {
  constructor(private router: Router) {}

  public navigate(value: string): void {
    this.router.navigateByUrl(value);
  }
}
