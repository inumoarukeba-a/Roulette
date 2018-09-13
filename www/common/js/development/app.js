'use strict';


/* Require
=========================================================== */

// Lodash
import _ from 'lodash';
// TweenMax
import {TweenMax} from 'gsap';



/* 共通変数
=========================================================== */

const doc = document,
      win = window;



/* 背景アニメーション
=========================================================== */

// var w       = win.innerWidth * win.devicePixelRatio,
//     h       = win.innerHeight * win.devicePixelRatio,
var w       = win.innerWidth * 2,
    h       = win.innerHeight * 2,
    canvas  = doc.getElementById('background'),
    ctx     = canvas.getContext('2d'),
    rate    = 60,
    arc     = 382,
    time,
    count,
    size    = 7,
    speed   = 10,
    parts   = new Array,
    colors  = ['#FFF','#f9cccc','#f39999'];

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0,0,w,h);
  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    // var distanceFactor = DistanceBetween( mouse, parts[i] );
    // var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle=li.c;
    if(i%2==0)
      ctx.stroke();
    else
      ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if(li.x > w){
       li.x = 0;
    }
    if(li.y > h) {
       li.y = 0;
    }
    if(li.x < 0) {
       li.x = w;
    }
    if(li.y < 0) {
       li.y = h;
    }
  }
  if(time < speed) {
    time++;
  }
  setTimeout(particles,1000/rate);
}
function DistanceBetween(p1,p2) {
   var dx = p2.x-p1.x;
   var dy = p2.y-p1.y;
   return Math.sqrt(dx*dx + dy*dy);
}
create();
particles();



/* ルーレット
=========================================================== */

/* Variables
───────────────────────── */
const $ROULETTE     = doc.getElementById('roulette'),
      $TRIGGER      = doc.getElementById('trigger'),
      $PLACEHOLDER  = doc.getElementById('placeholder'),
      $DRUM_REPEAT  = doc.getElementById('drum-repeat'),
      $DRUM_END     = doc.getElementById('drum-end'),
      $HEADER_TITLE = doc.getElementById('header__title'),
      $HEADER_LOGO  = doc.getElementById('header__logo'),
      $ATARU        = doc.getElementById('ataru'),
      $ATARU_WRAPPER= doc.getElementById('ataru__wrapper'),
      DELAY         = 1.618,
      DUMMY         = [
        '家庭ではどんなディレクターでしょうか？',
        '今だから話せる失敗談を教えてください。',
        '画面構成を作るとき、どんなポイントを意識されていますか？',
        'わかりやすい文章やメールのコツとかありますか',
        'ディレクターになって、最初に当たった壁はなんでしたか？',
        '通勤時間って何をしていますか？',
        '今後やってみたい案件・プロジェクトはありますか？',
      ],
      DUMMY_LENGTH  = DUMMY.length;

let   $theme        = doc.getElementById('theme01'),
      interval      = -1,
      first_flag    = false,
      roulette_flag = false,
      roulette_length,
      random,
      $active_theme,

      start_audio   = new Audio(),
      end_audio     = new Audio(),
      num,
      source;


/* Triggers
───────────────────────── */
$TRIGGER.addEventListener('click', function(e) {
  ROULETTE();
});

win.addEventListener('keydown', function(e) {
  const KEYCODE = event.keyCode;
  if(roulette_flag === false) {
    // F7
    if(KEYCODE == 118){
      $theme = doc.getElementById('theme01');
      $ROULETTE.classList.remove('-theme02','-theme03');
      $ROULETTE.classList.add('-theme01');
    }
    // F8
    if (KEYCODE == 119) {
      $theme = doc.getElementById('theme02');
      $ROULETTE.classList.remove('-theme01','-theme03');
      $ROULETTE.classList.add('-theme02');
    }
    // F9
    if (KEYCODE == 120) {
      $theme = doc.getElementById('theme03');
      $ROULETTE.classList.remove('-theme01','-theme02');
      $ROULETTE.classList.add('-theme03');
    }
  }
  // Space
  if (KEYCODE == 32) {
    ROULETTE();
  }
});


/* Functions
───────────────────────── */
const ROULETTE = function (e) {
  $PLACEHOLDER.classList.remove('-active');
  if(roulette_flag === false) {
    START_AUDIO();
    START_ANIMATION();
    START_ROULETTE();
    START_BUTTON();
  } else {
    STOP_AUDIO();
    STOP_ANIMATION();
    STOP_ROULETTE();
    STOP_BUTTON();
  }
}

// オーディオ
const START_AUDIO = function(e) {
  // オーディオストップ
  end_audio.pause();
  end_audio.currentTime = 0;
  // ランダム & 確率判定
  num    = Math.floor( Math.random() * 100 );
  source = '/common/audio/drum-repeat.mp3';
	if (num <= 24) source = '/common/audio/miyazaki-repeat02.mp3';
	if (num <= 18) source = '/common/audio/miyazaki-repeat.mp3';
	if (num <= 12) source = '/common/audio/ashida-repeat02.mp3';
	if (num <= 6)  source = '/common/audio/ashida-repeat.mp3';
  // 再生
  start_audio.src = source;
  start_audio.loop = true;
  start_audio.play();
}

const STOP_AUDIO = function(e) {
  // オーディオストップ
  start_audio.pause();
  start_audio.currentTime = 0;
  // ランダム & 確率判定
  source = '/common/audio/drum-end.mp3';
	if (num <= 24) source = '/common/audio/miyazaki-end.mp3';
	if (num <= 12) source = '/common/audio/ashida-end.mp3';
  // 再生
  end_audio.src = source;
  end_audio.play();
}

// アニメーション
const START_ANIMATION = function (e) {
  const TL = new TimelineMax();
  if(first_flag === false) {
    first_flag = true;
    TL
    .add('first')
    .to($HEADER_TITLE, DELAY/3, {
      y       : '-90%',
      scale   : .382,
      ease    : Power3.easeOut,
    }, 'first')
    .to($ATARU, DELAY/1.618, {
      x       : 0,
      ease    : Power1.easeOut,
    }, 'first')
    .to($HEADER_LOGO, DELAY/1.618, {
      x       : 0,
      ease    : Power1.easeIn,
    }, 'first+=1')
    .to($HEADER_LOGO, DELAY/3.82, {
      textShadow: '0 0 2.5px #fff, 0 0 4px #fff, 0 0 10px #f3003d, 0 0 17.5px #f3003d, 0 0 20px #f3003d',
      ease    : Power1.easeIn,
    })
    .add('logo-in')
    .to($ROULETTE, DELAY, {
      y       : 0,
      ease    : Bounce.easeOut,
    }, 'logo-in+=1.5')
    .add('roulette-in')
    .set($HEADER_LOGO, {
      autoAlpha: 0,
    }, 'roulette-in')
    .to($ATARU_WRAPPER, DELAY/3.82, {
      scale   : .08,
      ease    : Power1.easeOut,
    }, 'roulette-in-=.5')
    .add('scale-out')
    .set($ATARU, {
      position: 'absolute',
      y       : '-90%',
      width   : '100%',
    }, 'scale-out+=.1')
    .set($ATARU_WRAPPER, {
      height    : 2000,
      width     : '100%',
      transformOrigin: 'center bottom',
    }, 'scale-out+=.1')
    .add('set-stage')
    .to($ATARU, DELAY/5, {
      y       : '-100%',
      ease    : Power1.easeOut,
    }, 'set-stage+=.2');
  } else {
    TL
    .to($ROULETTE, DELAY/5, {
      scale   : 1,
      ease    : Power1.easeOut,
    })
    .to($ATARU, DELAY/3, {
      y       : '-100%',
      ease    : Power1.easeOut,
      onComplete: function(){
        $ATARU.classList.remove('-stop');
      }
    });
  }
}

const STOP_ANIMATION = function (e) {
  $ATARU.classList.add('-stop');
  const TL = new TimelineMax();
  TL
  .to($ROULETTE , .1618, {
    scale     : 1.1382,
    ease      : Power1.easeOut,
  })
  .to($ATARU, DELAY/1.618, {
    y       : '-90%',
    ease    : Power1.easeOut,
  });
}

// ルーレット
const START_ROULETTE = function (e) {
  // 前のテーマを削除
  if ($active_theme !== undefined) {
    $active_theme.remove();
  }
  // テーマ数を取得
  roulette_length = $theme.childElementCount;
  // ダミー要素を追加
  for( let i = 0;  i < DUMMY_LENGTH; i++ ){
    const $LI   = doc.createElement('li');
    const TEXT  = doc.createTextNode(DUMMY[i]);
    $LI.className = '-dummy';
    $theme.appendChild($LI);
    $LI.appendChild(TEXT);
  }
  // フラグを設定
  roulette_flag = true;
  // ルーレット
  interval = setInterval(function() {
    // アクティブなテーマをリセット
    Array.prototype.forEach.call($theme.children, function(e, index) {
      e.classList.remove('-active');
    });
    // ランダムで表示
    random = Math.floor( Math.random() * ( roulette_length + DUMMY_LENGTH ) );
    $active_theme = $theme.children[random];
    $active_theme.classList.add('-active');
  }, 80);
}

const STOP_ROULETTE = function (e) {
  // インターバルをクリア
  clearTimeout(interval);
  // フラグを設定
  roulette_flag = false;
  // ダミーを削除
  let $DUMMY_ELEMENTS = document.getElementsByClassName('-dummy');
  for ( let i = 0; i < DUMMY_LENGTH; i++ ) {
    $DUMMY_ELEMENTS[0].remove();
  };
  // 一度テーマをリセット（ダミーの関係上）
  $active_theme.classList.remove('-active');
  // ランダム表示
  random = Math.floor( Math.random() * roulette_length );
  $active_theme = $theme.children[random];
  $active_theme.classList.add('-active');
}

// ボタン
const START_BUTTON = function (e) {
  $TRIGGER.innerHTML = 'STOP';
  $TRIGGER.classList.add('-stop');
}

const STOP_BUTTON = function (e) {
  $TRIGGER.classList.remove('-stop');
  $TRIGGER.innerHTML = 'START';
}



/* トリガー
=========================================================== */
// DOM構築後
doc.addEventListener('DOMContentLoaded', function(e) {
}, false);

// ロード後
win.addEventListener('load', function(e) {
}, false);

// リサイズ
win.addEventListener('resize', _.debounce(function(e) {
}, 250));

// スクロール
win.addEventListener('scroll', _.throttle(function(e) {
}, 250, { trailing: false, leading: true }));
