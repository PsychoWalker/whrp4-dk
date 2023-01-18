const upMainCharacteristic = () => {
  const mainCharacteristic = document.querySelectorAll('.char');
  const baseCharacteristic = document.querySelectorAll('.firstMeaning');
  const numberOfFreeCharacteristics = document.querySelector('.numberOfFreeCharacteristics');

  let numberOfFreeCharacteristic = 5;

  mainCharacteristic.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (numberOfFreeCharacteristic != 0 && baseCharacteristic[index].textContent !== '') {
        if (element.classList.contains('mainClass')) {
          baseCharacteristic[index].textContent = Number(baseCharacteristic[index].textContent) + 1;
          numberOfFreeCharacteristic--;
          numberOfFreeCharacteristics.textContent = numberOfFreeCharacteristic;
        }
      }
    });
  });
}

export {upMainCharacteristic};
