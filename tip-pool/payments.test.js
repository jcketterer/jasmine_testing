describe('Payments test (with setting up and tearing down)', function () {
	beforeEach(function () {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
	});
	
	it('should add a new payment to the allPayments on submit payment info', function () {
		submitPaymentInfo();
		
		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments['payment1'].billAmt).toEqual('100');
		expect(allPayments['payment1'].tipAmt).toEqual('20');
		expect(allPayments['payment1'].tipPercent).toEqual(20);
	});
	
	it('should not add a payment to payment info with none/empty inputs', function () {
		billAmtInput.value = '';
		submitPaymentInfo();
		
		expect(Object.keys(allPayments).length).toEqual(0);
	});
	
	it('should update the payment table on the append payment table func', function () {
		let curPayment = createCurPayment();
		allPayments['payment1'] = curPayment;
		
		appendPaymentTable(curPayment);
		
		let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
		
		expect(curTdList.lenght).toEqual();
		expect(curTdList[0].innerText).toEqual('$100');
		expect(curTdList[1].innerText).toEqual('$20');
		expect(curTdList[2].innerText).toEqual('20%');
		expect(curTdList[3].innerText).toEqual('X');	
	});
	
	it('should create a new payment on the create cur payement function', function () {
		let expectedPayment = {
			billAmt: '100',
			tipAmt: '20',
			tipPercent: 20
		};
		
		expect(createCurPayment()).toEqual(expectedPayment);
	});
	
	it('should not create payment with none/empty inputs on the createCurPayment()', function () {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		let curPayment = createCurPayment();
		
		expect(curPayment).toEqual(undefined);
	})
	
	
	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
		paymentId = 0;
		allPayments = {};
	});	
})