import { Grid } from '@material-ui/core'

import MeetupItem from '../item/MeetupItem'

export default function MeetupList({ list, onDelete, onEdit }) {
  return (
    <Grid container spacing={3}>
      {list.map(item => (
        <MeetupItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </Grid>
  )
}
