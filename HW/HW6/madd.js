import {mlength, m1, m2} from "./export.js";

function madd(a, b) {
    mlength(a, b);

    let row = a.length;
    let col = a[0].length;
    let result = [];

    for (let i = 0; i < row; i++) {
        result.push([]);
        
        for (let j = 0; j < col; j++) {
          result[i].push(a[i][j] + b[i][j]);
        }
    }
    
      return result;
}

console.log(madd(m1, m2));
/*
先看chatgpt，再不看原本程式碼寫出來


// 矩阵相加
function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
      throw new Error('Matrix dimensions do not match.');
    }
  
    const rows = a.length;
    const cols = a[0].length;
    const result = [];
  
    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        result[i].push(a[i][j] + b[i][j]);
      }
    }
  
    return result;
  }
*/