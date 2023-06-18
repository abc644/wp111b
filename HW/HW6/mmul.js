import {mlength, m1, m2} from "./export.js";

function mmul(a, b) {
    mlength(a, b);
  
    let row = a.length;
    let col = a[0].length;
    let result = [];
  
    for (let i = 0; i < row; i++) {
      result.push([]);
      for (let j = 0; j < col; j++) {
        let sum = 0;

        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i].push(sum);
      }
    }
  
    return result;
}

console.log(mmul(m1, m2));

/*
參考chatgpt

// 矩阵相乘
function mmul(a, b) {
    if (a[0].length !== b.length) {
      throw new Error('Matrix dimensions do not match.');
    }
  
    const rows = a.length;
    const cols = b[0].length;
    const result = [];
  
    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i].push(sum);
      }
    }
  
    return result;
  }
*/