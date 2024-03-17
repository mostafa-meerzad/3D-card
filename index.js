

document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');

  card.addEventListener('mousemove', handleMove);

  function handleMove(e) {
    const { clientWidth: width, clientHeight: height, offsetLeft: left, offsetTop: top } = card;
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;

    // Modify these values to change the sensitivity of the effect
    const rotateX = - (mouseY / height) * 20; // Degrees to rotate around the X axis
    const rotateY = (mouseX / width) * 20; // Degrees to rotate around the Y axis

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'none'; // Makes the effect more responsive
  });
});

