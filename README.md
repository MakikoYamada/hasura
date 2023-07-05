
## 1. Nextjs Project 新規作成

ーcreate-next-app
```bash
npx create-next-app@11.1.2 .
```



ーApollo Clientインストール
```bash
yarn add @apollo/client graphql @apollo/react-hooks
```

ー".babelrc"ファイルを作成
```bash
touch .babelrc
```

```bash
{
        "presets": ["next/babel"]
    }
```


## 2. TypeScript の導入

ー空のtsconfig.json作成
```bash
touch tsconfig.json
```

ー必要moduleのインストール
```bash
yarn add -D typescript @types/react @types/node
```

ー開発server起動
```bash
yarn dev
```

ー_app.js, index.js -> tsx へ拡張子変更

ーAppProps型追記
```bash
import { AppProps } from 'next/app'

    function MyApp({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />
    }

    export default MyApp
```

## 3. Tailwind CSS の導入

ー必要moduleのインストール
```bash
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```

ーtailwind.config.js, postcss.config.jsの生成
```bash
npx tailwindcss init -p
```

ーtailwind.config.jsのcontent設定追加
```bash
content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ]
```

ーglobals.cssの編集
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. GraphQL codegen

ー必要moduleのインストール
```bash
yarn add -D @graphql-codegen/cli
```

```bash
yarn graphql-codegen init
```
<img width="635" alt="250824716-50c23b08-c997-4b6c-b09d-02d30746385b" src="https://github.com/MakikoYamada/hasura/assets/96478420/8e2decb4-afda-4a0d-ae7b-3189f1e2ee55">

```bash
yarn
```

```bash
yarn add -D @graphql-codegen/typescript
```

ーqueriesフォルダ、queries.tsファイル作成

<img width="275" alt="スクリーンショット 2023-07-05 13 57 57" src="https://github.com/MakikoYamada/hasura/assets/96478420/4cfbcdc5-19f2-474a-be70-e4f55947f269">

ーcodegen.ymlにhasuraシークレットを記載

<img width="802" alt="250829489-4fcedc20-c1d9-42ff-8909-2d6e72d9d08d" src="https://github.com/MakikoYamada/hasura/assets/96478420/e884a473-9cd1-48be-845a-53401819678d">


ージェネレートする
```bash
yarn gen-types
```

src/gql フォルダが作成され、ジェネレートされた記述ができる
