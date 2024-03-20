const canvas = document.getElementById('clock');
const ctx = canvas.getContext('2d');
const radius = canvas.width / 2;

function drawClock() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(radius, radius, radius * 0.9, 0, 2 * Math.PI);
  ctx.fillStyle = '#222';
  ctx.fill();
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 10;
  ctx.stroke();

  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  drawTime(hour, minute, second);
}

function drawTime(hour, minute, second) {
  const hourAngle = (hour * 30 + (minute / 60) * 30) * Math.PI / 180;
  drawHand(hourAngle, radius * 0.5, 10);

  const minuteAngle = (minute * 6 + (second / 60) * 6) * Math.PI / 180;
  drawHand(minuteAngle, radius * 0.7, 6);

  const secondAngle = (second * 6) * Math.PI / 180;
  drawHand(secondAngle, radius * 0.8, 2);

  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fff'; 
  for (let i = 1; i <= 12; i++) {
    const angle = (i * 30) * Math.PI / 180;
    const x = radius + Math.sin(angle) * radius * 0.75; 
    const y = radius - Math.cos(angle) * radius * 0.75; 
    ctx.fillText(i, x, y);
  }
}
function drawHand(angle, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + Math.sin(angle) * length, radius - Math.cos(angle) * length);
  ctx.strokeStyle = '#fff'; 
  ctx.stroke();
}

setInterval(drawClock, 1000);