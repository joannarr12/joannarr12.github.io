const container = document.querySelector('.image-container-js');
const image = document.querySelector('.huge-image');

container.addEventListener('mousemove', (e) => {
  // Calculate mouse position relative to the container
  const containerRect = container.getBoundingClientRect();
  const mouseX = e.clientX - containerRect.left;
  const mouseY = e.clientY - containerRect.top;

  // Calculate how far to move the image (panning effect)
  // Adjust the multipliers (e.g., 2, 1.5) to control pan sensitivity
  const panX = (mouseX / containerRect.width) * (image.width - containerRect.width);
  const panY = (mouseY / containerRect.height) * (image.height - containerRect.height);

  // Apply negative movement to the image
  image.style.left = -panX + 'px';
  image.style.top = -panY + 'px';
});

// Reset position when mouse leaves (optional)
container.addEventListener('mouseleave', () => {
  image.style.left = '0px';
  image.style.top = '0px';
});
