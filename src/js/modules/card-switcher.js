document.querySelectorAll('.our-team_card-image-wrapper').forEach(wrapper => {
  const mainImage = wrapper.querySelector('.main-image');
  const secondImage = wrapper.querySelector('.second-image');
  const textWrapper = wrapper.querySelector('.our-team_card-image-text-wrapper');
  const leftZone = wrapper.querySelector('.hover-left');
  const rightZone = wrapper.querySelector('.hover-right');

  const showSecondImage = () => {
    secondImage?.classList.add('active');
    textWrapper?.classList.remove('active');
    if (mainImage) mainImage.style.opacity = 0;
  };

  const showTextOverSecondImage = () => {
    secondImage?.classList.add('active');
    textWrapper?.classList.add('active');
    if (mainImage) mainImage.style.opacity = 0;
  };

  const resetToMain = () => {
    secondImage?.classList.remove('active');
    textWrapper?.classList.remove('active');
    if (mainImage) mainImage.style.opacity = 1;
  };

  leftZone?.addEventListener('mouseenter', showSecondImage);
  rightZone?.addEventListener('mouseenter', showTextOverSecondImage);
  wrapper.addEventListener('mouseleave', resetToMain);

  // Устанавливаем дефолт
  resetToMain();
});