// できなかったやつ↓
// document.querySelector('.more-button').addEventListener('click', function() {
//     const content = document.querySelector('.accordion-content1');
//     if (content.style.display === 'none' || content.style.display === '') {
//       content.style.display = 'flex';  // 開くときに 'flex' を適用
//     } else {
//       content.style.display = 'none';  // 閉じるときは 'none'
//     }
//   });
  
// できなかったやつ2↓
// document.querySelector('.more-button').addEventListener('click', function() {
//   const content = document.querySelector('.accordion-content1');
//   const computedStyle = window.getComputedStyle(content); // 実際のスタイルを取得

//   if (computedStyle.display === 'none') {
//     content.style.display = 'flex';  // 開くときに 'flex' を適用
//   } else {
//     content.style.display = 'none';  // 閉じるときは 'none'
//   }
//   this.classList.toggle('active');
// });

// できなかったやつ3
// document.addEventListener('DOMContentLoaded', function() { 
//   // ページ読み込み後にJavaScriptを実行する
//   const button = document.querySelector('.more-button');
//   const content = document.querySelector('.accordion-content1');

//   // 初期状態でアコーディオンは閉じたまま (CSSでdisplay: noneを適用済み)

//   button.addEventListener('click', function() {
//     if (content.style.display === 'none' || content.style.display === '') {
//       content.style.display = 'flex';  // 開くときに 'flex' を適用
//     } else {
//       content.style.display = 'none';  // 閉じるときは 'none'
//     }
//        })})



document.addEventListener('DOMContentLoaded', function() { // ページが読み込まれたときに実行
  const content = document.querySelector('.accordion-content1');
  const button = document.querySelector('.more-button');
  
  // 初期状態を明示的に非表示に設定
  content.style.display = 'none';

  // ボタンのクリックイベント
  button.addEventListener('click', function() {
    if (content.style.display === 'none') {
      content.style.display = 'flex';  // 開く
    } else {
      content.style.display = 'none';  // 閉じる
    }
  });
});


