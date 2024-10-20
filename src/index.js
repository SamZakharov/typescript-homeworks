'use strict';

function BankAccount() {
    let balance = 0;

    this.deposit = function (total) {
        if (total > 0) {
            balance += total;
            console.log(`Deposited: ${total}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    this.withdraw = function (total) {
        if (total > 0 && total <= balance) {
            balance -= total;
            console.log(`Withdraw: ${total}`);
        } else {
            console.log('Insufficient funds or invalid total.');
        }
    }

    this.getBalance = function () {
        return balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(50);
console.log('balance of myAccount is ' + myAccount.getBalance());

const myAccount2 = new BankAccount();
myAccount2.withdraw(50);
console.log('balance of myAccount is ' + myAccount2.getBalance());