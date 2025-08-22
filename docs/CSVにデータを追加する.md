# tl;tr

CMS にデータを挿入する際に，CSV を利用する場合の注意点を学べます．

# CSV の利用

## なにをするものなのか．

本サイトのメンバー・論文・ニュースのデータは全て CMS 上に保存されています．
CMS 上にデータを入力する方法は，2 つあります．

1. CMS のアプリ上でデータを入力する
2. CSV にデータを入力して，それを CMS 上でインポートする

少量のデータであれば 1 を推奨しますが，10 件を超える場合は CSV で書いた方が動作が早くなります．
ここでは，CSV の書き方，注意点を述べます．

## 書き方

まず，`data/`以下を見てください．
ここには，2025 年 8 月 22 日時点での論文・メンバー・ニュースのデータを CSV 形式で保存しています．それぞれのラベルは,で区切るようにしてください．

### member

メンバーは，`{ID},{year},{name},{post}`のラベルの順で記述します．
`{ID}`は空欄にしてください．
`{year}`は 4 文字の半角数字で入力してください．
`{name}`には，「名前（ローマ字名前）」で入力してください．(例：森 健策（Kensaku MORI)）
`{post}`には，CMS 上のカラムにある post を入力するようにしてください．

### publications

投稿論文は，`{ID}, {year}, {genre}, {publications}`のラベルの順で記述します．
`{ID}`は空欄にしてください．
`{year}`は 4 文字の半角数字で入力してください．
`{genre}`には論文のジャンルを入力してください．CMS 上のカラムにある名前にしてください．(例：学術論文-Journal)
`{publications}`には，論文リストを入力します．まず，リスト全体は"で囲んでください．次に，論文はそれぞれ`<p><p/>`で囲んでください（p タグといいます）文中には，' "という文字を使用しないでください．バグが発生します．
（例：`` ,2025,学術論文-Journal,"<p>[25-J009] Rintaro Miyazaki, Yuichiro Hayashi, Masahiro Oda, Kensaku Mori, `GPU-accelerated deformation mapping in hybrid organ models for real-time simulation,` International Journal of Computer Assisted Radiology and Surgery, (First online 07 July 2025) doi:10.1007/s11548-025-03377-2</p>" ``）

### news

最新ニュースは，`{ID}, {date}, {title}`のラベルの順で記述します．
`{ID}`は空欄にしてください．
`{date}`には日時を入力します．記法には注意してください．（例：025-08-01T07:24:40.916Z）
`{title}`には，表示したいニュースのタイトルを入力してください．20 文字以内にしてください．（例：研究室サイトがリニューアルしました！）
