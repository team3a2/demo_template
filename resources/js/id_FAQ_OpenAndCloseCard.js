const list_base_card = document.querySelectorAll('#FAQ .container-card .base-card');

list_base_card.forEach(card => {
    const ele_open = card.querySelector('.open-js');
    const ele_close = card.querySelector('.close-js');
    const object_toggle = card.querySelector('.card-toggle');

    ele_open.addEventListener('click', (e) => {
        e.preventDefault();
        object_toggle.classList.remove('none');
        object_toggle.classList.add('block');
    });

    ele_close.addEventListener('click', (e) => {
        object_toggle.classList.remove('block');
        object_toggle.classList.add('none');
    });

    document.addEventListener('click', (e) => {
        // Kiểm tra xem click có xảy ra bên ngoài card-toggle không
        if (object_toggle.classList.contains('block') && !card.contains(e.target) && e.target !== ele_open) {
            object_toggle.classList.remove('block');
            object_toggle.classList.add('none');
        }
    });
});
