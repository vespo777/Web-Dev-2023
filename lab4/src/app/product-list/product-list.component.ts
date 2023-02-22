import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;


  share(src: string | URL | undefined) {
    window.open("https://wa.me/87771804748?text=Меня%20интересует%20ваше%20объявление%20о%20продаже " + src)
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/