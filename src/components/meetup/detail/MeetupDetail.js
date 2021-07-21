import { Box, IconButton } from '@material-ui/core'
import {
  Clear,
  EditOutlined,
  DeleteOutline,
  StarOutline,
  AccessAlarmOutlined,
  RoomOutlined,
  NoteOutlined,
} from '@material-ui/icons'

import classes from './MeetupDetail.module.css'

export default function MeetupDetail({ item }) {
  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src={item.image} alt={item.title} />

        <IconButton className={classes.close}>
          <Clear fontSize="small" color="#fff" />
        </IconButton>
      </div>

      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>
            <h3>{item.title}</h3>

            <div>
              <IconButton>
                <StarOutline />
              </IconButton>
            </div>
          </div>

          <Box display="flex" flexDirection="column">
            <IconButton color="primary">
              <EditOutlined fontSize="small" />
            </IconButton>

            <IconButton color="secondary">
              <DeleteOutline fontSize="small" />
            </IconButton>
          </Box>
        </div>

        <Box display="flex" alignItems="center">
          <AccessAlarmOutlined fontSize="small" className={classes.icon} />

          <p>7:30 PM 20/7/2021</p>
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
