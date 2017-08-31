export class QuicksopController{

  // constructor($mdDialog, $stateParams, $scope, poductId, ProductsService) {
  //   'ngInject';
  //   this.$mdDialog = $mdDialog;
  //   this.getProduct(ProductsService, 2);
  //   console.log('............11111')
  //
  // }
  constructor ($mdDialog) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.products = [];
    this.product = [];
    // this.activate( ProductsService, $stateParams);
    this.itemsToCart = 1;

  }
  activate() {
    this.Dialog()
  }
 //
 //
 //
 //  hide() {
 //    this.$mdDialog.hide();
 //  }
 // cancel() {
 //    this.$mdDialog.cancel();
 //  }
 //
 //  answer() {
 //    this.$mdDialog.hide();
 //  }
  open(event, productId) {
    this.product = productId;
  }

}

export default  QuicksopController;
