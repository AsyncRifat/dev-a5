document.getElementById('question-task').addEventListener('click', function () {
  window.location.href = '../next-index.html';
});
document.getElementById('clear-btn').addEventListener('click', function () {
  const history = document.getElementById('history');
  history.classList.add('hidden');
});
const makeColor = document.getElementById('color-btn');
const colors = ['silver', 'pink', 'gray', 'mulberry', 'purple'];
let color = 0;
makeColor.addEventListener('click', function (event) {
  document.body.style.backgroundColor = colors[color];
  const newColor = color + 1;
  const oneColor = newColor % colors.length;
  color=oneColor
});
const one = document.getElementById('title-1').innerText;
const two = document.getElementById('title-2').innerText;
const three = document.getElementById('title-3').innerText;
const four = document.getElementById('title-4').innerText;
const five = document.getElementById('title-5').innerText;
const six = document.getElementById('title-6').innerText;

document.getElementById('complete-1').addEventListener('click', function () {
  alert('Board updated Successfully');
  const btnOne = document.getElementById('complete-1');
  btnOne.classList.add('opacity-15');
  const textNew = parseInt(document.getElementById('number').innerText);
  if (textNew > 0) {
    document.getElementById('number').innerText = textNew - 1;
  }
  const navNumber = parseInt(document.getElementById('navNumber').innerText);
  document.getElementById('navNumber').innerText = navNumber + 1;

  let now = new Date();
  let timeString = now.toLocaleTimeString();

  const divTag = document.getElementById('history');
  const newElement = document.createElement('p');
  newElement.classList.add(
    'font-light',
    'text-sm',
    'bg-slate-200',
    'py-3',
    'px-2',
    'rounded-lg',
    'mb-4'
  );
  newElement.innerHTML = `
  <h1>You have Complete The Task ${one} ${timeString}</h1>
  `;
  divTag.appendChild(newElement);
});
document.getElementById('complete-2').addEventListener('click', function () {
  alert('DONE');
  const btnOne = document.getElementById('complete-2');
  btnOne.classList.add('opacity-15');
  const textNew = parseInt(document.getElementById('number').innerText);
  if (textNew > 0) {
    document.getElementById('number').innerText = textNew - 1;
  }
  const navNumber = parseInt(document.getElementById('navNumber').innerText);
  document.getElementById('navNumber').innerText = navNumber + 1;

  let now = new Date();
  let timeString = now.toLocaleTimeString();

  const divTag = document.getElementById('history');
  const newElement = document.createElement('p');
  newElement.classList.add(
    'font-light',
    'text-sm',
    'bg-slate-200',
    'py-3',
    'px-2',
    'rounded-lg',
    'mb-4'
  );
  newElement.innerHTML = `
  <h1>You have Complete The Task ${two} ${timeString}</h1>
  `;
  divTag.appendChild(newElement);
});
document.getElementById('complete-3').addEventListener('click', function () {
  alert('DONE');
  const btnOne = document.getElementById('complete-3');
  btnOne.classList.add('opacity-15');
  const textNew = parseInt(document.getElementById('number').innerText);
  if (textNew > 0) {
    document.getElementById('number').innerText = textNew - 1;
  }
  const navNumber = parseInt(document.getElementById('navNumber').innerText);
  document.getElementById('navNumber').innerText = navNumber + 1;

  let now = new Date();
  let timeString = now.toLocaleTimeString();

  const divTag = document.getElementById('history');
  const newElement = document.createElement('p');
  newElement.classList.add(
    'font-light',
    'text-sm',
    'bg-slate-200',
    'py-3',
    'px-2',
    'rounded-lg',
    'mb-4'
  );
  newElement.innerHTML = `
  <h1>You have Complete The Task ${three} ${timeString}</h1>
  `;
  divTag.appendChild(newElement);
});
document.getElementById('complete-4').addEventListener('click', function () {
  alert('DONE');
  const btnOne = document.getElementById('complete-4');
  btnOne.classList.add('opacity-15');
  const textNew = parseInt(document.getElementById('number').innerText);
  if (textNew > 0) {
    document.getElementById('number').innerText = textNew - 1;
  }
  const navNumber = parseInt(document.getElementById('navNumber').innerText);
  document.getElementById('navNumber').innerText = navNumber + 1;

  let now = new Date();
  let timeString = now.toLocaleTimeString();

  const divTag = document.getElementById('history');
  const newElement = document.createElement('p');
  newElement.classList.add(
    'font-light',
    'text-sm',
    'bg-slate-200',
    'py-3',
    'px-2',
    'rounded-lg',
    'mb-4'
  );
  newElement.innerHTML = `
  <h1>You have Complete The Task ${four} ${timeString}</h1>
  `;
  divTag.appendChild(newElement);
});
document.getElementById('complete-5').addEventListener('click', function () {
  alert('DONE');
  const btnOne = document.getElementById('complete-5');
  btnOne.classList.add('opacity-15');
  const textNew = parseInt(document.getElementById('number').innerText);
  if (textNew > 0) {
    document.getElementById('number').innerText = textNew - 1;
  }
  const navNumber = parseInt(document.getElementById('navNumber').innerText);
  document.getElementById('navNumber').innerText = navNumber + 1;

  let now = new Date();
  let timeString = now.toLocaleTimeString();

  const divTag = document.getElementById('history');
  const newElement = document.createElement('p');
  newElement.classList.add(
    'font-light',
    'text-sm',
    'bg-slate-200',
    'py-3',
    'px-2',
    'rounded-lg',
    'mb-4'
  );
  newElement.innerHTML = `
  <h1>You have Complete The Task ${five} ${timeString}</h1>
  `;
  divTag.appendChild(newElement);
});
document.getElementById('complete-6').addEventListener('click', function () {
  alert('DONE');
  const btnOne = document.getElementById('complete-6');
  btnOne.classList.add('opacity-15');
  const textNew = parseInt(document.getElementById('number').innerText);
  if (textNew > 0) {
    document.getElementById('number').innerText = textNew - 1;
  }
  const navNumber = parseInt(document.getElementById('navNumber').innerText);
  document.getElementById('navNumber').innerText = navNumber + 1;

  let now = new Date();
  let timeString = now.toLocaleTimeString();

  const divTag = document.getElementById('history');
  const newElement = document.createElement('p');
  newElement.classList.add(
    'font-light',
    'text-sm',
    'bg-slate-200',
    'py-3',
    'px-2',
    'rounded-lg',
    'mb-4'
  );
  newElement.innerHTML = `
  <h1>You have Complete The Task ${six} ${timeString}</h1>
  `;
  divTag.appendChild(newElement);
  alert('Congratulations, you have complete all the tasks');
});
