import { React } from 'react'

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'

export default function ConfirmModal({ title, open, onClose }) {
  // STYLE
  const classes = useStyles()

  // FUNCTION
  function handleConfirm() {
    alert(`Confirm delete ${title}`)
    onClose()
  }

  // COMPONENTS
  const body = (
    <div className={classes.paper}>
      <h2>Confirmation</h2>

      <Box mb={3}>
        Do you want to delete <b>{title}</b>?
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Box mr={1}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Cancel
          </Button>
        </Box>

        <Button variant="outlined" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </div>
  )

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}
    >
      <Fade in={open}>{body}</Fade>
    </Modal>
  )
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    marginTop: 100,
    justifyContent: 'center',
  },

  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid gray',
    borderRadius: 5,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
}))
