function addMeetup(data) {
  fetch(
    'https://react-meetup-9027b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}

export { addMeetup }
