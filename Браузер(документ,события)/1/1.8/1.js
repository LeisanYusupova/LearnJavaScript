function showNotification({top = 0, right = 0, className, html}) {
  let message = document.createElement('div');
  message.className = 'notification';

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  message.innerHTML = html;
  message.body.append(notification);

  setTimeout(() => message.remove(), 1500)
}













showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
  });

