import React, { useState, useEffect } from 'react'
import { IconButton, Box } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'

import MeetupList from 'components/meetup/list/MeetupList'
import AddMeetup from 'components/meetup/add/AddMeetup'
import ModalLayout from 'layout/modal/ModalLayout'

import { allMeetup, addMeetup, deleteMeetup } from 'api/meetup-api'

export default function AllMeetupPage() {
  const [open, setOpen] = useState(false)
  const [meetupList, setMeetupList] = useState([])

  useEffect(() => {
    fetchAllMeetup()
  }, [])

  // api
  async function fetchAllMeetup() {
    let data = await allMeetup()
    setMeetupList(data)
  }

  async function addMeetupHandler(input) {
    await addMeetup(input)
    fetchAllMeetup()
    closeHandler()
  }

  async function deleteMeetupHandler(id) {
    await deleteMeetup(id)
    fetchAllMeetup()
  }

  // modal
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

      {meetupList ? (
        <MeetupList list={meetupList} onDelete={deleteMeetupHandler} />
      ) : (
        <p>You have no meetup</p>
      )}

      {
        //new meetup modal
        open && (
          <ModalLayout open={open} onClose={closeHandler}>
            <AddMeetup onSubmit={addMeetupHandler} />
          </ModalLayout>
        )
      }
    </div>
  )
}
