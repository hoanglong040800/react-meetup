import { Modal, Backdrop, Fade, Box } from '@material-ui/core'

import classes from './ModalLayout.module.css'

export default function ModalLayout({ open, onClose, children }) {
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
      <Fade in={open} className={classes.animation}>
        <Box position="absolute">{children}</Box>
      </Fade>
    </Modal>
  )
}
