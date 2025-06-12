// GSAPプラグインの登録
gsap.registerPlugin(ScrollTrigger);

// ナビゲーションのスクロール効果
let lastScroll = 0;
const nav = document.querySelector('.nav-minimal');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// モバイルメニュートグル
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// モバイルメニューリンククリック時にメニューを閉じる
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        navBurger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// GSAPアニメーション

// ヒーローセクションのアニメーション
gsap.from('.hero-title .title-line', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.from('.btn-primary', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
});

gsap.from('.scroll-indicator', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    ease: 'power3.out'
});

// パララックス効果
gsap.to('.shape-1', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.shape-2', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.shape-3', {
    yPercent: -10,
    xPercent: 10,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// フィロソフィーセクションのアニメーション
gsap.from('.philosophy-content > *', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.philosophy',
        start: 'top 80%'
    }
});

// フローティングカードのアニメーション
gsap.from('.floating-card', {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.philosophy-visual',
        start: 'top 80%'
    }
});

// サービスカードのアニメーション
gsap.from('.service-card', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
    }
});

// アイコンパスのアニメーション
const iconPaths = document.querySelectorAll('.icon-path');
iconPaths.forEach(path => {
    gsap.fromTo(path,
        {
            strokeDashoffset: 100
        },
        {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: path,
                start: 'top 90%'
            }
        }
    );
});

// インサイトカードのアニメーション
gsap.from('.insight-card', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.insights-grid',
        start: 'top 80%'
    }
});

// コンタクトセクションのアニメーション
gsap.from('.contact-info > *', {
    x: -60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
    }
});

gsap.from('.contact-form', {
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
    }
});

// コンタクトシェイプのパララックス
gsap.to('.contact-shape.shape-1', {
    yPercent: -20,
    xPercent: -10,
    ease: 'none',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.contact-shape.shape-2', {
    yPercent: 20,
    xPercent: 10,
    ease: 'none',
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    }
});

// フォーム送信処理
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // フォームデータの取得
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };
    
    // 送信ボタンのアニメーション
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>送信中...</span>';
    submitBtn.disabled = true;
    
    // 送信シミュレーション
    setTimeout(() => {
        submitBtn.innerHTML = '<span>送信完了！</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
        
        // フォームをリセット
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalContent;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
});

// ページロードアニメーション
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// スクロールによるナビゲーションリンクのアクティブ化
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// サービスカードのホバーエフェクト
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const icon = card.querySelector('.service-icon svg');
        gsap.to(icon, {
            rotation: 360,
            duration: 0.8,
            ease: 'power2.inOut'
        });
    });
    
    card.addEventListener('mouseleave', (e) => {
        const icon = card.querySelector('.service-icon svg');
        gsap.to(icon, {
            rotation: 0,
            duration: 0.8,
            ease: 'power2.inOut'
        });
    });
});

// インサイトカードのホバーエフェクト
const insightCards = document.querySelectorAll('.insight-card');
insightCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// フローティングカードのパララックス効果
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    gsap.to(card, {
        y: `${index % 2 === 0 ? '-' : '+'}=20`,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
});