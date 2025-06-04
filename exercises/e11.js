// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  const accWithdrawls = [];
  for (let account of array) {
    if (!account.withdrawals) {
      accWithdrawls.push(0);
    } else {
      let accountTotal = account.withdrawals.reduce((acc, val) => acc + val, 0);
      accWithdrawls.push(accountTotal);
    }
  }
  return accWithdrawls;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
