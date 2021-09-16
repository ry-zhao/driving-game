var $car = document.querySelector('.car');
var left = 0;
var top = 0;

function driveCar(event) {
  switch ($car.className) {
    case 'car right':
      console.log('works');
      left += 5;
      $car.style.left = left;
      break;
    case 'car down':
      top += 5;
      $car.style.top = top;
      break;
    case 'car left':
      left -= 5;
      $car.style.left = left;
      break;
    case 'car up':
      top -= 5;
      $car.style.top = top;
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
