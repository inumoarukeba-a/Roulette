<?php
  //共通
  require_once substr($_SERVER['SCRIPT_FILENAME'], 0, -strlen($_SERVER['SCRIPT_NAME'])).'/common/includes/init.php';

  //メタディスクリプション
  $description = '';

  //メタキーワード
  $keywords = '';

  //Facebook　全ページ共通の場合は空白にしてください
  $fbimage = '';

  //タイトル
  $title = 'しっぽり語り合う会（ディレクター編）';

  //css追加
  $ex_tag_css = '';

  //js追加
  $ex_tag_js = '';

?>
<?php include 'header.php'; ?>


  <main class="main">
    <header id="header" class="header">
      <h1 class="header__logo">
        <?php include 'logo.php'; ?>
      </h1>
      <div id="header__playful" class="header__playful">
        <div class="header__ataru">
        </div>
        <div class="header__stage">
          <?php include 'stage.php'; ?>
        </div>
      </div>
    </header>
    <section id="roulette" class="roulette">
      <div class="roulette__wrapper">
        <h2 class="roulette__heading">
          トークテーマ
        </h2>
        <div class="roulette__theme">
          <p id="placeholder" class="roulette__placeholder -active">
            ここにトークテーマが表示されます。
          </p>
          <ul id="theme01" class="roulette__list">
            <li>
              仕事専用の携帯電話欲しいですか？
            </li>
            <li>
              他の職種に短期留学したいですか？<br>
              どの職種？
            </li>
            <li>
              家庭ではどんなディレクターでしょうか？
            </li>
            <li>
              プロジェクト進行中に飛び出した<br>
              名言<span class="-small">（マジなやつ）</span>を教えてください。
            </li>
            <li>
              案件進行中の悩みは<br>
              誰に相談したり聞いてもらっていますか？
            </li>
            <li>
              通勤時間って何をしていますか？
            </li>
            <li>
              仕事のやり方や姿勢で<br>
              尊敬している有名人はいますか？
            </li>
            <li>
              自由にイメチェンできるなら、<br>
              何をどんなふうに変えてみたいですか？<br>
              <span class="-small">（ヘアスタイル、メガネ、ひげ、ファッションなど）</span>
            </li>
          </ul>
          <ul id="theme02" class="roulette__list">
            <li>
              これまでの案件で、<br>
              もっとも印象深いものはなんですか？<br>
              その理由をエピソードを交えて教えてください。
            </li>
            <li>
              今だから話せる失敗談を教えてください。
            </li>
            <li>
              今後やってみたい案件・プロジェクトはありますか？
            </li>
            <li>
              ディレクションする際に<br>
              心がけていることはなんですか？<br>
              <span class="-small">（クライアント／チームメンバー／ユーザーなどに対して）</span>
            </li>
          </ul>
          <ul id="theme03" class="roulette__list">
            <li>
              今までで、この案件は特殊だった<span class="-small">（変わっていた）</span><br>
              というものはありますか？
            </li>
            <li>
              ディレクターになって、<br>
              最初に当たった壁はなんでしたか？
            </li>
            <li>
              色んなタイプのクライアントさんがいると思いますが、<br>
              クライアントさんによって対応を変えたりするのですか？<br>
              <span class="-small">（たとえば「このクライアントさんはフランクな対応が良さそう」など）</span>
            </li>
            <li>
              顧客との交渉<span class="-small">（予算や納期など）</span>をする上で、<br>
              こちらの要件を通してもらえるように<br>
              行なっていることはありますか？
            </li>
            <li>
              こちらの提案が1度で通らず、<br>
              クライアントの要望通りに進みそうな時は<br>
              どうしていますか？
            </li>
            <li>
              CBがやたら多いクライアントはどうしていますか？
            </li>
            <li>
              お客さんと気持ちよく仕事を進めていくために<br>
              工夫していることはありますか？？
            </li>
            <li>
              新規のクライアントさんとの打ち合わせで、<br>
              「最低限聞いておく◎箇条」的なものってありますか？
            </li>
            <li>
              初めてのクライアントに会うときに<br>
              何か意識していることはありますか？
            </li>
            <li>
              Webディレクターとして今後のキャリアパス
            </li>
            <li>
              コーディングを社内 or 社外で行う際の<br>
              それぞれのメリット・デメリットはなんですか？
            </li>
            <li>
              クライアントとのやりとりで、<br>
              フロントが直接やりとりした方が<br>
              いいケースってありますか？
            </li>
            <li>
              社内確認のデザインは<br>
              どれくらいの本気度で作られていると嬉しいですか？<br>
              また、社内提出の何日前にあると嬉しいですか？
            </li>
            <li>
              自分でコピーや原稿を書く機会は<br>
              どれくらいありますか？<br>
              抵抗なく書けますか？
            </li>
            <li>
              自分で取材やインタビューを<br>
              したこと<span class="-small">（したいと思ったこと）</span>はありますか？
            </li>
            <li>
              コピーや文章関係以外で、<br>
              ライターが関わったことで<br>
              助かったケースってありますか？
            </li>
            <li>
              ライターの使い方、<br>
              実はまだちょっとわからない……<br>
              とか思っています？
            </li>
            <li>
              どういうデザイナー・クライアントと<br>
              仕事をしたいですか？
            </li>
            <li>
              周りのモチベーションをあげるために<br>
              工夫されていることはありますか
            </li>
            <li>
              直接声かけて相談 or Backlogの<br>
              使い分けってされてますか？
            </li>
            <li>
              超些細なことですがBacklogで<br>
              「作業しました」報告がきたとき、<br>
              「ありがとうございました」のみの<br>
              コメントって残しますか？<br>
              <span class="-small">
                （残した方が雰囲気は良いと思うし私はやっているけど、<br>
                他のみなさんどうなのかな〜と少し気になりました）
              </span>
            </li>
            <li>
              「あの人のこれ、密かに取り入れてます」<br>
              というものはありますか？
            </li>
            <li>
              ディレクターの醍醐味って何ですか？
            </li>
            <li>
              あなたにとって<br>
              プロフェッショナル<span class="-small">(なディレクター)</span>とは。
            </li>
            <li>
              何故Webディレクターになったのか
            </li>
            <li>
              目標や参考にしていたり<br>
              ライバル意識している人<span class="-small">（同業者）</span>はいますか？
            </li>
            <li>
              見積もりを作る上で<br>
              特に注意していることはありますか？
            </li>
            <li>
              複数の案件を同時並行で<br>
              捌いていらっしゃると思いますが、<br>
              どのようにタスク管理されていますか？
            </li>
            <li>
              わかりやすい文章やメールのコツとかありますか
            </li>
            <li>
              公開前など、<span class="-small">（特に複数案件で公開日が重なってくると）</span><br>
              私は神経がピリッとしてくるのですが、<br>
              そういう時の気持ちのオン・オフみたいな<br>
              切り替えってどうされていますか？
            </li>
            <li>
              普段引き出し増やすためのインプットなど、<br>
              ディレクターさんはどんなことをされていますか？
            </li>
            <li>
              優先順位の付け方、どうしてますか？<br>
              <span class="-small">
                （今日絶対〆切の作業をしているときに至急案件が入ってきたら、<br>
                どのタイミングで至急案件を作業する？）
              </span>
            </li>
            <li>
              予算を提出する際に工数がどれくらいかかるか<br>
              確認されるのですが、判断基準がいつも難しいです。<br>
              なにかベースになるものや<br>
              基準的なものってあるのでしょうか？
            </li>
            <li>
              工数を大幅にオーバーしている案件に関しては<br>
              どこまで修正や要望を対応したほうがよいでしょうか？
            </li>
            <li>
              画面構成を作るとき、<br>
              どんなポイントを意識されていますか？
            </li>
            <li>
              会議で意識していることはありますか？<br>
              <span class="-small">（できる限り30分以内に収めようとしているなど）</span>
            </li>
          </ul>
        </div>
        <aside class="roulette__shadow"></aside>
      </div>
    </section>
    <button id="trigger">
      START
    </button>
  </main>

  <aside>
    <canvas id="background"></canvas>
  </aside>


<?php include 'footer.php'; ?>
