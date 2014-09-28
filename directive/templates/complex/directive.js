angular.module('<%= appname %>').directive('<%= directivename %>', function() {
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
