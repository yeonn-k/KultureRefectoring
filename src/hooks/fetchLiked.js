const fetchLiked = (TOKEN, url, wishlist, event_id, setData, fetchData) => {
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
    })
      .then(response => {
        if (response.ok) {
          setData(prev => prev.filter(({ event_id: id }) => id !== event_id));
        }
      })
      .catch(error => console.log('Error: ', error));
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
      .then(data => fetchData())
      .catch(error => console.log('Error: ', error));
  }
};

export default fetchLiked;
