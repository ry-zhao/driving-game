var $car1 = document.querySelector('#car1');
var $car2 = document.querySelector('.car2');

var modelCar1 = {
  offsetLeft: 0,
  offsetTop: 0
};

var driveInterval = null;

document.addEventListener('keydown', driveOrStopCar);

function driveOrStopCar(event) {
  if (event.code !== 'Space') {
    return;
  }

  if (driveInterval === null) {
    driveInterval = setInterval(moveCar, 16);
  } else {
    clearInterval(driveInterval);
    driveInterval = null;
  }
}

function moveCar(event) {
  switch ($car1.className) {
    case 'car right':
      modelCar1.offsetLeft += 8;
      $car1.style.left = modelCar1.offsetLeft + 'px';
      break;
    case 'car down':
      modelCar1.offsetTop += 8;
      $car1.style.top = modelCar1.offsetTop + 'px';
      break;
    case 'car left':
      modelCar1.offsetLeft -= 8;
      $car1.style.left = modelCar1.offsetLeft + 'px';
      break;
    case 'car up':
      modelCar1.offsetTop -= 8;
      $car1.style.top = modelCar1.offsetTop + 'px';
  }
}

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  switch (event.code) {
    case 'ArrowRight':
      $car1.className = 'car right';
      $car1.style.transform = 'rotate(45deg)';
      break;
    case 'ArrowDown':
      $car1.className = 'car down';
      break;
    case 'ArrowLeft':
      $car1.className = 'car left';
      $car1.style.transform = 'scaleX(-1) rotate(45deg)';
      break;
    case 'ArrowUp':
      $car1.className = 'car up';
      break;
    default:
      break;
  }
}

// function moveCar(event) {
//   switch ($car1.className) {
//     case 'car right':
//       modelCar1.offsetLeft += 8;
//       $car1.style.left = modelCar1.offsetLeft + 'px';
//       break;
//     case 'car down':
//       modelCar1.offsetTop += 8;
//       $car1.style.top = modelCar1.offsetTop + 'px';
//       break;
//     case 'car left':
//       modelCar1.offsetLeft -= 8;
//       $car1.style.left = modelCar1.offsetLeft + 'px';
//       break;
//     case 'car up':
//       modelCar1.offsetTop -= 8;
//       $car1.style.top = modelCar1.offsetTop + 'px';
//   }
// }

// document.addEventListener('keydown', turnCar);

// function turnCar(event) {
//   switch (event.code) {
//     case 'ArrowRight':
//       $car1.className = 'car right';
//       break;
//     case 'ArrowDown':
//       $car1.className = 'car down';
//       break;
//     case 'ArrowLeft':
//       $car1.className = 'car left';
//       break;
//     case 'ArrowUp':
//       $car1.className = 'car up';
//       break;
//     default:
//       break;
//   }
// }
