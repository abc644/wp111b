當談到跨平台開發，Node.js是一個強大的選擇。Node.js是一個基於Chrome V8 JavaScript引擎的運行時環境，它允許你在服務器端使用JavaScript編寫應用程序。以下是一個Node.js的教學和示例程式碼：

## 安裝 Node.js
在開始之前，你需要確保已經安裝了Node.js。你可以從Node.js的官方網站（https://nodejs.org）下載和安裝適合你操作系統的版本。

## 創建一個簡單的Node.js應用程序
打開你喜歡的代碼編輯器，創建一個新的文件，命名為app.js，並添加以下程式碼：
```
// 引入內置的http模塊
const http = require('http');

// 創建一個服務器
const server = http.createServer((req, res) => {
  // 處理請求
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!');
});

// 監聽端口
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```
## 啟動 Node.js 服務器
打開命令行終端，進入存放app.js文件的目錄，然後運行以下命令：
```
node app.js
```
你應該會看到類似下面的輸出：
```
Server running at http://localhost:3000/
```
這意味著你的Node.js服務器正在運行，並且可以通過瀏覽器訪問http://localhost:3000/來查看結果。

以上只是Node.js的一小部分功能和使用方法。Node.js生態系統擁有豐富的模塊和工具，讓你可以開發各種類型的應用程序。你可以通過閱讀官方文檔和教學來深入了解Node.js的更多特性和最佳實踐。
