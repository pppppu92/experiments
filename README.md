# experiments
アプリケーションの試作を行います．
各プロジェクトのファイルはプロジェクト名のフォルダ内に格納すること．

## 実装の要望
個人事業主のベビーシッターホームページを一括で作成してください。以下の要件に従って実装してください。

### 基本要件
- シンプルで清潔感のあるデザイン
- レスポンシブデザイン（モバイル対応必須）
- 信頼性を重視したレイアウト
- 優しい色合い（パステルカラー中心）
- 読みやすいフォント

### ディレクトリ構成
```
/
├── index.html                 # トップページ
├── about/
│   └── index.html            # 自己紹介・プロフィール
├── services/
│   └── index.html            # サービス内容・料金
├── safety/
│   └── index.html            # 安全対策・資格情報
├── gallery/
│   └── index.html            # 活動写真
├── testimonials/
│   └── index.html            # お客様の声
├── faq/
│   └── index.html            # よくある質問
├── contact/
│   └── index.html            # お問い合わせ
├── policy/
│   └── index.html            # 利用規約・プライバシーポリシー
├── blog/
│   └── index.html            # ブログ
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── images/
    ├── profile/
    ├── services/
    └── gallery/
```

### 各ページの内容

#### トップページ（index.html）
- ヘッダー：ナビゲーションメニュー
- メインビジュアル：キャッチコピー「安心・安全なベビーシッターサービス」
- 3つの特徴：「資格保有」「豊富な経験」「24時間対応」
- サービス概要カード
- お問い合わせボタン（目立つ色）
- フッター：連絡先、営業時間

#### 自己紹介ページ（/about/）
- プロフィール写真エリア
- 経歴・資格一覧
- 保育への想い
- 趣味・特技

#### サービス内容・料金ページ（/services/）
- 基本プラン表
- 料金体系（時間単価制）
- 対応エリア地図
- 対応時間
- 年齢別対応内容

#### 安全対策・資格情報ページ（/safety/）
- 保有資格バッジ
- 救急法講習修了証
- 保険加入状況
- 安全対策チェックリスト
- 緊急時対応フロー

#### 活動写真ページ（/gallery/）
- 遊び・学習の様子（サンプル画像使用）
- 安全対策の実例
- ※「個人情報保護のため、実際の写真は保護者の同意を得て掲載」との注記

#### お客様の声ページ（/testimonials/）
- 利用者の感想カード（3-4件のサンプル）
- 推薦コメント
- ※「個人情報保護に配慮し、仮名で掲載」との注記

#### よくある質問ページ（/faq/）
- アコーディオン形式のFAQ
- 料金、安全性、予約・キャンセル、緊急時対応について

#### お問い合わせページ（/contact/）
- GoogleフォームのURL: 'https://docs.google.com/forms/d/e/1FAIpQLScUJsiv0SRxWLoH6Np9LiawLZ_eJIppm2XiSc9yWRAuqg8s9Q/viewform?usp=dialog'
- Googleフォーム埋め込み用のiframe枠
- 連絡先情報
- 対応時間
- 緊急連絡先
- 「Googleフォームはこちらに埋め込まれます」の注記

#### 利用規約・プライバシーポリシーページ（/policy/）
- 個人情報保護方針
- 利用規約
- キャンセルポリシー
- 免責事項

#### ブログページ（/blog/）
- 記事一覧（サンプル記事3-4件）
- 育児情報、安全対策の紹介など

### デザイン要件

#### カラースキーム
- メインカラー：#4A90E2（優しい青）
- サブカラー：#F5F5F5（ライトグレー）
- アクセントカラー：#FF6B6B（優しいピンク）
- テキストカラー：#333333

#### フォント
- 日本語：游ゴシック, メイリオ, sans-serif
- 英語：Arial, sans-serif

#### レイアウト
- 最大幅：1200px
- 余白：適度な余白で読みやすく
- カードレイアウト：情報をカード形式で整理
- ボタン：角丸で優しい印象

#### レスポンシブ対応
- スマートフォン：縦並びレイアウト
- タブレット：2カラムレイアウト
- PC：3カラムレイアウト

### 技術要件

#### HTML
- セマンティックHTML5
- 各ページに適切なタイトル・メタディスクリプション
- 構造化データ（JSON-LD）の実装

#### CSS
- Flexbox/Grid使用
- CSS変数でカラーパレット管理
- スムーズなホバーエフェクト
- アニメーション（控えめ）

#### JavaScript
- ナビゲーションメニューの制御
- FAQのアコーディオン機能
- スムーススクロール
- フォームバリデーション

#### SEO対策
- 適切なheading構造
- alt属性の設定
- sitemap.xml
- robots.txt

### 注意事項
1. 個人情報保護に配慮したコンテンツ
2. 信頼性を重視したデザイン
3. 保護者が安心できる情報配置
4. 緊急時対応を目立たせる
5. 資格・経験を明確に表示

### 実装指示
上記要件に従って、完全に動作するベビーシッターホームページを作成してください。画像は適切なプレースホルダーを使用し、実際の運用時に差し替えられるようにしてください。コードは保守しやすく、拡張しやすい構造にしてください。
