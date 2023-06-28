export const formatDateTime = date => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const period = hour < 12 ? 'AM' : 'PM';

  return `${year}-${month}-${day} ${hour}:${minute} ${period}`;
};
