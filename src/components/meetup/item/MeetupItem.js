import { useContext, useState } from 'react'
import { IconButton } from '@material-ui/core'
import { Star, StarBorder, Clear, EditOutlined } from '@material-ui/icons'

import classes from './MeetupItem.module.css'
import 'assets/css/animation.css'
import FavContext from 'context/fav-context'
import ModalLayout from 'layout/modal/ModalLayout'
import MeetupDetail from '../detail/MeetupDetail'
import ConfirmModal from 'components/common/ConfirmModal'

export default function MeetupItem({ item, onDelete }) {
  // favorite context
  const favCtx = useContext(FavContext)

  const isFav = favCtx.isFav(item.id)

  function toggleFavHandler(e) {
    e.stopPropagation()
    isFav ? favCtx.rmFav(item.id) : favCtx.addFav({ ...item })
  }

  // modal
  const [open, setOpen] = useState(false)
  const [delOpen, setDelOpen] = useState(false)

  function openHandler() {
    setOpen(true)
  }

  function closeHandler() {
    setOpen(false)
  }

  function delOpenHandler() {
    setDelOpen(true)
  }

  function delCloseHandler() {
    setDelOpen(false)
  }

  function confirmHandler() {
    onDelete(item.id)
    favCtx.rmFav(item.id)
  }

  return (
    <>
      <div className={`${classes.item} fade-in-bottom`} onClick={openHandler}>
        <div className={classes.layout}>
          <div className={classes.image}>
            <img src={item.imageUrl} alt={item.title} />
          </div>

          <div className={classes.info}>
            <div className={classes.content}>
              <div className={classes.title}>
                <h3>{item.title}</h3>

                <div className={classes.sideAction}>
                  <IconButton
                    color="secondary"
                    className={classes.hideIcon}
                    onClick={e => {
                      e.stopPropagation()
                      delOpenHandler()
                    }}
                  >
                    <Clear fontSize="small" />
                  </IconButton>

                  <IconButton color="primary" className={classes.hideIcon}>
                    <EditOutlined fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className={classes.actions}>
              <address>{item.datetime}</address>

              <IconButton
                className={isFav ? classes.icon : classes.hideIcon}
                onClick={toggleFavHandler}
              >
                {isFav ? <Star color="primary" /> : <StarBorder />}
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <ModalLayout open={open} onClose={closeHandler}>
          <MeetupDetail
            item={item}
            isFav={isFav}
            toggleFav={toggleFavHandler}
            onClose={closeHandler}
            onDelete={delOpenHandler}
          />
        </ModalLayout>
      )}

      {delOpen && (
        <ConfirmModal
          open={delOpenHandler}
          onCancel={delCloseHandler}
          onConfirm={confirmHandler}
        />
      )}
    </>
  )
}
