

export class ProductsController {

  constructor () {
    'ngInject';
    this.products = [];
  }

  getProducts(ProductsService) {
    this.products = ProductsService.getProducts();
  }

  activate() {
  }
}


// export default  ProductsController;
