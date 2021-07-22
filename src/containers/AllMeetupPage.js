import { useState, useEffect, useContext } from 'react'
import { IconButton, Box, Button } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'

import MeetupList from 'components/meetup/list/MeetupList'
import AddMeetup from 'components/meetup/add/AddMeetup'
import ModalLayout from 'layout/modal/ModalLayout'

import { allMeetup, addMeetup, deleteMeetup, editMeetup } from 'api/meetup-api'
import FavContext from 'context/fav-context'

export default function AllMeetupPage() {
  const [open, setOpen] = useState(false)
  const [meetupList, setMeetupList] = useState([])
  const favCtx = useContext(FavContext)
  const [isFavFilter, setIsFavFilter] = useState(false)

  useEffect(() => {
    fetchByFilter()
  }, [isFavFilter, addMeetupHandler, deleteMeetup, editMeetupHandler])

  // filter

  function toggleFavFilter() {
    setIsFavFilter(!isFavFilter)
  }

  function fetchByFilter() {
    isFavFilter ? setMeetupList(favCtx.favs) : fetchAllMeetup()
  }

  // api

  async function fetchAllMeetup() {
    let data = await allMeetup()
    setMeetupList(data)
  }

  async function addMeetupHandler(input) {
    await addMeetup(input)
    closeHandler()
  }

  async function deleteMeetupHandler(id) {
    await deleteMeetup(id)
  }

  async function editMeetupHandler(id, input) {
    await editMeetup(id, input)
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

      <Box mb={2}>
        <Button
          variant={isFavFilter ? 'contained' : 'outlined'}
          color="primary"
          onClick={toggleFavFilter}
        >
          Favorites: ({favCtx.totalFavs})
        </Button>
      </Box>

      {meetupList ? (
        <MeetupList
          list={meetupList}
          onDelete={deleteMeetupHandler}
          onEdit={editMeetupHandler}
        />
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
