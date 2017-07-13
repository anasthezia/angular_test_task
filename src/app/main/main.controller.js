export class MainController {
  constructor ($timeout, webDevTec, ProductsService, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1499696639222;
    this.toastr = toastr;
    this.products = [];


    this.activate($timeout, webDevTec, ProductsService);
  }

  activate($timeout, webDevTec, ProductsService) {
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
  getMaxPageCount() {
    this.maxPageCount = Math.ceil(this.products.length/ this.itemsPerPage);
    return this.maxPageCount;
  }
  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
