function truthTable(n) {
  var max = Math.pow(2, n);
  
  for (let i = 0; i < max; i++) {
    let binary = i.toString(2).padStart(n, '0');;
    let output = binary.split("").join(" | ");
    console.log(output);
  }
}
  
truthTable(3);
truthTable(6);
truthTable(9);

/**
先看chatgpt，再不看原本程式碼寫出來



// 真值表生成函数
function truthTable(n) {
  const combinations = Math.pow(2, n); // 总共有2的n次方个组合

  for (let i = 0; i < combinations; i++) {
    const binary = i.toString(2).padStart(n, '0'); // 将数字转换为二进制字符串，位数不足用0填充

    const values = binary.split('').map(Number); // 将字符串转换为数字数组

    console.log(values);
  }
}
 */