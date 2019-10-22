class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(amount, date = moment().format('L')) {
    this.balance += (amount * 100);
    this.transactions.unshift([date, amount.toFixed(2), "", (this.balance/100).toFixed(2)]);
  }

  withdraw(amount, date = moment().format('L')) {
    this.balance -= (amount * 100);
    this.transactions.unshift([date, "", amount.toFixed(2), (this.balance/100).toFixed(2)]);
  }

  statement() {
    let header = "date \|\| credit \|\| debit \|\| balance"
    let records = ""

    this.transactions.forEach(function(element) {
      records += `\n${element[0]} \|\| ${element[1]} \|\| ${element[2]} \|\| ${element[3]}`
    });

    return (header + records);
  }
}
