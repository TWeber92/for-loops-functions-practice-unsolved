// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const wrongBalAcct = [];
  let depositTotal = 0;
  let withdrawalTotal = 0;
  for (let account of array) {
    if (account.deposits) {
      for (let deposit of account.deposits) {
        depositTotal += deposit;
      }
    }
    if (account.withdrawals) {
      for (let withdraw of account.withdrawals) {
        withdrawalTotal += withdraw;
      }
    }
    if (depositTotal - withdrawalTotal !== account.balance) {
      wrongBalAcct.push(account);
    }
    depositTotal = 0;
    withdrawalTotal = 0;
  }
  return wrongBalAcct;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
