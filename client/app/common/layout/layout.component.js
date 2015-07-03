import template from './layout.html';
import controller from './layout.controller';
import './layout.styl';

let layoutComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default layoutComponent;