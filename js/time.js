// Hàm khởi tạo đồng hồ
function startTime() {
    // Lấy Object ngày hiện tại
    var today = new Date();
 
    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Lấy ngày trong tuần
    var day = today.getDay();
    var daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    var dayOfWeekName = daysOfWeek[day];
    
    var d = addLeadingZeroIfNeeded(today.getDate());
    var m = today.getMonth() + 1;
    var y = today.getFullYear();
 
    // Chuyển đổi sang dạng 01, 02, 03
    m = checkTime(m);
    s = checkTime(s);
 
    // Ghi ra trình duyệt
    document.getElementById('timer').innerHTML = dayOfWeekName + ", " + d + "/" + m + "/" + y + " - " + h + ":" + m + ":" + s;
 
    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    var t = setTimeout(function() {
        startTime();
    }, 500);
}

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Hàm này thêm số 0 ở trước nếu số là lẻ và số đó bé hơn 10
function addLeadingZeroIfNeeded(i) {
    if (i < 10) {
        return "0" + i;
    }
    return i;
}