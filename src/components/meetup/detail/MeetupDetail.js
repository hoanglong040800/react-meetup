import { Box, IconButton } from '@material-ui/core'
import {
  Clear,
  EditOutlined,
  DeleteOutline,
  Star,
  StarBorder,
  AccessAlarmOutlined,
  RoomOutlined,
  NoteOutlined,
} from '@material-ui/icons'

import classes from './MeetupDetail.module.css'

export default function MeetupDetail({
  item,
  isFav,
  toggleFav,
  onClose,
  onDelete,
  onEdit,
}) {
  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src={item.imageUrl} alt={item.title} />

        <IconButton className={classes.close} onClick={onClose}>
          <Clear fontSize="small" />
        </IconButton>
      </div>

      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>
            <h3>{item.title}</h3>

            <div>
              <IconButton onClick={toggleFav}>
                {isFav ? <Star color="primary" /> : <StarBorder />}
              </IconButton>
            </div>
          </div>

          <Box display="flex" flexDirection="column">
            <IconButton color="primary" onClick={onEdit}>
              <EditOutlined fontSize="small" />
            </IconButton>

            <IconButton color="secondary" onClick={onDelete}>
              <DeleteOutline fontSize="small" />
            </IconButton>
          </Box>
        </div>

        <Box display="flex" alignItems="center">
          <AccessAlarmOutlined fontSize="small" className={classes.icon} />

          <p>{item.datetime}</p>
        </Box>

        <Box display="flex" alignItems="center">
          <RoomOutlined fontSize="small" className={classes.icon} />

          <p>{item.address}</p>
        </Box>

        <Box display="flex" alignItems="center">
          <NoteOutlined fontSize="small" className={classes.icon} />

          <p>{item.description}</p>
        </Box>
      </div>
    </div>
  )
}
