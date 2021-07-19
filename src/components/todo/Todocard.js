import { React, useState } from 'react'

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'

// Components
import ConfirmModal from './ConfirmModal'

export default function Todocard({ title, time }) {
  // STYLE
  const classes = useStyles()

  // STATE
  const [open, setOpen] = useState(false)

  // FUNCTION
  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>

          <Typography gutterBottom>{time}</Typography>
        </CardContent>

        <CardActions className={classes.action}>
          <Button variant="text" color="primary">
            Finish
          </Button>

          <Button variant="text" color="secondary" onClick={handleOpen}>
            Delete
          </Button>
        </CardActions>
      </Card>

      {open && <ConfirmModal title={title} open={open} onClose={handleClose} />}
    </>
  )
}

const useStyles = makeStyles({
  root: {
    width: 200,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  action: {
    justifyContent: 'flex-end',
  },
})
