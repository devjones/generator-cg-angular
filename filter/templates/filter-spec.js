describe('<%= filtername %>', function() {

	beforeEach(module('<%= modulename %>'));

	it('should ...', inject(function($filter) {

        var filter = $filter('<%= filtername %>');

		expect(filter('input')).toEqual('output');

	}));

});