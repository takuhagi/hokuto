
$('.navi_open').on('click',function(){ //"hamburger_menu"をクリックしたら、
  $('.nav').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
  $('.nav_close').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
  $('body').toggleClass('noscroll') //bodyに対して"noscroll"というclassをつけたり外したりする
});

$('.navi_close').on('click',function(){ //"hamburger_menu"をクリックしたら、
  $('.nav').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
  $('.nav_close').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
  $('body').toggleClass('noscroll') //bodyに対して"noscroll"というclassをつけたり外したりする
});
