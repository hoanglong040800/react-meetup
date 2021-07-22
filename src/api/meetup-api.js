import { multiObjToArrObj } from 'helpers/api-helper'

async function addMeetup(input) {
  await fetch(
    'https://react-meetup-9027b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(input),
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

async function editMeetup(id, input) {
  await fetch(
    `https://react-meetup-9027b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups/${id}.json`,
    {
      method: 'PUT',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}

export { addMeetup, allMeetup, deleteMeetup, editMeetup }
