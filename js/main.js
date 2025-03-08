// ヘッダー　電話番号タブ-------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const phoneNumberElement = document.querySelector('.phone-number');
    const phoneLink = document.getElementById('phone-link');
    
    // 電話番号のマッピング
    const phoneNumbers = {
      'mainHospital': '000-0000-0000',
      'largeHospital': '111-1111-1111',
      'branchHospital': '222-2222-2222'
    };
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // タブのアクティブ状態を切り替え
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // 選択されたタブに応じて電話番号を変更
        const tabType = this.getAttribute('data-tab');
        const phoneNumber = phoneNumbers[tabType];
        
        // 電話番号テキストを更新
        phoneNumberElement.textContent = phoneNumber;
        
        // 電話リンクのhref属性も更新
        phoneLink.setAttribute('href', 'tel:' + phoneNumber);
      });
    });
  });



// FV スライダー-------------------------------------
const swiper = new Swiper(".fv-swiper", {
    centeredSlides: true, // 1枚目のスライドを中央にする
    loop: true, // ループさせる
    speed: 500, // 少しゆっくり(デフォルトは300)
    spaceBetween: function() {
      return window.innerWidth <= 767 ? '-7%' : '-6%'; // 767px以下の場合は-10%、それ以上は-6%
    }(), // スライド間の間隔を設定（画面幅によって分岐）
    breakpoints: {
      // 767px以下の場合
      0: {
        slidesPerView: 1.3, // 767px以下では1.1枚表示
      },
      // 768px以上の場合
      768: {
        slidesPerView: 1.92, // 768px以上では2.1枚表示
      }
    },
    autoplay: { // 自動再生
      delay: 8000, // 3秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination01",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next01",
      prevEl: ".swiper-button-prev01",
    },
  });


  // マンスリープライススライダー-------------------------------------
  const mySwiper = new Swiper('.manthly-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: function() {
      return window.innerWidth <= 767 ? 36 : 15;
    }(),
    breakpoints: {
      // 768px未満の場合
      0: {
        slidesPerView: 1.22,
      },
      // 768px以上の場合
      768: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const menuSwiper = new Swiper('.menu-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 13,
    breakpoints: {
      // 768px未満の場合
      0: {
        slidesPerView: 1.28,
      },
      // 768px以上の場合
      768: {
        slidesPerView: 4,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });



  // 施術一覧スライダー-------------------------------------
  const facilitySwiper = new Swiper('.facility__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: function() {
      return window.innerWidth <= 767 ? 16 : 32;
    }(),
    breakpoints: {
      // 768px未満の場合
      0: {
        slidesPerView: 1.38,
      },
      // 768px以上の場合
      768: {
        slidesPerView: 2.5,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  // ハンバーガーメニュー-------------------------------------

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-sp');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});


