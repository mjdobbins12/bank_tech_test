describe('Bank', function() {
  beforeEach(function() {
    bank = new Bank();
  });

  it('begins with a balance of 0', function() {
    expect(bank.balance).toEqual(0);
  });
});
