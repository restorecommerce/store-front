import { Injectable } from '@angular/core';
import {
  IIoRestorecommerceOrderItem,
  IIoRestorecommerceOrderOrderList,
  IoRestorecommerceFulfillmentState,
  IoRestorecommerceInvoicePaymentState,
  IoRestorecommerceOrderOrderState,
  ModeType,
} from 'src/app/generated/graphql';
import { CartService } from '../../cart/services/cart.service';

interface deliveryData {
  deliveryOption: string;
  deliveryAddress: any;
}

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  deliveryData: deliveryData;
  paymentData: string;

  constructor(private cartService: CartService) {}

  // Ideally based on the payment method, example paypal. We would handle payment before placing order.
  // Inject chart srv.
  // Inject user srv.
  // Inject address srv: used to get user's address.

  // Create order.

  createOrder() {
    console.log('Creating Order for');

    const orderItems: IIoRestorecommerceOrderItem[] = this.cartService
      .getCartItems()
      .map((item) => ({
        // embedd product in this cartItem.
        productId: item.variant.parentVariantId,
        variantId: item.variant.id, // productVariant
        quantity: item.quantity,
        unitPrice: { // The price of one unit of item
          regularPrice: item.variant.price.regularPrice,
          sale: item.variant.price.sale,
          salePrice: item.variant.price.salePrice,
          currencyId: item.variant.price.currencyId,
        },
        amount: {
          currencyId: item.variant.price.currencyId,
          gross: 26, // ((vat in included per item.) + (shipping per item)) + (tarrifs) * the quantity
          net: 25, // item * quantity
          vats: [
            {
              taxId: item.taxType,
              vat: 4.0,
            },
          ],
        },
      }));

    // TODO
    // 1. Get cart items.
    // 2. Map these cart items to create "order.items[0].items". Where "order" is IIoRestorecommerceOrderOrderList
    // 3. Map or Extract from the cart or it items to get the "order.items[0].totalAmounts".

    // 4. UserId: This is the id of the buyer. It could be anonymous. Or the id of the login user. Extracted using the user service.
    // 5. customerId: Let it be the same as the userId.
    // 6. shopId: Id of the current shop. Possibly the merchant's shopId (A merchant could have many shop).

    // 7. shippingAddress. billingAddress --- Use the address service to these entities for a logged-in user.

    // notificationEmail?? This should be the email that would be used to notify the buyer.
    // customerOrderNr -- The number of the order.
    // customerRmk about the good. Maybe after a product has been fulfilled.


    // TODO Implement auth with the User Id and Address

    const orderInput: IIoRestorecommerceOrderOrderList = {
      items: [
        {
          userId: '0adb3e62d1fb038f3d609464', // The user making the purchase.
          customerId: '2284ce34c44d13fe83bf793f', // Possibly the merchant.
          shopId: '4ce6dc25cb7a124ebd456192', // Possibly the merchant's shopId (could have many).
          items: orderItems,
          orderState: IoRestorecommerceOrderOrderState.Created, ///'CREATED',
          fulfillmentState: IoRestorecommerceFulfillmentState.Created, //'CREATED',
          paymentState: IoRestorecommerceInvoicePaymentState.Unpayed, //'UNPAYED',
          totalAmounts: [
            {
              currencyId: 'EUR',
              gross: Number(
                this.cartService.round(this.cartService.cart.getTotalGross())
              ),
              net: Number(
                this.cartService.round(this.cartService.cart.getTotalNet())
              ),
              vats: [
                {
                  taxId: 'bcd96fcc818a4f44922a57b67dad65bb',
                  vat: 4.0,
                },
              ],
            },
          ],
          shippingAddress: {
            address: {
              id: 'r-ug_address_1',
              postcode: '70174',
              countryId: 'germany',
              locality: 'Stuttgart',
              street: 'Ossietzkystraße',
              region: 'Stuttgart',
              altitude: 0,
              buildingNumber: '44',
              geoCoordinates: {
                latitude: 9.2,
                longitude: 48.8,
              },
              addressAddition: {
                field1: '',
                field2: '',
              },
              businessAddress: {
                name: '',
              },
            },
            contact: {
              name: 'r-ug',
              email: 'r-ug@example.com',
              phone: '+1234567890',
            },
            comments: '',
          },
          billingAddress: {
            address: {
              id: 'r-ug_address_1',
              postcode: '70174',
              countryId: 'germany',
              locality: 'Stuttgart',
              street: 'Ossietzkystraße',
              region: 'Stuttgart',
              geoCoordinates: {
                latitude: 9.2,
                longitude: 48.8,
              },
              altitude: 0,
              buildingNumber: '44',
              addressAddition: {
                field1: '',
                field2: '',
              },
              businessAddress: {
                name: '',
              },
              packStation: {
                provider: '',
                stationNumber: '',
                postNumber: '',
              },
            },
            contact: {
              name: 'r-ug',
              email: 'r-ug@example.com',
              phone: '+1234567890',
            },
            comments: '',
          },
          notificationEmail: '', // The buyer or the seller email?
          customerOrderNr: '', // The buyer or the seller?
          customerRemark: '', // The seller's remark on the product.
        },
      ],
      totalCount: 1,
      mode: ModeType.Create, ///'CREATE',
    };
  }
}
