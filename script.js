// อ้างอิงถึงปุ่มและข้อความใน HTML
const button = document.getElementById('btn-click');
const greetingMessage = document.getElementById('greeting-msg');

// ใส่เหตุการณ์เมื่อคลิกปุ่ม
button.addEventListener('click', () => {
    // สลับคลาส 'hidden' เพื่อซ่อนหรือแสดงข้อความ
    greetingMessage.classList.toggle('hidden');
    
    // เปลี่ยนข้อความบนปุ่มไปมา
    if (greetingMessage.classList.contains('hidden')) {
        button.textContent = 'ทักทายฉันสิ!';
    } else {
        button.textContent = 'ปิดข้อความ';
    }
});