import { IconButton } from '@material-ui/core'
import { Clear } from '@material-ui/icons'

import classes from './MeetupDetail.module.css'

export default function MeetupDetail({ item }) {
  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src={item.image} alt={item.title} />

        <IconButton className={classes.close}>
          <Clear fontSize="small" color="#fff"/>
        </IconButton>
      </div>

      <div className={classes.content}>
        <div className={classes.title}>
          <h3>{item.title}</h3>
        </div>
      </div>
    </div>
  )
}
