import { multiObjToArrObj } from 'helpers/api-helper'

async function addMeetup(data) {
  await fetch(
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

async function allMeetup() {
  let res = await fetch(
    'https://react-meetup-9027b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
  )
  let data = await res.json()
  return multiObjToArrObj(data)
}

async function deleteMeetup(id) {
  await fetch(
    `https://react-meetup-9027b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups/${id}.json`,
    {
      method: 'DELETE',
    }
  )
}

export { addMeetup, allMeetup, deleteMeetup }
