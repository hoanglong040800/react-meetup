import { makeStyles, Modal, Backdrop, Fade } from '@material-ui/core'

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
      <Fade in={open}>
        <div className={classes.paper}>
          {children}
        </div>
      </Fade>
    </Modal>
  )
}

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    marginTop: 50,
    justifyContent: 'center',
  },

  paper: {
    position: 'absolute',
  },
})
