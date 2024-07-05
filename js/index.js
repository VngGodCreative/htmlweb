const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');

    // Lưu trạng thái chế độ vào Local Storage
    const isDarkModeEnabled = document.body.classList.contains('dark-mode-variables');
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
});

document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra trạng thái chế độ từ Local Storage
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Áp dụng trạng thái chế độ
    if (darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    document.body.classList.add('dark-mode-variables');
    const darkModeIcons = darkMode.querySelectorAll('span');
    darkModeIcons.forEach(icon => icon.classList.add('active'));
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode-variables');
    const darkModeIcons = darkMode.querySelectorAll('span');
    darkModeIcons.forEach(icon => icon.classList.remove('active'));
}

// Đảm bảo rằng Orders đã được khởi tạo trước khi thực hiện vòng lặp
if (Orders) {
    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    });
}
