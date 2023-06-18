function isPrime(n) {
    if (n <= 1) {
      return false;
    }

    for (let i=2; i < n/2; i++) {
      if (n%i == 0) {
        return false;
      }
    }
  
    return true;
}

console.log(isPrime(7));
console.log(isPrime(56));
console.log(isPrime(107));




/**
先看chatgpt，再不看原本程式碼寫出來


// 质数判断函数
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  // 检查从2到n-1是否有任何一个数可以整除n
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
 */