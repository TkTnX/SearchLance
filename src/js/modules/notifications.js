const notificationsCheckbox = document.querySelector("#notificationsCheckbox");
const notifCardEmail = document.querySelector("#notifCardEmail");
const notifCardTelegram = document.querySelector("#notifCardTelegram");

notificationsCheckbox.addEventListener("click", () => {
  notificationsCheckbox.classList.toggle("notifCheckbox--active");

  if (!notificationsCheckbox.matches(".notifCheckbox--active")) {
    hideNotifications();
  }
});

const hideNotifications = () => {
  notifCardEmail.classList.remove("notifications-card--active");
  notifCardTelegram.classList.remove("notifications-card--active");
};

const showNotification = (elementToShow, elementToHide) => {
  elementToShow.classList.add("notifications-card--active");
  elementToHide.classList.remove("notifications-card--active");
};

notifCardEmail.addEventListener("click", () => {
  if (notificationsCheckbox.matches(".notifCheckbox--active")) {
    showNotification(notifCardEmail, notifCardTelegram);
  }
});

notifCardTelegram.addEventListener("click", () => {
  if (notificationsCheckbox.matches(".notifCheckbox--active")) {
    showNotification(notifCardTelegram, notifCardEmail);
  }
});

export const notificationsFunc = () => {};
