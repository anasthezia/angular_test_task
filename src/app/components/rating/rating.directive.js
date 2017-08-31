export function RatingDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/rating/rating.html',
    scope: {
      rating: '@'
    },
    controller: RatingController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}

class RatingController {
  constructor() {
    'ngInject';
    this.showRating(this.rating);
  }
  showRating(rating) {
    this.maxStars = 5;
    this.fillWidth = Math.round((rating / this.maxStars ) * 100);

  }
}
