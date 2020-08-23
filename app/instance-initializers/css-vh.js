export function initialize(appInstance) {
  const vh = window.innerHeight / 100;

  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('orientationchange', function () {
    const vh = window.innerHeight / 100;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
    alert('The orientation of the screen is: ' + screen.orientation + ' ' + vh);
  });
}

export default {
  initialize,
};
