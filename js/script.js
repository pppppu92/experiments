// メインJavaScriptファイル

// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFAQ();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeContactForm();
    initializeMenuToggle();
});

// ナビゲーション初期化
function initializeNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === './') ||
            currentPath.includes(link.getAttribute('href').replace('./', ''))) {
            link.classList.add('active');
        }
    });
}

// ハンバーガーメニュー初期化
function initializeMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // アニメーション用のクラス追加
            this.classList.toggle('active');
        });
        
        // ナビゲーションリンククリック時にメニューを閉じる
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // 外部クリック時にメニューを閉じる
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// FAQ アコーディオン初期化
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', function() {
                const isActive = answer.classList.contains('active');
                
                // 他のすべてのFAQを閉じる
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherAnswer && otherToggle) {
                        otherAnswer.classList.remove('active');
                        otherToggle.classList.remove('active');
                    }
                });
                
                // クリックされたFAQの状態を切り替え
                if (!isActive) {
                    answer.classList.add('active');
                    toggle.classList.add('active');
                }
            });
        }
    });
}

// スムーススクロール初期化
function initializeSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// スクロールアニメーション初期化
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素を観察
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .testimonial-card, .blog-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// お問い合わせフォーム初期化
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateContactForm()) {
                e.preventDefault();
                showAlert('入力内容をご確認ください。', 'error');
            }
        });
    }
}

// フォームバリデーション
function validateContactForm() {
    const requiredFields = document.querySelectorAll('.form-group input[required], .form-group textarea[required], .form-group select[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'この項目は必須です。');
            isValid = false;
        } else {
            clearFieldError(field);
        }
        
        // メールアドレスの形式チェック
        if (field.type === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                showFieldError(field, '正しいメールアドレスを入力してください。');
                isValid = false;
            }
        }
        
        // 電話番号の形式チェック
        if (field.type === 'tel' && field.value.trim()) {
            const phoneRegex = /^[\d-+()]+$/;
            if (!phoneRegex.test(field.value.replace(/[\s]/g, ''))) {
                showFieldError(field, '正しい電話番号を入力してください。');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// フィールドエラー表示
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.style.color = 'var(--accent-color)';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.5rem';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
    field.style.borderColor = 'var(--accent-color)';
}

// フィールドエラー削除
function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = 'var(--border-color)';
}

// アラート表示
function showAlert(message, type = 'info') {
    // 既存のアラートを削除
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type}`;
    alertElement.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${type === 'error' ? 'var(--accent-color)' : 'var(--main-color)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: var(--shadow);
        z-index: 9999;
        max-width: 90%;
        text-align: center;
    `;
    alertElement.textContent = message;
    
    document.body.appendChild(alertElement);
    
    // 3秒後に自動削除
    setTimeout(() => {
        if (alertElement.parentNode) {
            alertElement.remove();
        }
    }, 3000);
}

// 緊急連絡先の電話番号クリック
function callEmergency(phoneNumber) {
    if (confirm('緊急連絡先に電話をかけますか？')) {
        window.location.href = `tel:${phoneNumber}`;
    }
}

// ギャラリー画像の拡大表示
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            showImageModal(this.src, this.alt);
        });
    });
}

// 画像モーダル表示
function showImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // クリックで閉じる
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // ESCキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.parentNode) {
            document.body.removeChild(modal);
        }
    });
}

// ページトップへ戻るボタン
function initializeScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--main-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: var(--shadow);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollButton);
    
    // スクロール位置に応じて表示/非表示
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // クリックでページトップへ
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 初期化関数を実行
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    initializeScrollToTop();
});

// GoogleフォームのiFrame自動リサイズ（contact.htmlで使用）
function resizeGoogleForm() {
    const iframe = document.querySelector('.google-form-embed iframe');
    if (iframe) {
        iframe.addEventListener('load', function() {
            // フォームの高さに合わせて調整
            this.style.height = 'auto';
        });
    }
}

// パフォーマンス最適化: 画像遅延読み込み
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// アクセシビリティ改善: フォーカス管理
function initializeAccessibility() {
    // タブキーでのフォーカス表示を改善
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('using-keyboard');
    });
    
    // スキップリンクの実装
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'メインコンテンツへスキップ';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--main-color);
        color: white;
        padding: 8px;
        z-index: 1000;
        text-decoration: none;
        border-radius: 3px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// 初期化関数を実行
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
    initializeAccessibility();
    resizeGoogleForm();
});