const upMainAlignment = () => {

  const fate = document.querySelector('.fate');
  const fortune = document.querySelector('.fortune');
  const perseverance = document.querySelector('.perseverance');
  const determination = document.querySelector('.determination');
  const numberOfFreeAlignment = document.querySelector('.numberOfFreeAlignment');

  fate.addEventListener('click', () => {
    if (numberOfFreeAlignment.textContent != 0) {
      fate.textContent = Number(fate.textContent) + 1;
      fortune.textContent = fate.textContent
      numberOfFreeAlignment.textContent = Number(numberOfFreeAlignment.textContent) - 1;
    }
  });

  perseverance.addEventListener('click', () => {
    if (numberOfFreeAlignment.textContent != 0) {
      perseverance.textContent = Number(perseverance.textContent) + 1;
      determination.textContent = perseverance.textContent;
      numberOfFreeAlignment.textContent = Number(numberOfFreeAlignment.textContent) - 1;
    }
  });
}

export {upMainAlignment}
