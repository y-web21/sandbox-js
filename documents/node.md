## browser-sync

`package.json` がない状態から。

```bash
npm init -y
npm i -D browser-sync
npx browser-sync init
vim bs-config.js	# 編集内容は後述
vim package.json	# 編集内容は後述
npm run live
```


```js
// :package.json
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "live": "browser-sync start --config \"./bs-config.js\"" // 追加
  },
  ...
```

```js
// :bs-config.js
  ...
  // "files": false
  // 監視対象を指定
  "files": [
    "css/**/*.css"
  ],
  ...
  // "server": false
  // ルートディレクトリを指定
  "server": [
    "./"
  ],
  ...
  // "open": "local",
  "open": false, 起動時の自動ページ移動をOFF
  ...
```

### reference

[Browsersync options](https://browsersync.io/docs/options)
