import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      document.getElementById('start-btn').disabled = true;
    } else {
      document.getElementById('start-btn').disabled = false;
    }
  },
};

const datePicker = flatpickr('#datetime-picker', options);

const startBtn = document.getElementById('start-btn');
const daysElement = document.querySelector('.value[data-days]');
const hoursElement = document.querySelector('.value[data-hours]');
const minutesElement = document.querySelector('.value[data-minutes]');
const secondsElement = document.querySelector('.value[data-seconds]');

let userSelectedDate;

datePicker.config.onClose.push(selectedDates => {
  userSelectedDate = selectedDates[0];
});

startBtn.addEventListener('click', startTimer);

function startTimer() {
  const selectedDate = new Date(userSelectedDate);

  const currentDate = new Date();
  if (selectedDate <= currentDate) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
    startBtn.disabled = true;
    return;
  }

  startBtn.disabled = true;

  const countdownInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const timeLeft = selectedDate - new Date();
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        title: 'Success',
        message: 'Countdown finished!',
      });
      startBtn.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      updateTimerUI({ days, hours, minutes, seconds });
    }
  }
}

function updateTimerUI({ days, hours, minutes, seconds }) {
  daysElement.innerText = days.toString().padStart(2, '0');
  hoursElement.innerText = hours.toString().padStart(2, '0');
  minutesElement.innerText = minutes.toString().padStart(2, '0');
  secondsElement.innerText = seconds.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
