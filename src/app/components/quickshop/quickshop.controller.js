export class DialogController{

  constructor($mdDialog, ProductsService) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.product = ProductsService.getProduct();

  }
  activate() {
    // this.Dialog();
    console.log('............')
  }



  hide() {
    this.$mdDialog.hide();
  }
 cancel() {
    this.$mdDialog.cancel();
  }

  answer() {
    this.$mdDialog.hide();
  }


}
