describe('Bank', function() {
  beforeEach(function() {
    bank = new Bank();
  })

  it('begins with a balance of 0', function() {
    expect(bank.balance).toEqual(0);
  })

  it('allows deposits to be made', function() {
    bank.deposit(100);
    expect(bank.balance).toEqual(10000);
  })

  it('allows money to be withdrawn', function() {
    bank.deposit(100);
    bank.withdraw(50);
    expect(bank.balance).toEqual(5000);
  })

  it('displays a record of transactions', function() {
    let exampleStatement = "date \|\| credit \|\| debit \|\| balance\n21\/10\/2019 \|\| \|\| 75.00 \|\| 25.00\n20\/10\/2019 \|\| 100.00 \|\|  \|\| 100.00"

    bank.deposit(100, '20/10/2019');
    bank.withdraw(75, '21/10/2019');
    expect(bank.statement).toEqual(exampleStatement)
  })
})
