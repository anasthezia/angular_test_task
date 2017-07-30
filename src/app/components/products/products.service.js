export class ProductsService {
  constructor () {
    'ngInject';

    this.products = [
      {
        'id': 0,
        'title': 'Лампа ОНЛАЙТ E27 10Вт 4000K',
        'description': 'Лампа светодиодная',
        'picture': '//avatars.mds.yandex.net/get-marketpic/169660/market_VK2G8EV5IK_bulUkAU1Hug/120x160',
        'price': 152,
        'rating': 3.2
      },
      {
        'id': 1,
        'title': 'D-link DGS-1210-28',
        'description': 'коммутатор (switch)',
        'picture': '//avatars.mds.yandex.net/get-mpic/195452/img_id6087776695354108527/5',
        'price': 9188,
        'rating': 3.8
      },
      {
        'id': 2,
        'title': 'MTD Smart 53 SPO',
        'description': 'Самоходная газонокосилка',
        'picture': '//avatars.mds.yandex.net/get-mpic/195452/img_id8595472476168599490/5',
        'price': 27200,
        'rating': 4.2
      },
      {
        'id': 3,
        'title': 'Xiaomi Mi Wi-Fi Router 3',
        'description': 'Wi-Fi-роутер',
        'picture': '//avatars.mds.yandex.net/get-mpic/199079/img_id699745159435984554/5',
        'price': 1600,
        'rating': 2.2
      },
      {
        'id': 4,
        'title': 'Samsung Galaxy S8',
        'description': 'Смартфон, Android 7.0',
        'picture': '//avatars.mds.yandex.net/get-mpic/195452/img_id4783826773129378920/5',
        'price': 38890,
        'rating': 4.9
      },
      {
        'id': 5,
        'title': 'Panasonic KX-HDV100RU 3.5',
        'description': 'VoIP-телефон',
        'picture': '//avatars.mds.yandex.net/get-mpic/96484/img_id1500888515385506182/5',
        'price': 2790,
        'rating': 3.8
      },
      {
        'id': 6,
        'title': 'Recaro Zero.1',
        'description': 'автокресло',
        'picture': '//avatars.mds.yandex.net/get-mpic/175985/img_id1078274649473751600/5',
        'price': 29950,
        'rating': 4.5
      },
      {
        'id': 7,
        'title': 'Philips OneBlade QP2510',
        'description': 'Машинка для стрижки бороды и усов',
        'picture': '//avatars.mds.yandex.net/get-mpic/364668/img_id5693948433872322179/5',
        'price': 1490,
        'rating': 4.2
      },
      {
        'id': 8,
        'title': 'DJI Spark',
        'description': 'Квардокоптер',
        'picture': '//avatars.mds.yandex.net/get-mpic/195452/img_id7156686986298027142/5',
        'price': 35500,
        'rating': 5.0
      },
      {
        'id': 9,
        'title': 'Apple Watch Series 1 38mm with Sport Band',
        'description': 'Умные часы',
        'picture': '//avatars.mds.yandex.net/get-mpic/96484/img_id7212375641741893417/5',
        'price': 15690,
        'rating': 2.2
      },
      {
        'id': 10,
        'title': 'Christian Dior Eau Fraiche',
        'description': 'Туалетная вода',
        'picture': '//avatars.mds.yandex.net/get-mpic/199079/img_id1610310548018501549/5',
        'price': 5900,
        'rating': 2.6
      },
      {
        'id': 11,
        'title': 'Epson Expression Home XP-330',
        'description': 'МФУ (принтер, сканер, копир)',
        'picture': '//avatars.mds.yandex.net/get-mpic/331398/img_id8197213827012528890/5',
        'price': 3395,
        'rating': 4.2
      }
    ];
  }

  getProducts() {
    return this.products;
  }
  getProduct(id){
    this.product = this.products[id];
    return this.product;
  }
}
