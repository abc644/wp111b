## React
React是一個用於構建用戶界面的JavaScript庫。它使用組件化的開發模型，讓你可以將應用程序拆分為多個可重用的組件。以下是React的教學和示例程式碼：

## 安裝 React
在使用React之前，你需要確保已經安裝了Node.js和npm。接下來，可以使用以下命令在你的項目中安裝React：
```
npx create-react-app my-app
cd my-app
npm start
```
## 創建一個簡單的React組件
在React中，你可以創建自己的組件並在應用程序中使用它們。以下是一個簡單的React組件的例子：
```
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>This is my first React component.</p>
      </div>
    );
  }
}

export default MyComponent;
```
### 渲染 React 組件
在你的應用程序中，你需要將React組件渲染到DOM中。以下是一個將React組件渲染到HTML頁面上的例子：
```
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

ReactDOM.render(<MyComponent />, document.getElementById('root'));
```
這將會把<MyComponent>組件渲染到具有id="root"的DOM元素中。

以上只是React的一小部分功能和使用方法。你可以通過閱讀官方文檔和教學來深入了解React的更多特性和最佳實踐。

##Angular
Angular是一個由Google開發的JavaScript框架，用於構建Web應用程序。它提供了一個完整的開發平台，包括模塊化、測試、資料綁定、依賴注入等功能。以下是Angular的教學和示例程式碼：

##安裝 Angular CLI
在使用Angular之前，你需要確保已經安裝了Node.js和npm。接下來，可以使用以下命令全局安裝Angular CLI：
```
npm install -g @angular/cli
```
### 創建一個新的Angular應用程序
使用Angular CLI可以輕鬆創建一個新的Angular應用程序。在命令行中執行以下命令：
```
ng new my-app
cd my-app
ng serve
```
### 創建一個簡單的Angular組件
在Angular中，組件是應用程序的構建塊。以下是一個簡單的Angular組件的例子：
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <h1>Hello, Angular!</h1>
    <p>This is my first Angular component.</p>
  `,
})
export class MyComponent {}
```
### 渲染 Angular 組件
在你的應用程序中，你需要將Angular組件渲染到DOM中。以下是一個將Angular組件渲染到HTML頁面上的例子：
```
<body>
  <app-my-component></app-my-component>
</body>
```
這將會把<app-my-component>組件渲染到HTML頁面上。

以上只是Angular的一小部分功能和使用方法。你可以通過閱讀官方文檔和教學來深入了解Angular的更多特性和最佳實踐。
