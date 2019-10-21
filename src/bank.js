class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(amount, date = moment().format('L')) {
    this.balance += (amount * 100);
    this.transactions.unshift([date, amount]);
  }

  withdraw(amount, date = moment().format('L')) {
    this.balance -= (amount * 100);
    this.transactions.unshift([date, amount]);
  }
}
