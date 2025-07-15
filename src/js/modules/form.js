document.addEventListener('DOMContentLoaded', function () {
  // Получаем все инпуты с классом .form_input-phone
  const inputs = document.querySelectorAll('.form_input-phone');

  inputs.forEach(phoneInput => {
    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, ""); // Убираем все нецифровые символы
      if (value.length > 11) value = value.slice(0, 11); // Ограничиваем до 11 цифр

      let formatted = "+7 ";
      if (value.length > 1) formatted += `(${value.slice(1, 4)}`;
      if (value.length > 4) formatted += `) ${value.slice(4, 7)}`;
      if (value.length > 7) formatted += `-${value.slice(7, 9)}`;
      if (value.length > 9) formatted += `-${value.slice(9, 11)}`;

      e.target.value = formatted;
    });
  });
});

const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("wpcf7submit", function (event) {
    const form = event.target;
    const checkboxWrapper = form.querySelector('span[data-name="acceptance-891"]');
    const checkbox = checkboxWrapper.querySelector('input[type="checkbox"]');

    // Удаляем старые сообщения об ошибке
    const oldError = checkboxWrapper.querySelector(".wpcf7-not-valid-tip");
    if (oldError) oldError.remove();

    // Проверяем, отмечен ли чекбокс
    if (!checkbox.checked) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "wpcf7-not-valid-tip";
      errorMessage.setAttribute("aria-hidden", "true");
      errorMessage.textContent = "Важно заполнить это поле.";
      checkboxWrapper.appendChild(errorMessage);
    }
  });

  document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ""); // Только буквы и пробелы
    });
  });
});
