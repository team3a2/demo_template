// Lấy danh sách tất cả các tab-link trong phần '#videos'
const listNavLinks = document.querySelectorAll('#videos .nav-link');

// Xử lý sự kiện click cho từng tab-link
listNavLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        const idContent = navLink.getAttribute('data-bs-target'); // Lấy giá trị 'data-bs-target' của tab-link được click

        // Lấy danh sách tất cả các tab-pane trong phần '#videos .tab-content'
        const tabPanes = document.querySelectorAll('#videos .tab-content .tab-pane');

        // Duyệt qua từng tab-pane để ẩn hoặc hiển thị tùy thuộc vào 'data-bs-target' của tab-link
        tabPanes.forEach(tabPane => {
            if (tabPane.getAttribute('id') === idContent.slice(1)) {
                tabPane.style.display = 'flex'; // Hiển thị tab-pane tương ứng với tab-link được click
            } else {
                tabPane.style.display = 'none'; // Ẩn các tab-pane khác
            }
        });
    });
});
