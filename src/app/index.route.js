export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
  .state('product', {
      url: '/product/:id',
      templateUrl: 'app/components/products/product.html',
    controllerAs: 'ProductsController'
    });

  $urlRouterProvider.otherwise('/');
}
