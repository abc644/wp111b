瀏覽器對象模型（Browser Object Model，簡稱BOM）是一組由瀏覽器提供的對象，它們允許JavaScript代碼與瀏覽器進行交互。BOM提供了許多對象和方法，用於訪問和操作瀏覽器窗口、文檔、歷史記錄、瀏覽器功能等。以下是一個簡單的教學，介紹了如何使用BOM進行常見的操作，並附上相應的程式碼示例。

## 瀏覽器窗口
### 獲取和設置窗口大小
```
// 獲取窗口的寬度和高度
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// 設置窗口的寬度和高度
window.resizeTo(800, 600);
```
## 獲取和設置窗口位置
```
// 獲取窗口的左側和上側位置
const windowLeft = window.screenX || window.screenLeft;
const windowTop = window.screenY || window.screenTop;

// 設置窗口的位置
window.moveTo(100, 100);
```
## 打開和關閉新窗口
```
// 打開一個新窗口
const newWindow = window.open('https://www.example.com', '_blank');

// 關閉窗口
newWindow.close();
```
## 文檔操作
### 獲取和修改文檔標題
```
// 獲取文檔標題
const documentTitle = document.title;

// 修改文檔標題
document.title = 'New Title';
```
### 獲取和修改文檔URL
```
// 獲取文檔URL
const documentURL = document.URL;

// 修改文檔URL
history.pushState(null, '', '/new-url');
```
### 重定向到新的URL
```
// 重定向到新的URL
location.href = 'https://www.example.com';
```
## 瀏覽器歷史記錄
### 獲取和操作歷史記錄
```
// 獲取歷史記錄長度
const historyLength = history.length;

// 在歷史記錄中前進一步
history.forward();

// 在歷史記錄中後退一步
history.back();
```
## 瀏覽器功能
### 設置計時器
```
// 設置計時器，每隔1秒執行一次
const timerId = setInterval(() => {
  console.log('Timer executed!');
}, 1000);

// 清除計時器
clearInterval(timerId);
```
### 對話框和提示框
```
// 彈出對話框
alert('This is an alert!');

// 彈出提示框
const result = prompt('Please enter your name:', 'John Doe');
```
以上只是瀏覽器對象模型的一些基礎操作示例，BOM提供了更多的功能和對象供使用。通過使用這些對象和方法，你可以進一步擴展和定制你的JavaScript網頁應用程序。希望這個簡單的教學能幫助你入門BOM的使用。
