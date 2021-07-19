// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

export default function ModalLayout({ open, onClose, children }) {
  const classes = useStyles()

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
      <Fade in={open}>{children}</Fade>
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
