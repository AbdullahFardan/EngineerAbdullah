// تفعيل مكتبة AOS للتمرير
AOS.init();

// تبديل اللغة
function setLanguage(language) {
    // إخفاء شاشة اختيار اللغة
    $("#language-selection").fadeOut(500, function() {
        // إظهار المحتوى بناءً على اللغة المختارة
        if (language === 'ar') {
            $("#content-ar").fadeIn(500).addClass('animate__fadeIn');
            $("#content-en").hide();
        } else {
            $("#content-en").fadeIn(500).addClass('animate__fadeIn');
            $("#content-ar").hide();
        }
    });
}
