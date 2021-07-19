import MeetupItem from 'components/meetup/MeetupItem'
import './MeetupList.module.css'
import classes from './MeetupList.module.css'

export default function MeetupList({list}) {
  return (
    <div className={classes.list}>
      {list.map(item => (
        <MeetupItem key={item.id} item={item} />
      ))}
    </div>
  )
}
