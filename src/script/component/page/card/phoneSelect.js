document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.card-focus-phone-field-select');
  const optionsContainer = select.querySelector('.card-focus-phone-field-select__options');
  const button = select.querySelector('.card-focus-phone-field-select__button');
  const choosedOption = select.querySelector('.choosed-option');



  // Функция для открытия/закрытия списка опций
  button.addEventListener('click', (event) => {
    select.classList.toggle('open');
    event.preventDefault()
  });

  // Обработка выбора опции
  optionsContainer.addEventListener('click', function (event) {
    if (event.target.closest('.card-focus-phone-field-select__option')) {
      const selectedOption = event.target.closest('.card-focus-phone-field-select__option');
      select.querySelector('.choosed-option').classList.remove('choosed-option');
      selectedOption.classList.add('choosed-option')
      optionsContainer.prepend(selectedOption);
      select.classList.remove('open');
    }
  });

  // Закрытие списка при клике вне его области
  document.addEventListener('click', function (event) {
    if (!select.contains(event.target)) {
      select.classList.remove('open');
    }
  });
});