document.getElementById('question-task').addEventListener('click', function () {
  window.location.href = '../next-index.html';
});
document.getElementById('clear-btn').addEventListener('click', function () {
  const history = document.getElementById('history');
  history.classList.add('hidden');
});
document.getElementById('color-btn').addEventListener('click', function () {
  (document.body.style.background = 'green');
});

