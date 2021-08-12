it('should calculate the monthly rate correctly', function () {
	const values = {
		amount: 100000,
		years: 6,
		rate: 10
	};
	expect(calculateMonthlyPayment(values)).toEqual('1852.58');
});


it("should return a result with 2 decimal places", function() {
	const values = {
		amount: 100000,
		years: 6,
		rate: 10
	};
	expect(calculateMonthlyPayment(values)).toBeCloseTo('1852.58',2);
});

it('should calculate extreme interest rates', function () {
	const values = {
		amount: 15000,
		years: 5,
		rate: 99
	};
	expect(calculateMonthlyPayment(values)).toEqual('1248.23');
});