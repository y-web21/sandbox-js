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


## sass

Dart Sass

```bash
npm i -D sass
npx sass src/scss/style.scss dest/css/style.css
npx sass src/scss/style.scss dest/css/style.css --no-source-map --watch --style compressed
```

sass-loader と組み合わせて、 webpack から使用する。

オプションは以下参照

[Sass: Dart Sass Command-Line Interface](https://sass-lang.com/documentation/cli/dart-sass#options)
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
    clean: true, // 出力前に path: ディレクトリをクリーンにする
  }
}
```

[Template strings](https://webpack.js.org/configuration/output/#template-strings) によると [id],[name],[chunkhash],[contenthash]が使えるようだ。


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
// :webpack.prod.js
module.exports = {
  mode: 'production',
  ...
}
```

公開用には向かないオプションも多いため、予め `dev`, `prod` で `webpack.config.js` は分けておいたほうが良いだろう。

```js
  // :package.json
  "scripts": {
    // ...
    "webpack": "webpack --config webpack.prod.js"
  },
```

`NODE_ENV` によって切り分けて1つのファイルで管理する構造でも問題ない。管理するファイルが減るメリットが有る。

```js
// : webpack.config.js
    process.env.NODE_ENV === "production"
    ? "style-loader"
    : MiniCssExtractPlugin.loader,
```


### source map を利用する

エラー時に、バンドル前のエラー箇所がわかるようにする。

```js
// :webpack.config.js
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
    filename: "./main.js",
  }
  ...
  devtool: 'inline-source-map'
```

DevTools の Console のエラーを確認すると、バンドル前のソースファイルでエラー箇所が表示される。

`main.js` じゃないファイル名であることが確認できる。

```
test.js:3 Uncaught TypeError: document.getElementsByYourLifePolicy is not a function
    at test.js:3:1
    at test.js:3:1
    at test.js:3:1
```
### module

非常に多機能、というかドキュメントがあるのだが、`sass` に絞る。

[Module \| webpack](https://webpack.js.org/configuration/module/)

よく言われているのが、 `use` は下から適用されるということ。

```js
// :webpack.config.js
  // ...
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",    // ここから順に適用される
        ],
      },
    ]
  }
  // ...
```

#### sass-loader

sass をコンパイルして、さらに js にまとめる。

高速化が期待される。(画像もbase64での埋め込みができるが、容量は1.3倍になる)

参考元

[sass-loader - npm](https://www.npmjs.com/package/sass-loader)

```bash
npm i -D sass-loader css-loader style-loader
```

`webpack.config.js` の基本設定は、[module](#module)を参照。

`entry: ` に設定しているファイル( `"./src/js/main.js"` )に以下の `import` を追記。

```js
import '../scss/style.scss';
```

- [webpack-contrib/css-loader: CSS Loader](https://github.com/webpack-contrib/css-loader)
    - The css-loader interprets @import and url() like import/require() and will resolve them.
    - CSS を js に import する。
- [webpack-contrib/style-loader: Style Loader](https://github.com/webpack-contrib/style-loader)
  - Inject CSS into the DOM.
  - js にある css を DOM に割り当てる。
  - [style-loader \| webpack](https://webpack.js.org/loaders/style-loader/)

#### mini-css-extract-plugin で CSS を別ファイルに出力する

```bash
npm i -D mini-css-extract-plugin
```

```js
// :webpack.dev.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // "style-loader" から置き換える
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/style.css", // output: { path: を起点としたパス
    }),
  ],
}
```


### webpack-dev-server を使用する

独自のライブリロードつきWebサーバーがある模様。

```bash
npm install --save-dev webpack-dev-server
```

以下を追加。

```js
// :webpack.config.js
  // ...
  devServer: {
    static: './dist',
  },
  // ...
  optimization: {
    runtimeChunk: 'single',
  },
```

serve

```bash
npx webpack serve --open
```

[Using webpack-dev-server \| webpack](https://webpack.js.org/guides/development/#using-webpack-dev-server)

[DevServer](https://webpack.js.org/configuration/dev-server)
