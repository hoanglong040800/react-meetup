import { Modal, Backdrop, Fade, Box, IconButton } from '@material-ui/core'
import { Clear } from '@material-ui/icons'

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
