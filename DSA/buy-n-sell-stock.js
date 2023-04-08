/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
 */

const maxProfit = (prices) => {
  let minStockValue = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - minStockValue);

    if (minStockValue > prices[i]) {
      minStockValue = prices[i];
    }
  }
  return profit;
  const profitEachDay = [];
  for (let i = 0; i < prices.length - 1; i++) {
    const bought = prices[i];
    let maxProfitIfBoughtToday = 0;
    for (let j = i + 1; j < prices.length; j++) {
      const sold = prices[j];
      const profit = sold - bought;
      maxProfitIfBoughtToday = Math.max(maxProfitIfBoughtToday, profit);
    }
    profitEachDay.push(maxProfitIfBoughtToday);
  }
  return Math.max(...[profitEachDay, 0]);
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
