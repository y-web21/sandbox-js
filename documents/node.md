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


## webpack

[Concepts \| webpack](https://webpack.js.org/concepts/)

[Command Line Interface \| webpack](https://webpack.js.org/api/cli/)

### bundle

オブジェクトで渡すと個別に。配列で渡すと一つのファイルとなる。

```js
module.exports = {
  entry: {
    main: "./src/js/main.js",
    test: "./src/js/test.js",
  },
  // [name] にはもともとの名前が入る。
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
    filename: "./[name].bundle.js",
  }
}
```

```js
module.exports = {
  mode: 'none',
  entry: [
    "./src/js/main.js",
    "./src/js/test.js"
  ],
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
    filename: "./bundle.js",
  }
}
```
### 必要に応じて、 mode を使い分ける。

`production` or `development` or `none`

```js
// webpack.config.prod.js
module.exports = {
  mode: 'production',
  ...
}
```

```js
  // package.json
  "scripts": {
    "webpack": "webpack --config webpack.config.prod.js"
  },
```

