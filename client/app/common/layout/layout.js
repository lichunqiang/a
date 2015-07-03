import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layoutComponent from './layout.component'; 

let layoutModule = angular.module('layout', [
	uiRouter
])
.directive('layout', layoutComponent);

export default layoutModule;