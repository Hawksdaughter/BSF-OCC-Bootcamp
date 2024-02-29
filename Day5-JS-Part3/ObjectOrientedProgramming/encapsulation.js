
class bankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    };
    depositMethod(amountDeposited) {
        this.balance += amountDeposited;
    };
    withdrawalMethod(amountWithdrawn) {
        if (this.balance >= amountWithdrawn) { this.balance -= amountWithdrawn; }
        else { console.log('Insufficient funds!'); }
    };
    getAccountInfo() {
        return `For account # ${this.accountNumber} the current balance is $ ${this.balance}`;
    };
};

// Above is a blueprint for an object.  It isn't the object itself.
// Below creates an object using that blueprint:
const myAccount = new bankAccount("123456789", 1000);
const anotherAccount = new bankAccount("987654321", 6000);

myAccount.depositMethod(500);
console.log(myAccount.getAccountInfo());
anotherAccount.withdrawalMethod(6501);
console.log(anotherAccount.getAccountInfo());
anotherAccount.withdrawalMethod(10);
console.log(anotherAccount.getAccountInfo());
