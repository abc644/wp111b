function monthToIndex(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    for (let i= 0; i < months.length; i++) {
        if (month == months[i]) {
            return i+1;
        }
    }
    throw new Error('沒有這個月份');
}

console.log(monthToIndex('October'));

/*
先看chatgpt，再不看原本程式碼寫出來

// 英文月份转换为数字
function monthToIndex(month) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const index = months.indexOf(month);
  if (index === -1) {
    throw new Error('Invalid month.');
  }

  return index + 1;
}
*/