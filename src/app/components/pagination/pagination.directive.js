export function PaginationDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/pagination/pagination.html',
    scope: {
      // pagescount: '@',
      itemscount: '='
      // currentpage: '=currentPage'
    },
    controller: PaginationController,
    controllerAs: 'pager',
    bindToController: true
  };
  return directive;
}
class PaginationController {
  constructor() {
    'ngInject';
    this.setPagination(this.itemscount);
    // this.gotoPage(this.page);
  }

  setPagination(itemscount) {
    let itemsPerPage = 4;
    this.itemscount = itemscount;
    this.currentPage = 1;
    this.maxPageCount = Math.ceil(this.itemscount / itemsPerPage);
    // let maxPageCount = this.itemscount + this.itemsPerPage;
    this.pages = [];
    for (let i = 1; i <= this.maxPageCount; i++) {
      this.pages.push(i);
    }
  }

  gotoPage(page, itemscount) {
    this.currentPage = page;
    this.itemscount = itemscount;
    // console.log('go to pages', page);
    return this.currentPage;
  }
}

