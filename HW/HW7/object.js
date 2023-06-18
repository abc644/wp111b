class Matrix {
  constructor() {
    this.a = [[1, 2], [3, 4]];
    this.b = [[5, 6], [7, 8]];
  }

  static add(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
      throw new Error('矩陣維度不同');
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

  static multiply(a, b) {
    if (a[0].length !== b.length) {
      throw new Error('矩陣維度不同');
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
}

const matrix = new Matrix();
console.log(Matrix.add(matrix.a, matrix.b));
console.log(Matrix.multiply(matrix.a, matrix.b));



/*

class Matrix {
  constructor(data) {
    this.data = data;
    this.rows = data.length;
    this.cols = data[0].length;
  }

  static add(a, b) {
    if (a.rows !== b.rows || a.cols !== b.cols) {
      throw new Error('Matrix dimensions do not match.');
    }

    const rows = a.rows;
    const cols = a.cols;
    const result = [];

    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        result[i].push(a.data[i][j] + b.data[i][j]);
      }
    }

    return new Matrix(result);
  }

  static multiply(a, b) {
    if (a.cols !== b.rows) {
      throw new Error('Matrix dimensions do not match.');
    }

    const rows = a.rows;
    const cols = b.cols;
    const result = [];

    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j];
        }
        result[i].push(sum);
      }
    }

    return new Matrix(result);
  }
}

*/