import {vlength, v1, v2, v3, v4, v5, v6} from "./export.js";

function vdot(a, b) {
    length(a, b);
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result = a[i] * b[i];
    }

    return result;
}

console.log(vdot(v1, v2));
console.log(vdot(v3, v4));
console.log(vdot(v5, v6));

/*
先看chatgpt，再不看原本程式碼寫出來

// 向量内积
function vdot(a, b) {
    if (a.length !== b.length) {
      throw new Error('Vector dimensions do not match.');
    }
  
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }
  
    return result;
  }
*/