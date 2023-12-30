const noButton = document.getElementById('noButton');

function getRandomPosition() {
  const boundary = 300;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const minX = centerX - boundary;
  const minY = centerY - boundary;
  const maxX = centerX + boundary - noButton.offsetWidth;
  const maxY = centerY + boundary - noButton.offsetHeight;

  const randomX = Math.max(minX, Math.floor(Math.random() * (maxX - minX + 1)) + minX);
  const randomY = Math.max(minY, Math.floor(Math.random() * (maxY - minY + 1)) + minY);

  return { x: randomX, y: randomY };
}

function handleHover() {
  const newPosition = getRandomPosition();

  noButton.style.left = `${newPosition.x}px`;
  noButton.style.top = `${newPosition.y}px`;
  noButton.style.zIndex = '100'; 
}

function handleUnhover() {
  noButton.style.zIndex = '1';
}

noButton.addEventListener('mouseover', handleHover);
noButton.addEventListener('mouseout', handleUnhover);
