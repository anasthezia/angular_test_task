export function Rating1Directive() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/rating/rating.html',
    scope: {
        rating:  '@'
    },
    controller: Navbar1Controller,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}

class Navbar1Controller{
  constructor () {
    'ngInject';
    this.showRating(this.rating);
  }
  showRating(rating) {
    this.maxStars=5;
    this.fillWidth = Math.round((rating / this.maxStars )  * 100);

  }
}
