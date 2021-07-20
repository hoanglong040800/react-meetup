import MeetupItem from '../item/MeetupItem'
import classes from './MeetupList.module.css'

export default function MeetupList({list, onDelete}) {
  return (
    <div className={classes.list}>
      {list.map(item => (
        <MeetupItem key={item.id} item={item} onDelete={onDelete}/>
      ))}
    </div>
  )
}
