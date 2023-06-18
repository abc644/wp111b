export function vlength(a, b) {
    if (a.length != b.length) {
        throw new Error('向量維度不同');
    }
}

export function mlength(a, b) {
    if (a.length != b.length && a[0].length != b[0].length) {
        throw new Error('矩陣維度不同');
    }
}

export var v1 = [1, 2, 3];
export var v2 = [4, 5, 6];
export var v3 = [7, 8];
export var v4 = [9, 10];
export var v5 = [1, 1, 1, 1, 1, 1, 1];
export var v6 = [2, 2, 2, 2, 2, 2, 2];

export var m1 = [[1, 2],
                 [3, 4]];
export var m2 = [[5, 6],
                 [7, 8]];