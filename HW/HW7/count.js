function count(list) {
    var cmap = {};
    
    for (const word of list) {
        if (cmap.hasOwnProperty(word)) {
            cmap[word]++;
        }
        else {
            cmap[word] = 1;
        }
    }

    return cmap;
}

var list = ['a', 'dog', 'chase', 'a', 'cat'];
console.log(count(list));
/*


// 统计词汇数组中每个词出现的次数
function count(list) {
    const cmap = {};
  
    for (const word of list) {
      cmap[word] = (cmap[word] || 0) + 1;
    }
  
    return cmap;
  }
  
  const list = ['a', 'dog', 'chase', 'a', 'cat'];
  const cmap = count(list);
  console.log(cmap); // 输出：{ a: 2, dog: 1, chase: 1, cat: 1 }
  */