// Lấy tất cả các input và textarea trong form
const inputs = document.querySelectorAll('.form-contact input, .form-contact textarea');

// Duyệt qua từng input và textarea để thêm sự kiện focus và blur
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        // Xử lí cho label hoặc phần tử trước input/textarea
        const label = input.previousElementSibling;
        if (label) {
            label.style.top = '0';
            label.style.marginLeft = '0';
            label.style.fontSize = '12px';
            label.style.color = '#333';
        }
    });

    input.addEventListener('blur', () => {
        // Xử lí cho label hoặc phần tử trước input/textarea
        const label = input.previousElementSibling;
        if (label) {
            if (input.value === '') {
                label.style.top = '37px';
                label.style.marginLeft = '17px';
                label.style.fontSize = '13px';
                label.style.color = '#999';
            }
        }
    });

    // Kiểm tra trạng thái ban đầu khi load trang
    if (input.value !== '') {
        // Xử lí cho label hoặc phần tử trước input/textarea
        const label = input.previousElementSibling;
        if (label) {
            label.style.top = '0';
            label.style.fontSize = '12px';
            label.style.color = '#333';
        }
    }
});
