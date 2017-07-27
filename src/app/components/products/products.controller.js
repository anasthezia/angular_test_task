

export class ProductsController {

  constructor (ProductsService,  $stateParams) {
    'ngInject';
    this.products = [];
    this.product = [];
    this.activate( ProductsService, $stateParams);
    this.itemsToCart = 1;
  }

  getAllProducts(ProductsService) {
    this.products = ProductsService.getProducts();
  }
  getProduct(ProductsService, $stateParams) {
  this.product = ProductsService.getProduct( $stateParams.id)
  //   .then((result)=>{
  //   this.product = result.data;
  //   console.log(this.product);
  //   return result.data
  // })
}

  activate(ProductsService, $stateParams) {
    console.log(this, $stateParams);
   this.getProduct(ProductsService, $stateParams);
  }
}


export default  ProductsController;
