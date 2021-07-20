import { useState } from 'react'
import { IconButton } from '@material-ui/core'
import { Star, StarBorder, ArrowForward } from '@material-ui/icons'

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
            <h3>{item.title}</h3>
            <address>{item.address}</address>
          </div>

          <div className={classes.actions}>
            <div>
              <IconButton color="primary" onClick={toggleFav}>
                {
                  // favorite icon
                  fav ? <Star /> : <StarBorder />
                }
              </IconButton>

              
            </div>

            <IconButton color="primary">
              <ArrowForward />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}
