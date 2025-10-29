// 🌸 撒花与星星粒子效果
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ["#fff", "#ffb6c1", "#ffe4e1", "#ffd6e7"];

function createParticle() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 4 + 1;
    const speedY = Math.random() * 1 + 0.5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push({ x, y, size, speedY, color });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    }
}

function animate() {
    drawParticles();
    requestAnimationFrame(animate);
}

for (let i = 0; i < 150; i++) createParticle();
animate();

// 🎵 音乐控制
const bgm = document.getElementById("bgm");
const btn = document.getElementById("music-btn");

btn.onclick = () => {
    if (bgm.paused) {
        bgm.play();
        btn.textContent = "⏸ 暂停音乐";
    } else {
        bgm.pause();
        btn.textContent = "▶ 播放音乐";
    }
};
