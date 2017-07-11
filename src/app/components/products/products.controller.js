

export class ProductsController {

  constructor (ProductsService) {
    'ngInject';
    this.products = [];
  }

  getProducts(ProductsService) {
    this.products = ProductsService.getProducts();
  }

  activate(ProductsService) {
    console.log('iniit')
  }
}


// export default  ProductsController;
