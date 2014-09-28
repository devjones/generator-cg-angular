angular.module('<%= appname %>').filter('<%= filtername %>', function() {
	return function(input,arg) {
		return 'output';
	};
});