$car = document.querySelector('.car');

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  switch (event.code) {
    case 'ArrowRight':
      $car.className = 'car right';
      break;
    case 'ArrowDown':
      $car.className = 'car down';
      break;
    case 'ArrowLeft':
      $car.className = 'car left';
      break;
    case 'ArrowUp':
      $car.className = 'car up';
      break;
    default:
      break;
  }
}
