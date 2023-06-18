動態HTML和CSS允許我們使用JavaScript來動態地創建、修改和更新HTML和CSS。這使得我們可以根據用戶交互、數據變化或其他條件來改變網頁的外觀和內容。以下是一個簡單的教學，介紹了如何使用JavaScript實現動態HTML和CSS，並附上相應的程式碼示例。

## 動態HTML
### 創建新元素
```
// 創建一個新的<div>元素
const newDiv = document.createElement('div');

// 添加文本內容
newDiv.textContent = 'Hello, world!';

// 添加類名
newDiv.className = 'my-class';

// 將新元素添加到文檔中的某個元素中
const container = document.getElementById('container');
container.appendChild(newDiv);
```
### 修改元素內容
```
// 獲取現有元素
const existingElement = document.getElementById('my-element');

// 修改元素的文本內容
existingElement.textContent = 'New content';

// 修改元素的HTML內容
existingElement.innerHTML = '<strong>New content</strong>';
```
### 刪除元素
```
// 獲取要刪除的元素
const elementToDelete = document.getElementById('element-to-delete');

// 從父元素中移除該元素
elementToDelete.parentNode.removeChild(elementToDelete);
```
## 動態CSS
### 修改元素樣式
```
// 獲取元素
const element = document.getElementById('my-element');

// 修改元素的樣式屬性
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.style.fontSize = '20px';
```
### 添加和移除CSS類名
```
// 獲取元素
const element = document.getElementById('my-element');

// 添加CSS類名
element.classList.add('my-class');

// 移除CSS類名
element.classList.remove('my-class');
```
### 檢查是否包含CSS類名
```
// 獲取元素
const element = document.getElementById('my-element');

// 檢查元素是否包含指定的CSS類名
if (element.classList.contains('my-class')) {
  console.log('Element has the class!');
} else {
  console.log('Element does not have the class!');
}
```
以上只是動態HTML和CSS的基礎操作示例，使用JavaScript可以進一步擴展和定制網頁的外觀和行為。希望這個簡單的教學能幫助你入門動態HTML和CSS的使用。
