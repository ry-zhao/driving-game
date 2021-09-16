var $car = document.querySelector('.car');
var offsetLeft = 0;
var offsetTop = 0;
var driveInterval = null;

document.addEventListener('keydown', driveCar);

function driveCar(event) {
  if (event.code !== 'Space') {
    return;
  }
  driveInterval = setInterval(moveCar, 16);
}

function moveCar(event) {
  switch ($car.className) {
    case 'car right':
      offsetLeft += 5;
      $car.style.left = offsetLeft + 'px';
      break;
    case 'car down':
      offsetTop += 5;
      $car.style.top = offsetTop + 'px';
      break;
    case 'car left':
      offsetLeft -= 5;
      $car.style.left = offsetLeft + 'px';
      break;
    case 'car up':
      offsetTop -= 5;
      $car.style.top = offsetTop + 'px';
  }
}

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
