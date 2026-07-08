/* ============================================================
   TRAVEL LOG ─ 国をタップすると旅行記モーダルを開く
   ============================================================

   ▼ 旅行記の追加方法（ここだけ編集すればOK）
   下の TRAVEL_LOG に、国ごとに 1 ブロック足すだけです。
   キー（"韓国" など）は countries.html のチップ名と“完全一致”させてください。

     "国名": {
       author: "河内山",              // 書いた人（河内山 / けんと など）
       story:  "旅の思い出・エピソード", // 本文
       spots:  ["明洞", "景福宮"],      // おすすめスポット（何個でもOK）
       food:   ["サムギョプサル"],       // 食べておきたい（何個でもOK）
       tip:    "営業マンからの一言"       // ひとことコメント
     },

   まだ中身を入れていない国は、自動で「準備中」モーダルになります。
   author / story / spots / food / tip は、無い項目を省略してもOKです。
============================================================ */

(function () {
  'use strict';

  // ★ story と tip は下書きです。公開前にご自身の言葉に直してください。
  // ★ author は暫定で「河内山」。けんとが滞在した国はここを "けんと" に変えてください。
  var TRAVEL_LOG = {

    "韓国": {
      author: "河内山",
      story:  "近くて濃い、何度でも通いたくなる街。屋台の湯気と人の熱量に毎回元気をもらいます。",
      spots:  ["明洞", "景福宮", "南大門市場"],
      food:   ["サムギョプサル", "参鶏湯", "トッポギ"],
      tip:    "移動は地下鉄が最強。夜の屋台は、値段交渉から会話が生まれる。"
    },

    "台湾": {
      author: "河内山",
      story:  "人があたたかくて、ごはんが安くて旨い。夜市を歩くだけで一日が満たされます。",
      spots:  ["九份", "台北101", "龍山寺"],
      food:   ["小籠包", "魯肉飯", "マンゴーかき氷"],
      tip:    "初日は夜市で街の空気に慣れるのがおすすめ。悠遊カード1枚で移動がラクになる。"
    },

    "タイ": {
      author: "河内山",
      story:  "微笑みの国は本当だった。寺院の荘厳さと屋台のカオスが同居する不思議な魅力。",
      spots:  ["ワット・ポー", "水上マーケット", "カオサン通り"],
      food:   ["ガパオライス", "トムヤムクン", "カオニャオ・マムアン"],
      tip:    "暑さ対策は必須。トゥクトゥクは乗る前に必ず値段を決めてから。"
    },

    "ベトナム": {
      author: "河内山",
      story:  "バイクの奔流と路地の活気。勢いのある国のエネルギーを肌で感じました。",
      spots:  ["ハノイ旧市街", "ハロン湾", "ホイアン"],
      food:   ["フォー", "バインミー", "ベトナムコーヒー"],
      tip:    "道路の横断はためらわず一定速度で。カフェで飲むエッグコーヒーは必飲。"
    },

    "シンガポール": {
      author: "河内山",
      story:  "清潔で先進的、多民族が混ざり合う都市。ビジネスの熱量が街全体にありました。",
      spots:  ["マリーナベイ・サンズ", "ガーデンズ・バイ・ザ・ベイ", "マーライオン公園"],
      food:   ["海南鶏飯（チキンライス）", "チリクラブ", "ラクサ"],
      tip:    "屋台街「ホーカーズ」が一番のごちそう。夜のライトショーは無料で必見。"
    },

    "アメリカ": {
      author: "河内山",
      story:  "スケールが桁違い。挑戦する人を後押しする空気に、いつも刺激を受けます。",
      spots:  ["タイムズスクエア", "セントラルパーク", "自由の女神"],
      food:   ["ステーキ", "NYスタイル・ピザ", "ハンバーガー"],
      tip:    "チップ文化を忘れずに。都市間の移動は国内線を早めに押さえるのが吉。"
    },

    "フランス": {
      author: "河内山",
      story:  "街そのものが美術館。歴史と美意識が日常に溶け込んでいる国でした。",
      spots:  ["エッフェル塔", "ルーヴル美術館", "モン・サン・ミッシェル"],
      food:   ["クロワッサン", "エスカルゴ", "ワイン"],
      tip:    "まずは「ボンジュール」から。美術館は事前予約で行列を回避できる。"
    },

    "イタリア": {
      author: "河内山",
      story:  "食・芸術・人情、すべてが陽気で豊か。人生を楽しむ達人たちの国です。",
      spots:  ["コロッセオ", "ヴェネツィア", "ドゥオモ（フィレンツェ）"],
      food:   ["パスタ", "ピッツァ", "ジェラート"],
      tip:    "エスプレッソは立ち飲みが粋。地方ごとに名物が変わるので食べ歩きが楽しい。"
    },

    "オーストラリア": {
      author: "河内山",
      story:  "自然と都市のバランスが絶妙。おおらかな人柄に、肩の力が抜けました。",
      spots:  ["オペラハウス", "グレートバリアリーフ", "ボンダイビーチ"],
      food:   ["ミートパイ", "フラットホワイト", "バラマンディ"],
      tip:    "日差しが強いので日焼け止めは必携。カフェ文化が根付いていて一杯が旨い。"
    },

    "アラブ首長国連邦": {
      author: "河内山",
      story:  "砂漠の中に未来都市。スケールの大きさと成長スピードに圧倒されました。",
      spots:  ["ブルジュ・ハリファ", "ドバイモール", "砂漠サファリ"],
      food:   ["シャワルマ", "フムス", "アラビックコーヒー"],
      tip:    "服装マナーに配慮を。昼は暑いので観光は朝夕、日中は屋内施設が快適。"
    }

  };

  var modal = document.getElementById('tlModal');
  if (!modal) return;

  var elFlag       = document.getElementById('tlModalFlag');
  var elAuthor     = document.getElementById('tlModalAuthor');
  var elTitle      = document.getElementById('tlModalTitle');
  var elStory      = document.getElementById('tlModalStory');
  var elSpotsBlock = document.getElementById('tlModalSpotsBlock');
  var elSpots      = document.getElementById('tlModalSpots');
  var elFoodBlock  = document.getElementById('tlModalFoodBlock');
  var elFood       = document.getElementById('tlModalFood');
  var elTipBlock   = document.getElementById('tlModalTipBlock');
  var elTip        = document.getElementById('tlModalTip');

  var lastFocused = null;

  function fillList(ul, items) {
    ul.innerHTML = '';
    items.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  }

  function show(el, on) {
    el.style.display = on ? '' : 'none';
  }

  function openModal(name, flag) {
    var data = TRAVEL_LOG[name];

    elFlag.textContent = flag || '\uD83C\uDF0F'; // 🌏
    elTitle.textContent = name;

    if (data) {
      elAuthor.textContent = data.author ? data.author + ' の旅日記' : '';

      elStory.textContent = data.story || '';
      show(elStory, !!data.story);

      var hasSpots = data.spots && data.spots.length;
      if (hasSpots) fillList(elSpots, data.spots);
      show(elSpotsBlock, hasSpots);

      var hasFood = data.food && data.food.length;
      if (hasFood) fillList(elFood, data.food);
      show(elFoodBlock, hasFood);

      if (data.tip) elTip.textContent = data.tip;
      show(elTipBlock, !!data.tip);
    } else {
      // 中身がまだ無い国 → 準備中
      elAuthor.textContent = '';
      elStory.textContent = 'この国の旅行記は準備中です。近日公開予定！';
      show(elStory, true);
      show(elSpotsBlock, false);
      show(elFoodBlock, false);
      show(elTipBlock, false);
    }

    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    var closeBtn = modal.querySelector('.tl-modal__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  // すべての国チップにクリック / キーボード操作を付与
  var chips = document.querySelectorAll('.tl-chip');
  chips.forEach(function (chip) {
    var last = chip.lastChild;
    var name = (last ? last.textContent : chip.textContent).trim();
    var flagEl = chip.querySelector('.tl-chip__flag');
    var flag = flagEl ? flagEl.textContent.trim() : '';

    chip.setAttribute('role', 'button');
    chip.setAttribute('tabindex', '0');
    chip.setAttribute('aria-label', name + ' の旅行記を見る');

    chip.addEventListener('click', function () { openModal(name, flag); });
    chip.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(name, flag);
      }
    });
  });

  // 閉じる（×ボタン・オーバーレイ）
  modal.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  // Escで閉じる
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
