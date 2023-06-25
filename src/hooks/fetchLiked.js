const fetchLiked = (TOKEN, url, wishlist, event_id) => {
  let check;

  const isExistData =
    wishlist &&
    wishlist.filter(el => el.event_id === Number(event_id)).length > 0;

  if (isExistData) {
    fetch(`${url}/${event_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
    }).then(response => {
      if (response.ok) {
        check = 'delete';
      }
    });
  } else {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        eventId: event_id,
      }),
    })
      .then(response => response.json())
      .then(data => (check = 'post'));
  }

  return check;
};

export default fetchLiked;
