/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

'use strict';

// Only run in capable browsers via feature detection
var didCutTheMustard = 'querySelector' in document
  && 'classList' in document.createElement('a')
  && 'addEventListener' in window;

if (didCutTheMustard) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

  /**
   * Countdown timer
   */
  function countdown(endDate) {
    const countDownElem = document.querySelector('#countdown');

    if (!countDownElem) return;

    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
      return;
    }

    setInterval(calculate, 1000);

    function calculate() {
      let startDate = new Date().getTime();

      let timeRemaining = parseInt((endDate - startDate) / 1000);

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);

        seconds = parseInt(timeRemaining);

        countDownElem.querySelector('.days').innerHTML = parseInt(days, 10);
        countDownElem.querySelector('.hours').innerHTML = hours < 10 ? "0" + hours : hours;
        countDownElem.querySelector('.minutes').innerHTML = minutes < 10 ? "0" + minutes : minutes;
        countDownElem.querySelector('.seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;
      } else {
        return;
      }
    }
  }

  // Start the countdown
  countdown('2020/03/07 08:15:00');
}
