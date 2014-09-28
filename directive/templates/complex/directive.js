angular.module('<%= modulename %>').directive('<%= directivename %>', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: '<%= htmlPath %>',
		link: function(scope, element, attrs, fn) {


		}
	};
});
