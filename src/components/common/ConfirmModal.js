import ModalLayout from 'layout/modal/ModalLayout'
import { Box, Button, makeStyles } from '@material-ui/core'

export default function ConfirmModal({ open, onCancel, onConfirm }) {
  const classes = useStyles()

  return (
    <ModalLayout open={open} onClose={onCancel}>
      <div className={classes.root}>
        <h3>Confirmation</h3>

        <hr />
        <p>Do you want to continue?</p>

        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Box mr={2}>
            <Button variant="contained" color="primary" onClick={onCancel}>
              Cancel
            </Button>
          </Box>

          <Button variant="outlined" onClick={onConfirm}>
            Confirm
          </Button>
        </Box>
      </div>
    </ModalLayout>
  )
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 400,
    padding: '10px 20px',
  },
})
