// Sparkle Trail
const canvas = document.getElementById("sparkle");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let sparkles = [];

function createSparkle(x, y) {
  sparkles.push({x, y, size: Math.random() * 3 + 1, alpha: 1});
}

function drawSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparkles.forEach((s, i) => {
    ctx.fillStyle = "rgba(255, 105, 180," + s.alpha + ")";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
    s.alpha -= 0.02;
    s.y -= 0.5;
    if (s.alpha <= 0) sparkles.splice(i, 1);
  });
}

setInterval(drawSparkles, 16);
window.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) createSparkle(e.clientX, e.clientY);
});

// Pop message on click
document.querySelectorAll('.slide').forEach(slide => {
  slide.addEventListener('click', () => {
    const msg = document.createElement('div');
    msg.textContent = "💖";
    msg.style.position = 'fixed';
    msg.style.left = Math.random() * window.innerWidth + 'px';
    msg.style.top = Math.random() * window.innerHeight + 'px';
    msg.style.fontSize = '1.5rem';
    msg.style.animation = 'floatUp 2s ease-out';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
  });
});

const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100px); opacity: 0; }
  }
`;
document.head.appendChild(style);
