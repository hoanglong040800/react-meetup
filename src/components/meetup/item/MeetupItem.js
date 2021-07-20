import { useState } from 'react'
import { IconButton } from '@material-ui/core'
import {
  Star,
  StarBorder,
  ArrowForward,
  Clear,
  EditOutlined,
} from '@material-ui/icons'

import classes from './MeetupItem.module.css'

export default function MeetupItem({ item }) {
  const [fav, setFav] = useState(item.favorite)

  function toggleFav() {
    setFav(!fav)
  }

  return (
    <div className={classes.item}>
      <div className={classes.layout}>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>

        <div className={classes.info}>
          <div className={classes.content}>
            <div className={classes.title}>
              <h3>{item.title}</h3>

              <div className={classes.sideAction}>
                <IconButton color="secondary" className={classes.icon}>
                  <Clear fontSize="small" />
                </IconButton>

                <IconButton color="primary" className={classes.icon}>
                  <EditOutlined fontSize="small" />
                </IconButton>
              </div>
            </div>

            <address>{item.address}</address>
          </div>

          <div className={classes.actions}>
            <IconButton color="primary" onClick={toggleFav}>
              {
                // favorite icon
                fav ? <Star /> : <StarBorder />
              }
            </IconButton>

            <IconButton color="primary" className={classes.icon}>
              <ArrowForward />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}
