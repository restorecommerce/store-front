import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutPageGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const cartIsEmpty = this.cartService.getCartItemCount() === 0;
    if (cartIsEmpty) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
    console.log('Your cart items are,', this.cartService.getCartItemCount());
    return;
  }
}
