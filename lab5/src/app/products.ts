export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  imageUrl: string;
  kaspiUrl: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13',
    price: 799,
    description: 'Apple iPhone 13 128Gb черный',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 699,
    description: 'Apple iPhone 14 Pro Max 256Gb',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
  },
  {
    id: 3,
    name: 'iPhone 11',
    price: 299,
    description: 'Apple iPhone 11 128Gb Slim Box черный',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item'
  },
  {
    id: 4,
    name: 'iPhone 14',
    price: 299,
    description: 'Apple iPhone 14 128Gb черный',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/hc8/63072540065822/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'iPhone 11',
    price: 299,
    description: 'Apple iPhone 11 64Gb Slim Box черный',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4c/h6b/32690569838622/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'iPhone 13',
    price: 299,
    description: 'Apple iPhone 13 128Gb синий',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4f/h4b/46392661671966/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item'
  },
  {
    id: 7,
    name: 'iPhone 13',
    price: 299,
    description: 'Apple iPhone 13 128Gb белый',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h27/hc9/46392664162334/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
  },
  {
    id: 8,
    name: 'iPhone 14',
    price: 299,
    description: 'Apple iPhone 14 128Gb голубой',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h93/h56/63073057112094/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=7500000004'
  },
  {
    id: 9,
    name: 'iPhone 11',
    price: 299,
    description: 'Apple iPhone 11 128Gb Slim Box белый',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/hf8/33208262066206/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000'
  },
  {
    id: 10,
    name: 'iPhone 13',
    price: 299,
    description: 'Apple iPhone 13 128Gb розовый',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h61/hc2/46392660557854/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000'
  },
  {
    id: 11,
    name: 'MacBook Air',
    price: 799,
    description: 'Apple MacBook Air 13 MGN63 серый',
    imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },
  {
    id: 12,
    name: 'MacBook Air',
    price: 799,
    description: 'Apple MacBook Air 13 MLY33 черный',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=preview-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item'
  },
  {
    id: 13,
    name: 'MacBook Pro',
    price: 799,
    description: 'Apple MacBook Pro 14 MKGP3 серый',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/64200744763422.jpg?format=preview-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000'
  },
  {
    id: 14,
    name: 'MacBook Air',
    price: 799,
    description: 'Apple MacBook Air 13 MLXY3',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000'
  },
  {
    id: 15,
    name: 'MacBook Air',
    price: 799,
    description: 'Apple MacBook Air 13 MLY13 золотистый',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h1a/64439230365726.jpg?format=preview-medium',
    kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly13-zolotistyi-105933751/?c=750000000'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/