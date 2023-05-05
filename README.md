## package.json構成

- html-webpack-plugin
    - index.htmlをbundle.jsと同ディレクトリに配置できる
- css-loader,style-loader
    - tsでcssが使えるようにする

## CSS関連

- css modulesを使用する場合
    1. 以下をwebpack.config.jsのmodule.rulesに追加する
      ```
      // use css on ts
      {
          test: /\.css$/,
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader',
                  options: {
                      modules: {
                          // cssファイル名毎にnamespaceを作る
                          localIdentName: '[name]__[local]___[hash:base64:5]'
                      }
                  }
              }
          ]
      },
      ```
    2. typings.d.tsをsrc直下に配置する
      ```
      // css 型定義自動生成
      declare module "*.css" {
      const styles: { [className: string]: string }
        export default styles
      }
      ```

## Routing

- BrowserRouterを使用。(Routerでhistoryプロパティ使用と同等?)
- url直接アクセスで404エラーはwebpack-dev-serverにhistoryApiFallback=trueで解消
    - http://kmikmy.hatenablog.com/entry/2017/11/12/012641
- 構成は、`App.tsx`に最上位レイアウトを保持する
- url直接アクセスorリロードで304エラーはindex.htmlにbaseタグ追加で対応
  - https://teratail.com/questions/26245

## UI

- Material-UIを採用
- サンプル
    - https://material-ui.com/ja/components/box/
    - https://next.material-ui.com/ja/components/material-icons/
