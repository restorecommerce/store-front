import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-checkout-forms',
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.scss']
})

export class CheckoutFormsComponent implements OnInit {

  private translateService: TranslateService;

  showTabOne:boolean = true;
  showTabTwo:boolean = false;
  showTabThree:boolean = false;

  constructor(private secondService: TranslateService) {
    this.translateService = this.secondService;
  }

  ngOnInit(): void {
  }

}
