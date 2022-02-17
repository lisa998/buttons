1. 什麼是 React.js?

一種 js 函式庫，用以整合 html、css、js 的框架，方便管理及開發

2. 什麼是元件? 為什麼元件的概念對 React 來說很重要?

將頁面形成部分拆解成部件，方便複用，也讓 React Render 時可以以元件為單位去檢查有無變動，減少渲染的效能成本

3. Props 和 State 差別在哪?

props 由父元件傳下來，不可直接更改，需將該 prop 的 setState 一起傳入子元件做更改； state 則是當層元件本身的數據。

4. 選擇⼀個曾經在專案中⽤過的元件週期，並介紹你是怎麼使⽤的?

`componentDidMount` 時設定 `setInterval` 固定每秒增加1，在 `componentWillUnmount` 時 `clearInterval` 回收 `setInterval` 的 `id`

5. Class 跟 Functional 元件的差別? 該怎麼選擇?

Class 需繼承 React.Component 、擁有 this 、需要實作render方法。
Hook 前 Functional 沒有生命週期、state，出 hook 後都有，使用 function return 的方式render，沒有this， babel編譯成es5更快，可讀性較高。

6. 什麼是 React 中的 Events?

使用者對網頁的動作，例如`click`, `keypress`, `wheel`, `scroll`。通常用以監控後讓網頁做出反應。


7. 什麼是 JSX?

讓html可以在js中使用的一種語法，例如: 可以將html元件當成變數。

8. 什麼是 Virtual DOMs? ⼜是怎麼運作的?

在拿到 data 時會先建立虛擬 dom 用來之後比對畫面上需要重新渲染的部分有哪些，不必全部重新渲染，改善網頁效能

9. 你會怎麼 Debug ⽤ React 寫出來的網⾴應⽤? ⽤哪些⼯具?

使用React devtool, Redux devtool (若該專案有使用) 檢視 data 改變， chrome devtool 檢視網路問題或發request、收response問題；postman檢查api使用，若無CORS問題時串連api狀況；ESLint 輔助檢查是否有少掉括號或拼錯等。

10. ⽤ React 的優點是什麼?

Virtual DOM可能可以減少網頁渲染成本，元件化讓Component可以複用。

11. React 有什麼缺點和限制?

數據單向流，與原生js差距較大，使用JSX會較方便，若架設單頁式網站會導致SEO搜尋到空殼，需額外使用SSR的Next.js。

12. 什麼是 Redux 或 context api?

當祖元素甚至祖祖元素需要傳state到子元素時，用以管理資料，可以不用一層一層傳。

13. 使⽤ Redux 的優點是什麼?

當元件越來越多層，專案越來越龐大時，資料流仍方便存取。

14. 為什麼你會想選擇 React?

Virtual DOM 可能可以優化，元件能重覆利用，方便管理，JSX語法糖，相較於原生js與jquery操作DOM方便許多。

15. 什麼是 react-hook-form?
