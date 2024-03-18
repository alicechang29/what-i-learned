## How to Convert Binary to Decimal


1. Multiply each digit, starting with the right-most digit by 2 to the power of n (2^n), starting with 2^0.

2. Increase the power by 1 for each additional digit.

![alt text](binaryToDecimal.png)

3. Sum up the Values

```markdown
(1 * 2^0) + (0 * 2^1) + (0 * 2^2) + (1 * 2^3)
```

```js
function binaryToDecimal(binaryNum){
    //binaryNum = 1001

    let multiplier = [];

    //get all the multipliers. Looping backwards because need to match up the binary value to the correct multiplier.

    for(let i = binaryNum.length-1; i>=0; i--){
        multiplier.push(2**i);
    }

    let sum = 0;

    for(let j = binaryNum.length-1; j>=0; j--){
        sum += binaryNum[j]* multiplier[j];
    }

    return sum;
}

