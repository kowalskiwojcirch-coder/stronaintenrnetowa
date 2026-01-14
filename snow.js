const snowCount = 40;

for (let i = 0; i < snowCount; i++) {
  const snow = document.createElement("div");
  snow.innerHTML = "❄";
  snow.style.position = "fixed";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.top = Math.random() * -100 + "px";
  snow.style.fontSize = 10 + Math.random() * 20 + "px";
  snow.style.opacity = Math.random();
  snow.style.pointerEvents = "none";
  snow.style.zIndex = "0";
  snow.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;

  document.body.appendChild(snow);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); }
}`;
document.head.appendChild(style);
