const background = document.getElementById('background');
const colors = ['#ff4ecd', '#00f5a0', '#3f8efc', '#ffc312', '#f0932b'];

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const size = Math.random() * 200 + 100;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${Math.random() * window.innerWidth}px`;
  circle.style.top = `${Math.random() * window.innerHeight}px`;
  circle.style.background = colors[Math.floor(Math.random() * colors.length)];

  background.appendChild(circle);
}

for (let i = 0; i < 20; i++) {
  createCircle();
}
