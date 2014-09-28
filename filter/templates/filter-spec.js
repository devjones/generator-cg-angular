describe('<%= filtername %>', function() {

	beforeEach(module('<%= appname %>'));

	it('should ...', inject(function($filter) {

        var filter = $filter('<%= filtername %>');

		expect(filter('input')).toEqual('output');

	}));

});