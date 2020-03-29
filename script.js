const toggle = document.getElementById('toggle');
const flexy = document.getElementById('flex-container');

toggle.addEventListener('change', e => {
  flexy.classList.toggle('show-monthly');
});
