import classes from './MeetupItem.module.css'

export default function MeetupItem({ item }) {
  return (
    <div className={classes.item}>
      <div className={classes.layout}>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>

        <div>
          <div className={classes.content}>
            <h3>{item.title}</h3>
            <address>{item.address}</address>
          </div>

          <div className={classes.actions}>
            <button>Favorite</button>
          </div>
        </div>
      </div>
    </div>
  )
}
