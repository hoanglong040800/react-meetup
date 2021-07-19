import React, { useState } from 'react'
import { IconButton, Box } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'

import MeetupList from 'components/meetup/list/MeetupList'
import AddMeetup from 'components/meetup/add/AddMeetup'
import ModalLayout from 'components/layout/modal/ModalLayout'

const dummy_data = [
  {
    id: 'm1',
    title:
      'Meeting to brainstorm a small project Meeting to brainstorm a small project',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    favorite: true,
  },
  {
    id: 'm2',
    title: 'Meeting with leturer',
    image: 'https://i-dulich.vnecdn.net/2018/10/27/home-venice-italy_680x0.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    favorite: false,
  },
]

export default function AllMeetupPage() {
  const [open, setOpen] = useState(false)

  function openHandler() {
    setOpen(true)
  }

  function closeHandler() {
    setOpen(false)
  }

  return (
    <div>
      <Box display="flex" alignItems="center">
        <h1>All Meetup</h1>

        <Box display="flex" alignItems="center">
          <IconButton color="primary" onClick={openHandler}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      <MeetupList list={dummy_data} />

      {
        //new meetup modal
        open && (
          <ModalLayout open={open} onClose={closeHandler}>
            <AddMeetup onClose={closeHandler} />
          </ModalLayout>
        )
      }
    </div>
  )
}
