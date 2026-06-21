// ============================================================
// 株式会社LikeTiger ホームページ用スクリプト
// ① スクロールで要素がふわっと現れる
// ② images/ に写真を置くと自動で仮置きエリアに表示される
// ③ お問い合わせフォーム（今は見た目のみ・お礼メッセージ表示）
// ============================================================

// ① スクロールアニメーション
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ② 写真の自動読み込み
// 「data-photo」に指定されたファイルが images/ フォルダにあれば表示する。
// ファイルが無い間はグレーの仮置き表示のまま。
document.querySelectorAll("[data-photo]").forEach((el) => {
  const src = el.getAttribute("data-photo");
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.classList.add("has-photo");
  };
  img.src = src;
});

// ③ お問い合わせフォーム（送信機能は後工程で追加予定）
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-thanks").hidden = false;
    form.querySelector(".contact-form__submit").disabled = true;
    form.querySelector(".contact-form__submit").textContent = "送信しました ✓";
  });
}
