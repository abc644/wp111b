import {vlength, v1, v2, v3, v4, v5, v6} from "./export.js";

function vadd(a, b) {
    length(a, b);

    var result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] + b[i]);
    }
    return result;
}

console.log(vadd(v1, v2));
console.log(vadd(v3, v4));
console.log(vadd(v5, v6));



/*
先看chatgpt，再不看原本程式碼寫出來


// 向量相加
function vadd(a, b) {
    if (a.length !== b.length) {
      throw new Error('Vector dimensions do not match.');
    }
  
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result.push(a[i] + b[i]);
    }
  
    return result;
  }
  */