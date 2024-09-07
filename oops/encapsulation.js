class BankAccount {
    #accountNumber;  // Private field (cannot be accessed directly outside the class)
    #balance;        // Private field
  
    constructor(accountNumber, initialBalance) {
      this.#accountNumber = accountNumber;
      this.#balance = initialBalance;
    }
  
    // Public method to access the account number
    getAccountNumber() {
      return this.#accountNumber;
    }
  
    // Public method to check the balance
    checkBalance() {
      return `Your current balance is: $${this.#balance}`;
    }
  
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Successfully deposited $${amount}.`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Successfully withdrew $${amount}.`);
      } else {
        console.log("Insufficient balance or invalid amount.");
      }
    }
  }
  
  // Creating a new bank account
  const myAccount = new BankAccount("12345678", 1000);
  
  // Accessing and modifying the account using public methods
  console.log(myAccount.getAccountNumber());  // Output: 12345678
  console.log(myAccount.checkBalance());      // Output: Your current balance is: $1000
  
  myAccount.deposit(500);                     // Output: Successfully deposited $500.
  console.log(myAccount.checkBalance());      // Output: Your current balance is: $1500
  
  myAccount.withdraw(200);                    // Output: Successfully withdrew $200.
  console.log(myAccount.checkBalance());      // Output: Your current balance is: $1300
  
  // Trying to access private fields directly (will throw an error)
  // console.log(myAccount.#balance);          // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
  