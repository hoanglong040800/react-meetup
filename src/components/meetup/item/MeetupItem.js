import { useContext, useState } from 'react'
import { IconButton } from '@material-ui/core'
import {
  Star,
  StarBorder,
  ArrowForward,
  Clear,
  EditOutlined,
  SettingsInputComponentTwoTone,
} from '@material-ui/icons'

import classes from './MeetupItem.module.css'
import 'assets/css/animation.css'
import FavContext from 'context/fav-context'
import ModalLayout from 'layout/modal/ModalLayout'
import MeetupDetail from '../detail/MeetupDetail'

export default function MeetupItem({ item, onDelete }) {
  // favorite context
  const favCtx = useContext(FavContext)

  const isFav = favCtx.isFav(item.id)

  function toggleFavHandler() {
    isFav ? favCtx.rmFav(item.id) : favCtx.addFav({ ...item })
  }

  // modal
  const [open, setOpen] = useState(false)

  function openHandler() {
    setOpen(true)
  }

  function closeHandler() {
    setOpen(true)
  }

  return (
    <>
      <div className={`${classes.item} fade-in-bottom`}>
        <div className={classes.layout}>
          <div className={classes.image}>
            <img src={item.image} alt={item.title} />
          </div>

          <div className={classes.info}>
            <div className={classes.content}>
              <div className={classes.title}>
                <h3>{item.title}</h3>

                <div className={classes.sideAction}>
                  <IconButton
                    color="secondary"
                    className={classes.hideIcon}
                    onClick={() => onDelete(item.id)}
                  >
                    <Clear fontSize="small" />
                  </IconButton>

                  <IconButton color="primary" className={classes.hideIcon}>
                    <EditOutlined fontSize="small" />
                  </IconButton>
                </div>
              </div>

              <address>{item.address}</address>
            </div>

            <div className={classes.actions}>
              <IconButton
                className={isFav ? classes.icon : classes.hideIcon}
                onClick={toggleFavHandler}
              >
                {isFav ? <Star color="primary" /> : <StarBorder />}
              </IconButton>

              <IconButton
                color="primary"
                className={classes.hideIcon}
                onClick={openHandler}
              >
                <ArrowForward />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <ModalLayout open={open} onClose={closeHandler}>
          <MeetupDetail item={item} />
        </ModalLayout>
      )}
    </>
  )
}
