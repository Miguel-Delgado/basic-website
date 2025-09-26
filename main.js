document.addEventListener('DOMContentLoaded', () => {
  const ageDialog = document.getElementById('ageDialog');
  const ageYes = document.getElementById('ageYes');
  const ageNo = document.getElementById('ageNo');

  // Show age dialog and add blur
  document.body.classList.add('age-verification');
  ageDialog.showModal();

  // Yes button
  ageYes.addEventListener('click', () => {
    ageDialog.close();
    document.body.classList.remove('age-verification');
  });

  // No button
  ageNo.addEventListener('click', () => {
    alert('Извините, доступ разрешен только для лиц старше 18 лет.');
    window.location.href = 'https://www.google.com';
  });
});

const openBtn = document.getElementById('openDialog');
const dialog = document.getElementById('feedbackDialog');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('myForm');
const phoneInput = document.getElementById('phone');

// Открытие модалки
openBtn.addEventListener('click', () => {
  dialog.showModal();
  // Фокус на первом поле
  document.getElementById('email').focus();
});

// Закрытие модалки
closeBtn.addEventListener('click', () => {
  dialog.close();
  // Возврат фокуса на кнопку открытия
  openBtn.focus();
});

// Маска для телефона
phoneInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 10) value = value.slice(0, 10);
  if (value.length > 0) {
    value = '+7 (' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 8) + '-' + value.slice(8, 10);
  }
  e.target.value = value;
});

// Валидация формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Сброс кастомных сообщений (если есть)
  // Проверка валидности
  if (form.checkValidity()) {
    // Успешная валидация
    dialog.close();
    form.reset();
    // Перенаправление на страницу спасибо
    window.location.href = 'thanks.html';
  } else {
    // Вывод сообщений
    form.reportValidity();
    // Установка aria-invalid для невалидных полей
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
      if (!field.checkValidity()) {
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.removeAttribute('aria-invalid');
      }
    });
  }
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    const isDark = document.body.classList.contains('theme-dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
    themeToggle.textContent = '☀️';
  }
}
