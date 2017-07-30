/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ProductsController } from '../app/components/products/products.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { ProductsService } from '../app/components/products/products.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { Rating1Directive } from './components/rating/rating.directive';
import { DialogController } from '../app/components/quickshop/quickshop.controller';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('angularTestTask', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('ProductsService', ProductsService)
  .controller('MainController', MainController)
  .controller('ProductsController', ProductsController)
  .controller('DialogController', DialogController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('rating', Rating1Directive)
  .directive('acmeMalarkey', MalarkeyDirective);
