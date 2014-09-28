angular.module('<%= modulename %>').filter('<%= filtername %>', function() {
	return function(input,arg) {
		return 'output';
	};
});