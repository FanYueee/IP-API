# IP-API
一個可以讀取並反傳使用者 IP 的網站，採用 JavaScript 撰寫，無須額外套件。

單純無聊所寫，沒什麼用意

## 部署在自己的電腦上
1. 安裝 [node.js](https://nodejs.org/) 選擇 LTS 版本即可
2. 下載 [app.js](https://github.com/FanYueee/IP-API/blob/main/app.js)
3. 根據需要調整 app.js 內的端口設定，預設 80
4. 開啟 CMD ，輸入以下指令啟動 app.js
```js
node app.js
```

## 部署在 Cloudflare Worker
1. 創建一個 [Cloudflare Worker](https://dash.cloudflare.com/) 服務
2. 「選擇啟動器」選擇「HTTP 處理常式」即可
3. 建立服務後至快速編輯，並將 [worker.js](https://github.com/FanYueee/IP-API/blob/main/worker.js) 內的程式碼直接覆蓋原有的
4. 儲存並部署，即完成

## 其他
Q：我會增加 IP ASN、國家等資訊嗎？

A：不會，因為我沒有那些資料庫，這些資料需要仰賴外部提供，直接用第三方服務，這只是寫好玩的。

* 備註：Cloudflare Worker 每天的請求量有限制，超過就無法訪問。