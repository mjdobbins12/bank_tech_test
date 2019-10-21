describe('Bank', function() {
  beforeEach(function() {
    bank = new Bank();
  })

  it('begins with a balance of 0', function() {
    expect(bank.balance).toEqual(0);
  })

  it('allows deposits to be made', function() {
    bank.deposit(100);
    expect(bank.balance).toEqual(100);
  })

  it('allows money to be withdrawn', function() {
    bank.deposit(100);
    bank.withdraw(50);
    expect(bank.balance).toEqual(50);
  })
})
