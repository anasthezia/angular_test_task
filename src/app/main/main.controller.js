import DialogController from '../components/quickshop/quickshop.controller.js';

export class MainController {
  constructor($timeout, webDevTec, ProductsService, toastr, $scope, $mdDialog, $document) {
    'ngInject';

    this.awesomeThings = [];
    this.$document = $document;
    this.classAnimation = '';
    this.creationDate = 1499696639222;
    this.toastr = toastr;
    this.$mdDialog = $mdDialog;
    this.products = [];
    this.product = [];


    this.activate($timeout, webDevTec, ProductsService, $scope, $mdDialog);
  }

  activate($timeout, webDevTec, ProductsService) {
    console.log(this);
    this.getProducts(ProductsService);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
    this.itemsPerPage = 8;
    this.currentPage = 1;
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  getProducts(ProductsService) {
    this.products = ProductsService.getProducts();
  }
  //
  // getProduct(ProductsService, id) {
  //   this.product = ProductsService.getProduct(id);
  // }
  getMaxPageCount() {
    this.maxPageCount = Math.ceil(this.products.length/ this.itemsPerPage);
    return this.maxPageCount;
  }
  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  showDialog(event, productId) {
    this.product= productId;
    this.$mdDialog.show({
      controller: DialogController,
      templateUrl: '../app/components/quickshop/quickshop.html',
      parent: angular.element( this.$document[0].body),
      targetEvent: event,
      clickOutsideToClose:true,
      product: this.product
    })

    //   .then(function(answer) {
    //   this.status = 'You said the information was "' + answer + '".';
    // }, function() {
    //   this.status = 'You cancelled the dialog.';
    // });
  }

}

