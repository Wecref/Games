const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add('show'); // 스크롤이 20px 이상일 경우 'show' 클래스 추가
    } else {
        scrollToTopBtn.classList.remove('show'); // 스크롤이 맨 위에 있을 경우 'show' 클래스 제거
    }
}

window.onscroll = function () {
    scrollFunction();
};

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
