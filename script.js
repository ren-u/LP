$(function(){
  var pagetop = $('#page-top');  //page-topというidを格納する
  pagetop.hide();  //ページが読み込まれた直後にpage-topの要素を非表示にする。
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {  //スクロール位置を取得
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);  //500msでアニメーションを実行する
     return false;
  });
});
