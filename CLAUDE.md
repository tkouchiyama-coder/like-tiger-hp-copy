# 株式会社LikeTiger ホームページ制作

クライアント：株式会社LikeTiger（福岡県久留米市・営業会社）
代表取締役社長：河内山 大我（こうちやま たいが）氏

## コンセプト
- 経営理念「Sales is Journey」＝営業は旅。黄×黒×白の旅テーマデザイン
- ビジョン「世界一変人が集まる会社」
- サブメッセージ「Have a rice trip」「世界を旅する営業マン」

## ファイル構成
- `index.html` — 5セクション＋フッターの1ページサイト
- `css/style.css` — デザイン一式（レスポンシブ対応済み）
- `js/main.js` — スクロールアニメーション／写真自動読み込み／フォーム見た目
- `images/` — 写真置き場（README.txt に差し替え方法を記載）
- `Like tiger HP参考/` — デザインの正解となる参考PNG（セクション1〜5）

## セクション構成
1. トップ（ヒーロー）「Sales is Journey 世界を旅する営業マン」
2. ビジョン「世界一変人が集まる会社」
3. 取扱い（事業一覧10種／3つの事業軸／実績・強み）
4. 自己紹介（代表プロフィール・経歴チェックリスト・私の原動力）
5. お問い合わせ（フォーム：会社名/お名前/メール/内容）
- フッター：会社概要（設立2026/3/5・資本金50万円・久留米市東櫛原町）

## 公開状況
- Vercelで公開中：https://like-tiger-hp.vercel.app/（プロジェクト名 like-tiger-hp）
- 更新時は `vercel deploy --prod --yes` で再デプロイ
- `.vercelignore` で参考画像フォルダ・CLAUDE.md は非公開

## 2026-06-10 クライアントフィードバック対応済み
- ビジョンを「世界一変人が**輝く**会社」に変更（集まる→輝く）
- ビジョンタイトルをトップと同じ筆ブラシ調に
- 別ページ `countries.html`「TRAVEL LOG（滞在した国一覧）」を新設（黒×黄・地球儀を飛行機が周回）
  - **国リストは仮**。正式リストをもらったら差し替えること
- 絵文字を全廃→自作SVG線画アイコン（index.html の symbol 定義）
- 地球儀の線画（ヒーロー背景で回転）・紙のざらつき質感を追加

## 未対応・今後の作業（2026-06-10 時点）
- [ ] **取扱いセクションのデザイン**：クライアント側でイメージをまとめて連絡が来る予定（来たら改修）
- [ ] **国一覧の正式リスト**待ち（現在は仮の32カ国）
- [ ] 写真の差し替え（現状は全てグレーの仮置き。images/README.txt 参照）
- [ ] お問い合わせフォームの送信機能（Formspree等と連携して t.kouchiyama@liketiger39.com へ届くようにする）
- [ ] 独自ドメイン取得・接続（現在は vercel.app ドメイン）

## 作業ログ（2026-06-10）

### 完了したこと
- **サイト新規作成**：Googleドキュメントのヒヤリング内容＋参考PNG（セクション1〜5）をもとに、1ページサイトを HTML/CSS で作成
  - 作成ファイル：`index.html` / `css/style.css` / `js/main.js` / `images/README.txt`
  - 構成：①トップ「Sales is Journey」②ビジョン ③取扱い ④自己紹介（河内山社長）⑤お問い合わせ＋フッター（会社概要）
- **トップのインパクト強化**（クライアント要望）：筆ブラシの黒い飛沫（SVGフィルター`#brush-edge`で再現）、白ブラシの下地、画面端まで広がる写真コラージュ、飛行機シルエット、紺色のパスポート風カードを追加
- **Vercelで公開**：https://like-tiger-hp.vercel.app/（プロジェクト名 like-tiger-hp、アカウント shunpeivlog2000-3648）
- **クライアントフィードバック5件に対応**：
  1. ビジョンを「世界一変人が輝く会社」に変更
  2. ビジョンタイトルを筆ブラシ調に強化
  3. 別ページ `countries.html`「TRAVEL LOG（滞在した国一覧）」新設（黒×黄・地球儀＋周回する飛行機・仮の32カ国）
  4. 地球を旅する世界観（トップ背景に回転する地球儀の線画）
  5. 絵文字を全廃し自作SVG線画アイコンに置き換え（`css/countries.css` も新規作成）
- 全体の質感アップ：紙のざらつき（ノイズ）オーバーレイ、カードの黒オフセット影、ホバー演出
- PC（1440px）・スマホ幅の両方でスクリーンショット表示確認済み

### 未完了・次回やること
- **取扱いセクションの改修**：クライアント側でイメージをまとめて連絡が来る予定（待ち）
- **国一覧の正式リスト**への差し替え（現在は仮の32カ国）
- 写真の差し替え（全てグレー仮置き。`images/README.txt` の名前で入れるだけ）
- お問い合わせフォームの送信機能（Formspree等→ t.kouchiyama@liketiger39.com）
- 独自ドメインの取得・接続

### 重要な設定・メモ
- 公開URL：https://like-tiger-hp.vercel.app/ ／ 国一覧：https://like-tiger-hp.vercel.app/countries.html
- 再デプロイ方法：このフォルダで `vercel deploy --prod --yes`（ログイン済み・紐付け済み）
- `.vercelignore` で「Like tiger HP参考」フォルダと CLAUDE.md は非公開にしてある
- ヘッドレスChromeでのスクショ確認は最小幅500pxなので、390px指定だと右が切れて写る（実機では正常）
- 制作プラン：`~/.claude/plans/hp-hp-claude-iterative-pelican.md`

## 作業ログ（2026-06-10 ②回目）

### 完了したこと
- クライアントから「参考デザインを丸ごとコピーできないなら、写真を作成して貼り付ける形がいいか？」と質問
  → **「文字はコード・写真は画像を貼る」のハイブリッド方式がベスト**と回答（文言修正のしやすさ・スマホ対応・検索対策のため、文字部分は画像化しない方針）
- クライアント提供のスクリーンショット（参考デザイン・2256×1256px）から写真部分を3枚切り出し、`images/` に配置
  - `hero-main.jpg`（人物＋世界の名所のコラージュ）
  - `hero-sub1.jpg`（飛行機）
  - `hero-sub2.jpg`（パスポート）
  → トップのグレー仮置きが消え、参考デザインにかなり近い見た目になった
- Vercelに再デプロイ済み（https://like-tiger-hp.vercel.app/ に反映）

### 未完了・次回やること
- **参考デザインの「元データ」（高画質版）をクライアントに依頼中**：スクリーンショット経由のため画質がやや低い。元ファイル（Canva・画像生成AI等で作成したもの）をもらえたら最高画質で差し替える
- 人物が枠から飛び出す演出をやる場合は「背景透過の切り抜きPNG」が必要（Canvaの背景リムーバで作成可能と案内済み）
- ビジョン（vision-team.jpg）・自己紹介（profile-main/sub1/sub2.jpg）の写真はまだグレー仮置きのまま
- 取扱いセクションの改修（クライアントのイメージ連絡待ち）・国一覧の正式リスト・フォーム送信機能・独自ドメインは引き続き未対応

### 重要な設定・メモ
- ヒーローの写真3枚は**スクリーンショットからの仮切り出し**。元データ入手後に上書きすること
- 画像の切り出しは macOS 標準の `sips` コマンドで実施（--cropOffset 上 左 -c 高さ 幅）

## 作業ログ（2026-06-10 ③回目）

### 完了したこと
- **クライアントフィードバック第2弾（①〜⑥）に対応**：
  1. トップの大見出しを「株式会社LikeTiger」に変更（その下に黒帯で「Sales is Journey」、小さく「世界を旅する営業マン」）
  2. 理念・ビジョンを別ページ `philosophy.html` に分離（旅のエピソード3つ・旅の登場人物も追加）。トップ右上にナビ（理念・ビジョン／TRAVEL LOG／お問い合わせ）新設
  3. 「LikeTigerの3つの事業」に改名し、**名刺の裏面と同じ内容・色**に変更：
     - 01 法人コスト削減事業（AI活用、複合機、エレベーター 等）＝黄色
     - 02 SNSマーケティング事業（SNS運用、PRキャスティング 等）＝ピンク #F7A8C8
     - 03 ライフスタイル事業（農業資材販売、健康、不動産 等）＝水色 #7FE0EE
     - 黒い番号ブロック＋右端が矢印型のリボンデザイン。配置も事業一覧より先頭に
  4. 課題解決力の説明に「不動産」を追加
  5. 「代表取締役社長」→「**代表取締役／CEO**」に変更（名刺と統一）
  6. 残っていた✈️絵文字を全て削除またはシルエット化（⑥はメッセージが途切れていたが絵文字の件と推測して対応済み）
- **Googleドライブから公式素材を取得**（リンク共有→embeddedfolderview経由でダウンロード）：
  - 公式キャラクター「らい太くん」（透過PNG）→ お問い合わせ欄＋TRAVEL LOGページに配置
  - 会社ロゴ各種 → ファビコン（タブのアイコン）作成、フッターに黄色のLTマーク配置
  - 素材の保存先：`素材/キャラクター/`・`素材/ロゴ/`（.vercelignoreで非公開）
- **ブランドカラー統一**：サイトの黄色をロゴの正式カラー **#FFED00** に変更（style.css / countries.css の --yellow）
- **代表・河内山さんの写真**（素材フォルダのIMG_0140）を自己紹介欄のメイン枠に設定（images/profile-main.jpg）
- クライアントに送る**LINE用の依頼文**（写真3枚・国リスト・デザイン元データの準備依頼）を作成して提供
- 毎回 Vercel に再デプロイ済み（https://like-tiger-hp.vercel.app/）

### 未完了・次回やること
- **クライアントからの素材待ち**（LINE依頼文送付済みのはず）：
  - 旅の写真2枚（profile-sub1.jpg / profile-sub2.jpg）
  - チーム写真1枚（vision-team.jpg）
  - トップのデザイン画像の元データ（高画質版）
  - 滞在した国の正式リスト（TRAVEL LOGの32カ国は仮のまま）
- 事業・サービス一覧に「法人コスト削減事業」等の事業名カードが残っていて3つの事業リボンと重複 → 整理するか確認中
- お問い合わせフォームの送信機能（Formspree等）
- 独自ドメインの取得・接続

### 重要な設定・メモ
- ページ構成（3ページ）：index.html（トップ）／philosophy.html（理念・ビジョン）／countries.html（TRAVEL LOG）
- ブランドカラー：黄 #FFED00（ロゴから取得した正式カラー）／3事業の色：黄・ピンク#F7A8C8・水色#7FE0EE
- Driveのリンク共有フォルダは `https://drive.google.com/embeddedfolderview?id=フォルダID` のHTMLからファイルID抽出 → `uc?export=download&id=` でダウンロードできる
- 河内山さんのDriveフォルダ：公式キャラクターのコピー（1sleyr4w0T8eJRGAATGQsfdK5ZIjIZc-H）／会社ロゴのコピー（1t92lmtV-tZzheAlG7U3OKsWeuKAogNMg）
- 加工はPython（PIL）で実施：らい太くん軽量化・ファビコン生成・ロゴ色反転

## 作業ログ（2026-06-11）

### 完了したこと（クライアントフィードバック第3弾対応）
- ①トップの「株式会社LikeTiger」のモヤ（#roughフィルター）を外しハッキリ表示に。代わりに「Sales is Journey」の帯にモヤ（かすれ）を移動
- ③飛行機シルエットを「旅客機を上から見た形」に描き直し（index / philosophy / countries の3ファイルの `#jet-shape` を一括差し替え）
- ④新ページ **`business.html`（事業内容）** を新設＋ `css/business.css` 作成
  - 3つの事業（黄・ピンク・水色）をそれぞれ詳しく紹介（リード文・取扱いサービスタグ・こんなお悩み・事例枠）
  - 事例枠は「順次掲載予定」のプレースホルダー（**実際の事例をクライアントからもらったら差し替え**）
  - 「代表の活動」セクション：ピックルボール主催・農業団体（**文言は仮。正確な活動内容の確認待ち**）
  - 全ページのナビ・フッターに「事業内容」リンク追加、トップの3つの事業の下に「事業内容をくわしく見る」ボタン追加
- ④経歴の先頭に「東京農業大学 応用生物科学部 出身」を追加（**ユーザーのメッセージが途中で切れていたため続きの確認待ち。卒業/学科名など正式表記も要確認**）
- Vercel 本番デプロイ済み

### 未対応（素材・情報待ち）
- ②ヒーロー写真：AI感が強い→大我さん本人の写真へ差し替え＋下の写真（切り抜きが中途半端）の差し替え → **写真素材待ち**
- ⑤3つの事業の色合い・イラストを名刺と完全に合わせる → **名刺裏面の画像（写真でOK）待ち**。素材フォルダにはロゴ面しかない
- 経歴「東京農業大学応用生物科学部 …」の続きの文言確認
- ピックルボール主催・農業団体の正確な情報（名称・活動内容・写真）
- 各事業の掲載できる事例（お客様名・内容・成果）

## 作業ログ（2026-06-15）

### 完了したこと（クライアントフィードバック第4弾・大型対応）
Googleドライブ共有フォルダ「HP関係」（ID: `1uO_YeD8JPld0NwgCCecEO0rKhd-Gxdjh`／owner: t.kouchiyama@liketiger39.com）から素材を取得して反映。
- **トップ「LikeTiger」を公式ロゴ風フォントに**：Latin 部分を **Poppins（800）非イタリック**へ。公式ロゴの単層（single-story）の g に近づけた
- **左上に公式ロゴ配置**：`images/logo-black.png`（公式ロゴLikeTiger込みの黄背景#FFED00を輝度しきい値で透過した黒ロゴ）。従来の「トップ」タグは撤去
- **地球儀の線を水色に**：`hero__globe` の stroke を `#2BB8DE` に変更＋透過度を 0.07→0.32 に上げて視認性UP
- **右側の写真・イラストを全削除**：写真コラージュ3枚・飛行機・パスポートを撤去
- **公式キャラ らい太くん（左手あげ・案内ポーズ）を大きく配置**：`images/raita-guide.png`。元ファイル「らい太左手あげてる.png」は市松模様背景の**不透過RGB**だったため、`PIL ImageDraw.floodfill(thresh=60)` で四隅から背景を透過化→トリミング→幅1000で最適化
- **Sales is Journey を真っ黒に**：黒帯ブラシ背景を撤去し、黒文字#000のみに
- **3事業の色を名刺に統一**：法人コスト削減=水色#7FE0EE／SNSマーケ=黄緑#BEF06A（新規 `--lime`／`biz--lime` 追加）／ライフスタイル=ピンク#F7A8C8。**index.html・business.html 両方**を変更
- **ペットフード記載を全削除**（index の事業一覧カード＋business.html の本文・タグ）
- **実績・強み**：「収益改善」→「**対応スピード**」、説明文を「相談・確認・トラブル対応まで、圧倒的なスピードでお応えします。」に。稲妻アイコン `ic-bolt` を新設
- **自己紹介セクション見出し→「代表ご挨拶」**
- **代表写真→起業した日の写真（上半身トリミング）**：`profile-main.jpg`。EXIF回転(orientation6)を焼き込み→上半身でクロップ
- **旅の写真→レインボーマウンテン＋リチャード家族**：`profile-sub1.jpg`/`profile-sub2.jpg`。HEICはsips→JPG変換、EXIF回転を `ImageOps.exif_transpose` で焼き込み
- **私の原動力の文章を差し替え**（海外にハマり思考から行動が変わった／きっかけを与え続ける存在でありたい）
- **吹き出しに追記**：「『行動力おばけ』の異名も名付けられました」「海外ボランティアも経験」
- **Have a rice trip の横にお米（おにぎり）アイコン** `ic-rice` を新設して追加
- **経歴文修正**：「社会人1年目から新規営業を toC/toB ともに一貫して経験」→「社会人1年目から新規営業を一貫して経験」
- **全ページのフッターロゴを公式ロゴLikeTiger（白）に統一**：`images/logo-footer-white.png`（黄背景透過＋黒→白）。index/business/philosophy
- PC・スマホ両方でスクショ確認 → **Vercel 本番デプロイ済み**

### 重要な設定・メモ
- Driveの大容量オリジナルは `素材/HP関係/` に保存（`.vercelignore` で `素材` フォルダごと非公開）
- ロゴ透過の作り方：公式ロゴ(黒on黄#FFED00)を `alpha=(180-輝度)/(180-120)*255` でキーイング。黒版＝左上用／白版＝フッター用
- らい太左手あげは市松背景の不透過PNG → floodfill で透過化（透過版「らい太くん（透過）.PNG」は別ポーズ＆暗いグラデ背景のため不採用、Sales is Journeyスーツケース入りの左手あげ版を採用）
- 名刺裏の実測カラー：水色≒#C0F0F7／黄緑≒#BCF86F／ピンク（サイトは既存トーンの #7FE0EE/#BEF06A/#F7A8C8 で統一）

### 要確認・未対応（次回）
- **「代表ご挨拶」の解釈**：強みの説明文を“速さ”に＋自己紹介の見出しを「代表ご挨拶」に変更で対応。クライアント意図と差異があれば微調整
- **会社所在地**：フッターに既存（福岡県久留米市東櫛原町441番地1 プリマヴェーラ花の木407号）。地図埋め込み等の追加要否は要確認
- ヒーロー旧写真 `hero-main/sub1/sub2.jpg` は未使用化（削除可）
- お問い合わせフォームの送信機能（Formspree等）・独自ドメインは引き続き未対応
- 国一覧（countries.html）は仮の32カ国のまま

## 作業ログ（2026-06-15 ②）

### 完了したこと（クライアントフィードバック第5弾）
- **トップのらい太くんを縮小**：`hero__raita` の width を clamp(300,41vw,580)→**clamp(200,29vw,410)**、モバイルも max360→290px に
- **事業内容ページ（business.html）の各事業に実績カードを追加**：黒box内に「カテゴリ＋詳細＋アクセント色バッジ」の横並びカード。事業ごとに `--accent` 変数を設定し `.case-list/.case/.case__cat/.case__text/.case__badge` を business.css に新設
  - 法人コスト削減（水色）：運送業=複合機1台 29→15万円/年（**55%削減**）／ホテル業=エレベーター5基 114→81万円/年（**40%削減**）／AI研修=1日1時間以上の効果実感（高評価多数）
  - SNSマーケ（黄緑）：飲食店業=企画撮影投稿で**売上2倍**V字回復／商業施設=1日イベント集客・SNSオーガニック**20万回再生**
  - ライフスタイル（ピンク）：いちご農園=農業資材で**収量1.5倍**・4L/5L
- **代表の活動を「ピッくるめ」に**：「ピックルボールの主催」→「**『ピッくるめ』の主催**」。由来（**ピックルボール × 久留米 ＝ ピッくるめ**）を追記。活動風景写真 `images/pickleball.jpg`（Drive「ピックルボール.HEIC」→変換）を挿入。`.activity-card__photo` 追加
- **支社をフッターに追加**（index.html）：所在地→「本社」表記に変更し、**東京支社**（〒178-0065 練馬区西大泉2-1-19）・**横浜支社**（〒224-0044 横浜市都筑区川向町2002-3）を追加
- **経歴の訪問国数**：index.html「世界32カ国」→「これまで世界33カ国」（代表個人）
- **TRAVEL LOG（countries.html）を実データに刷新**：会社としてのべ**38カ国**。数字を 38カ国/6大陸/100目標 に更新。地域別（アジア11・ヨーロッパ12・北米中南米11・中東アフリカ3・オセアニア1）＋国旗絵文字付きチップ。仮リスト注記→「代表・河内山33カ国＋けんと5カ国＝のべ38カ国」の説明に
- 全ページ Vercel 本番デプロイ済み

### 国カウントの内訳（重要・今後の更新時の根拠）
- **代表（たいが／河内山）33カ国**：インドネシア・アメリカ・オーストラリア・ミャンマー・ベトナム・ドイツ・ベルギー・オランダ・フランス・スイス・イタリア・スロベニア・クロアチア・ハンガリー・オーストリア・スロバキア・チェコ・UAE・タイ・韓国・メキシコ・コロンビア・ペルー・ボリビア・チリ・アルゼンチン・ウルグアイ・パラグアイ・ブラジル・アンゴラ・南アフリカ・シンガポール・インド
- **けんと固有5カ国**：カナダ・香港・中国・フィリピン・台湾
- けんとと代表の重複3カ国（豪・インドネシア・ベトナム）は二重計上しない → **会社のべ38カ国**

### 要確認（次回）
- 「けんと」のフルネーム・肩書き（現在はTRAVEL LOG注記に「けんと」と表記）
- 事業の実績は black box カード化。事例の追加や数字の修正があれば business.html の `.case-list` を編集
- お問い合わせフォーム送信機能・独自ドメインは引き続き未対応

## 作業ログ（2026-06-21〜22）

### GitHub化（ChatGPTのCodex連携の準備）
- このプロジェクトを **git 管理化し、GitHub に非公開リポジトリとして公開**：**https://github.com/shumpei1118/like-tiger-hp**（アカウント shumpei1118）
  - 目的：今後 **ChatGPT の中の「Codex」** でも編集できるようにするため（CodexはGitHub上のリポジトリしか触れない）
  - `.gitignore` で `素材/`・`Like tiger HP参考/`・`.DS_Store`・`.vercel` を除外（容量大の原本はMacのみ保管）
  - **Codex用の指示書 `AGENTS.md` を新規作成**（Codexが自動で読む。CLAUDE.mdのCodex版。`.vercelignore`で公開対象外）
- 再プッシュ方法：このフォルダで `git add -A && git commit -m "..." && git push`

### トップ改修第6弾（クライアント／Codex併用での大型改修）
- **入口ゲート新設**（index.html 冒頭 `section.intro-gate`）：公式ロゴ(logo-black.png)だけが中央に出る全画面ファーストビュー（featuredprojects.jp 風）→ スクロールで Sales is Journey ヒーローへ
- **ヒーロー刷新**（`hero--poster`）：h1を「Sales is Journey」に変更し大きく中央配置。背景に `images/hero-generated-journey.jpg`。左下CTA「お問い合わせはこちら」削除。`hero__company-label` で株式会社LikeTigerを黒タグ表示
- **Codexが追加した3セクションを採用**（クライアント承認済み・全部残す）：①課題訴求 `issue-callout`「誰に頼めばいいかわからない」②`vision-lp`「世界一変人が輝く会社」③`journey-band`「人生も、営業も、旅だ」。ビジョン導入文の重複は整理
- **活動風景セクション新設**（`activity-scenes`）：カレー畑＋地域コミュニティ。**`images/curry-field.jpg` は「お写真準備中」の仮画像**（本物の写真が素材に無いため。本物を同名で入れれば自動表示）
- **取引先ロゴをマーキー化**（`partners__marquee`）：2列を左右逆方向にゆっくり自動スクロール（`@keyframes marquee-left/right`、hoverで一時停止、prefers-reduced-motion対応）。各列は同じ並び×2で途切れずループ
- **飛行機SVG差し替え**：`#jet-shape` を「横から見た旅客機」に変更（**index/philosophy/business/countries の4ファイル一括**）
- **TRAVEL LOG（countries.html）**：ヘッダの「Like」(白)+「Tiger」(黄) を **`.tl-header__logo { color: var(--yellow) }` で全部黄色に統一**
- 上記すべて GitHub push 済み＋ Vercel 本番デプロイ済み（https://like-tiger-hp.vercel.app/）

### 重要な追加メモ
- Codex版の途中変更（HTMLはあるがCSS欠落）を補完して完成させた経緯あり。新セクションのCSSは style.css 末尾「2026-06-22 追加」ブロックに集約
- 素材フォルダに `meishi-back.png`（名刺裏）が追加済み → 3事業の色を名刺に完全準拠させる際に参照可
- 撮影確認のコツ：`.intro-gate{min-height:100vh}` のためヘッドレスでウィンドウを高くすると入口が巨大化。`.reveal` は演出で初期opacity:0 → 撮影時は一時的にCSSで打ち消す

### 要対応（次回）
- **カレー畑の本物写真**を `images/curry-field.jpg` で差し替え
- お問い合わせフォーム送信機能（Formspree等）・独自ドメインは引き続き未対応

## 作業ログ（2026-06-22 ②：他者への編集権限の引き渡し）

### 完了したこと
- 「公開中の本番サイトには触れず、別の人に編集権限を渡したい」という要望に対応 → **元リポジトリは複製して『編集用コピー』を作成**する方針（本人選択：A共同編集/Bコピー/CのZIPのうち **B**）
- **編集用コピーの非公開リポジトリを作成**：**https://github.com/shumpei1118/like-tiger-hp-copy**
  - 作成コマンド：`gh repo create like-tiger-hp-copy --private --source=. --remote=copy --push`
  - このコピーは **Vercel にも本番サイトにも未接続**（`.vercel` はgit管理外なので複製されない）→ 相手が編集しても本番 https://like-tiger-hp.vercel.app/ に影響なし
- 作成時にローカルの追跡先がコピー側に切り替わったため、**`git branch --set-upstream-to=origin/main main` で公開リポジトリ(origin)に戻し、`copy` リモートも削除**（このMacフォルダ＝本番の大元を維持）
- **クライアント側担当 `tkouchiyama-coder`（GitHubユーザー名／河内山社長サイドのcoderアカウント）を編集者として招待**
  - `gh api -X PUT repos/shumpei1118/like-tiger-hp-copy/collaborators/tkouchiyama-coder -f permission=push`（権限：write）
  - 相手がスクショで本人ログインを確認 → **招待を承認済み・collaborators に write で登録されたことを確認**（引き渡し完了）
- 元（本番）リポジトリ `like-tiger-hp` には**誰も招待していないことを確認済み**（安全）

### 未完了・次回やること
- **コピー側の編集を本番へ反映したくなった場合**：`like-tiger-hp-copy` の変更を `like-tiger-hp`（本番・Vercel連携）へ取り込む作業が必要（マージ/コピー）。依頼が来たら対応
- 「コピーごと完全に相手へ譲渡（ownership transfer）」の希望が出たら、Settings→Transfer で対応可
- （継続）カレー畑の本物写真 `images/curry-field.jpg` 差し替え／フォーム送信機能／独自ドメイン

### 重要な設定・メモ
- リポジトリ2系統：**本番＝`shumpei1118/like-tiger-hp`（Vercel連携・このMacフォルダが大元）／編集共有用＝`shumpei1118/like-tiger-hp-copy`（独立コピー・tkouchiyama-coderがwrite）**
- 権限の取り消し：コピーの GitHub ページ → Settings → Collaborators で相手を削除すれば解除
- 相手の編集方法：GitHub直接／ローカルclone／ChatGPTのCodexで `shumpei1118/like-tiger-hp-copy` を選択、のいずれも可
- 招待状況の確認コマンド：`gh api repos/shumpei1118/like-tiger-hp-copy/invitations`（空＝承認済み）／`gh api repos/shumpei1118/like-tiger-hp-copy/collaborators`

## 作業ログ（2026-06-26：相手側コピーの改修を本番へ統合）

### 完了したこと
- **相手側リポジトリ `tkouchiyama-coder/like-tiger-hp-copy` の改修を本番へ取り込み**
  - 経緯：相手（河内山社長サイドのcoder）は共有用 `shumpei1118/like-tiger-hp-copy` ではなく、**自分のアカウントに別の非公開リポジトリ** `tkouchiyama-coder/like-tiger-hp-copy` を作って作業していた
  - そこから shumpei1118 宛に **collaborator招待（write）** が届いていたので `gh api -X PATCH user/repository_invitations/<id>` で承認 → アクセス可能化
  - 一時リモート `theirs` を追加して fetch → `git merge theirs/main`（**衝突ゼロ**で統合）→ 一時リモート削除
  - 分岐点は `0b1658b`。当方の差分は `f98847a`（CLAUDE.md更新のみ＝コード無変更）だったため、3wayマージで **CLAUDE.md は当方の最新版を自動保持**
- **取り込んだ主な改修**：
  - 取引先・パートナー企業ロゴ **9社分の実画像**追加（`images/partner-chikuyokai/comgrast/denrai/elevator-com/g-line/kouwa/likelab/shd/wakana.*`）
  - **カレー畑の本物写真**に差し替え（31KB→511KB／`business.html` の活動風景で使用。index側の `activity-scenes` は相手が削除済み）
  - スマホ表示の全面最適化（768/480px・ナビ縦5タブ・らい太/コピーのサイズ調整）
  - 取扱いセクションの構成・文字サイズ調整、サービス一覧に項目追加（インフラ/SNS運用/PRキャスティング）
  - index/business/philosophy/countries の各種調整、`images/tiger-pattern.svg` 追加
- マージコミット `593ed8d` → `git push origin main` → `vercel deploy --prod --yes` で **本番反映済み**（partner-wakana等が本番HTMLに出ることを確認）

### 重要な設定・メモ
- **3系統目のリポジトリが判明**：相手は `tkouchiyama-coder/like-tiger-hp-copy`（相手所有・非公開・shumpei1118をwrite collaboratorに招待）で作業している。今後あちらの更新を取り込む時は、このリポを一時リモート追加→`git merge theirs/main` でOK
- 取り込み手順（再現用）：`git remote add theirs https://github.com/tkouchiyama-coder/like-tiger-hp-copy.git && git fetch theirs && git merge theirs/main`（衝突したらCLAUDE.mdは当方優先）→ push → `vercel deploy --prod --yes`
- ヘッドレスChromeのスクショは `vh` が窓高さになり巨大化するため、検証時は override CSSで `.intro-gate{display:none}` ＋ `min-height:0/height:auto` を当てて撮ると正しく見える

## 作業ログ（2026-06-27：独自ドメイン liketiger39.com を接続）

### 完了したこと
- **独自ドメイン `liketiger39.com` を本番サイト（Vercel）に接続・公開**
  - ドメインはエックスサーバーで登録・DNS管理（ネームサーバー ns1〜5.xserver.jp）。**ドメイン移管はせず、DNSレコードだけVercelに向けた**（最も安全な方式）
  - Vercel側：`vercel domains add liketiger39.com` ＋ `vercel domains add www.liketiger39.com`（リンク済みプロジェクト like-tiger-hp に単一引数で追加。「403 you don't have access」表示は外部所有ドメインなので正常）
  - エックスサーバー側（サーバーパネル→DNSレコード設定）で2レコードのみ変更：
    - `liketiger39.com` A：85.131.213.157 → **76.76.21.21**（Vercel apex用）
    - `www.liketiger39.com`：A → **CNAME `cname.vercel-dns.com`**（種別をA→CNAMEに変更）
  - **メールは無傷**：MX＝`ASPMX.L.GOOGLE.com`（＝会社メールはGoogle Workspace運用）、SPF/DKIM(TXT)、NS には一切触れていない。`*.liketiger39.com`(A) も変更せず残置
  - DNS反映は即時（ns1.xserver.jp/8.8.8.8とも新値）。VercelのSSL自動発行を待ち（約10数分）→ `https://liketiger39.com` HTTP/2 200・`server: Vercel`・http→https 308リダイレクトを確認。`www`も200
  - 公開確認：`<title>株式会社LikeTiger｜Sales is Journey…</title>` が独自ドメインで表示される

### 重要な設定・メモ
- **本番URLが2つに**：旧 https://like-tiger-hp.vercel.app/ ＋ 新 **https://liketiger39.com**（どちらも同じVercelプロジェクト like-tiger-hp を表示）。今後の再デプロイは従来どおり `vercel deploy --prod --yes` でOK（両URLに反映）
- エックスサーバーのログイン：Xserverアカウント（メール `t.liketiger@gmail.com`）。サーバーID xs744110 / スタンダード / sv16831。DNS編集は「サーバー管理（サーバーパネル）→ DNSレコード設定 → liketiger39.com 選択 → DNSレコード一覧」
- Vercelの標準DNS値（再設定時の参照）：apex は A `76.76.21.21`、サブドメインは CNAME `cname.vercel-dns.com`
- ⚠️ パスワード類はファイル/メモリに保存していない（チャット内のみ。利用後の変更を推奨済み）

### 任意の今後対応（必須ではない）
- www を apex へ301/308リダイレクト統一（現状は www も 200 で実体表示。SEO上の重複対策をするなら Vercel のドメイン設定で primary を liketiger39.com にしてリダイレクト化）
- （継続）お問い合わせフォームの送信機能（Formspree等→ t.kouchiyama@liketiger39.com）

## 作業ログ（2026-06-29：河内山さんの編集を自動で本番反映する仕組みを構築）

### 目的
- 「河内山さんが編集したら実際のHP（liketiger39.com）に自動で載る」状態にしたい、という要望に対応。**反映方式は「即・自動反映（ノーチェック）」をユーザーが選択**（承認制ではなく手間ゼロ優先）。

### 完了したこと
1. **河内山リポの未反映改修6件を本番へ統合**：`tkouchiyama-coder/like-tiger-hp-copy` を一時リモート追加→`git merge`（衝突ゼロ）→push。取り込んだ内容＝AIZAC（上段）/ハルク財団（下段）を取引先に追加・ロゴ化、取引先ロゴ9社をタップで各公式サイトへ遷移（リンク化）。`images/partner-aizac.png`・`images/partner-hulkzaidan.png` 追加。本番反映確認済み（curlで `partner-aizac` を確認）
2. **VercelとGitHubを自動連携（最重要）**：これまで連携【なし】＝手動 `vercel deploy` した時だけ本番更新、だったのを、`vercel git connect https://github.com/shumpei1118/like-tiger-hp.git --yes` で連携【あり】に。**本番ブランチ=main**。→ 今後は `shumpei1118/like-tiger-hp` の main にpushされると**約30秒で自動デプロイ→本番反映**（手動デプロイ不要に）
3. **河内山さん（GitHubユーザー名 tkouchiyama-coder）を本番リポ `shumpei1118/like-tiger-hp` にwrite権限で招待**：`gh api -X PUT repos/shumpei1118/like-tiger-hp/collaborators/tkouchiyama-coder -f permission=push`。**2026-06-29 河内山さんが招待を承認 → 編集者として有効化完了**（`gh api repos/shumpei1118/like-tiger-hp/invitations` が空＝承認済み、collaborators に `tkouchiyama-coder`=write で登録を確認）

### 仕組み（完成形）★2026-06-29 招待承認をもって全工程フル稼働
- 河内山さんが本番リポ `shumpei1118/like-tiger-hp` を編集（GitHub直接/Codex/clone どれでも）→ main にpush/マージ → **Vercelが自動でビルド＆本番公開** → liketiger39.com に反映。**舜平さんの手作業（取り込み・手動デプロイ）が不要に**
- 舜平さんは引き続きオーナー/admin（このMacフォルダが大元・全権限保持）。河内山さんはwrite（編集可・削除や設定変更は不可）

### 重要な設定・メモ
- **今後の編集先は本番リポ1本に集約**：河内山さんには「今後は `shumpei1118/like-tiger-hp` を編集してください」と案内（旧コピー `tkouchiyama-coder/like-tiger-hp-copy`・`shumpei1118/like-tiger-hp-copy` は卒業＝行き来の手動マージが不要に）
- 連携の取り消し方：`vercel git disconnect`（自動デプロイを止めたい時）／河内山さんの権限取り消し：GitHubのリポ Settings→Collaborators で削除
- 招待状況の確認：`gh api repos/shumpei1118/like-tiger-hp/invitations`（空＝承認済み）／編集者一覧：`gh api repos/shumpei1118/like-tiger-hp/collaborators`
- ⚠️ ノーチェックで本番に出る方式のため、河内山さんのミスもそのまま公開される（ユーザー了承済み）。承認制に切り替えたくなったらブランチ保護＋PR運用を追加で対応可

## 作業ログ（2026-07-05：本番反映が止まっていた原因の特定と復旧）

### 事象
- 河内山さん側から「GitHubは最新なのに本番（liketiger39.com）が古いまま」との連絡（スクショ2枚）
- 調査の結果、**Vercel⇔GitHub自動連携自体は正常に動作していた**が、6/30以降のデプロイが全件 **BLOCKED** になっていた

### 原因（重要）
- Vercelのブロック理由：`TEAM_ACCESS_REQUIRED`＝「Git author **t.kouchiyama@liketiger39.com** must have access to the team」
- **Vercel無料（Hobby）プランでは、Vercelチームのメンバーでない人がauthorのコミットは本番デプロイをブロックされる**仕様
- 河内山さんはGitHubリポにはwrite権限があるが、舜平さんのVercelにはメンバー登録できない（無料プランはメンバー追加不可）→ 河内山さん名義のコミット5件（c5d905e〜aa9ca3c）が全部ブロック
- CLIからの手動デプロイ（`vercel deploy --prod`）も「HEADコミットの作者＝河内山さん」だと同様にブロックされる

### 復旧方法（今回実施）
- 舜平さん名義のコミット（このCLAUDE.md更新）をpush → 「作者＝舜平さん（オーナー）」のデプロイが走り、河内山さんの修正も含む最新ツリーが本番反映される

### 恒久対応（決定）
- ユーザー決定：「**全ての権限を河内山さんへ渡す**」（毎回の取り込み対応が不要になるよう完全移管）
- 移管プラン：①GitHubリポ所有権を tkouchiyama-coder へ移転 ②河内山さん自身のVercelアカウントでリポを接続 ③ドメイン liketiger39.com を彼のVercelプロジェクトへ付け替え（Xserverは元々LikeTiger側アカウントのためDNS変更不要見込み）

## 元情報
- ヒヤリング内容：Googleドキュメント「ホームページ作成のためのヒアリングリスト」
  https://docs.google.com/document/d/1Vz5BjVnvkWMzCWkiZ2WgONMwuMAOxrCmEod93zx8DRQ/
- 制作プラン：`~/.claude/plans/hp-hp-claude-iterative-pelican.md`
