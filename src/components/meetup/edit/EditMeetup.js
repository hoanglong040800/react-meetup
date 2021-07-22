import { useState } from 'react'

import classes from './EditMeetup.module.css'
import FormLayout from 'layout/form/FormLayout'

export default function EditMeetup({ item, onSubmit }) {
  const [input, setInput] = useState({
    title: item.title,
    datetime: item.datetime,
    address: item.address,
    imageUrl: item.imageUrl,
    description: item.description,
  })

  function changeHandler(e) {
    let name = e.target.name
    let value = e.target.value
    setInput({ ...input, [name]: value })
  }

  function submitHandler(e) {
    e.preventDefault()
    onSubmit(input)
  }

  return (
    <FormLayout>
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>Edit Meetup</h3>

        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={input.title}
            required
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="time">Date & Time</label>
          <input
            type="datetime-local"
            name="datetime"
            value={input.datetime}
            required
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={input.address}
            required
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={input.imageUrl}
            required
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            row="5"
            value={input.description}
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Edit</button>
        </div>
      </form>
    </FormLayout>
  )
}
