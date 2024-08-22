const menuItems = document.querySelectorAll('.nav-menu--item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Loại bỏ lớp active khỏi tất cả các mục
        menuItems.forEach(i => i.classList.remove('active'));
        // Thêm lớp active vào mục được nhấp
        this.classList.add('active');
    });
});
