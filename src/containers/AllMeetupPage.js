import React from 'react'

// COMPONENTS
import MeetupList from 'components/meetup/list/MeetupList'

const dummy_data = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://i-dulich.vnecdn.net/2018/10/27/home-venice-italy_680x0.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
]

export default function AllMeetupPage() {
  return (
    <div>
      <h1>All Meetup</h1>
      <MeetupList list={dummy_data} />
    </div>
  )
}
