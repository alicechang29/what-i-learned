/*
buy stock on 1 day, sell stock on future day
return the max profit possible


Input: prices = [7,1,5,3,6,4]
Output: 5

buy: 7
sell: 3
maxProfit: 0
profit: -4

want to check for highest profit
*/

/*
Sliding Window

2 pointers
- if L > R, update L to be R and R = L+1
- if L < R, calculate profit
do this while R is less than prices.length
*/

function maxProfit(prices: number[]): number {
  // 7,1,5,3,6,4
  let left = 0; //1
  let right = left + 1; //4
  let maxProfit = 0; //5

  while (right < prices.length) { //4 < 6
    const buyPrice = prices[left]; //1
    const sellPrice = prices[right]; //6

    if (buyPrice > sellPrice) {
      left++;
      right = left + 1;
    } else {
      maxProfit = Math.max(sellPrice - buyPrice, maxProfit);
      right++;
    }
  }

  return maxProfit;
}


/*
BRUTE FORCE - iterating over elements already seen O(n^2)
declare a maxProfit variable
declare buyIndex
declare sellIndex

loop through with 2 pointers (while buyIndex < prices.length)
- declare buyPrice = prices[buyIndex]
- declare sellPrice = prices[sellIndex]
- calculate profit: sellPrice - buyPrice
- increment sellIndex

if sellIndex is >= prices.length:
- increment buyIndex
- set sellIndex = buyIndex + 1


buy Index must always be less than sell Index

if values are in descending order, no way there would be a profit


function maxProfit(prices: number[]): number {
  //[7,1,5,3,6,4]
  let maxProfit = 0;
  let buyIndex = 0;
  let sellIndex = buyIndex + 1;

  while (buyIndex < prices.length) { // 0 < 6
    if (sellIndex < prices.length) { // t
      const buyPrice = prices[buyIndex]; // 7
      const sellPrice = prices[sellIndex]; // 1

      maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
      sellIndex++;

    } else {
      buyIndex++;
      sellIndex = buyIndex + 1;
    }
  }

  return maxProfit;
};

*/

