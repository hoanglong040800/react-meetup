import { useState } from 'react'

// components
import classes from './AddMeetup.module.css'
import FormLayout from 'components/layout/form/FormLayout'

// api
import { addMeetup } from 'api/meetup'

export default function AddMeetup({ onClose }) {
  const [input, setInput] = useState({
    title: '',
    address: '',
    image: '',
    description: '',
  })

  function changeHandler(e) {
    let name = e.target.name
    let value = e.target.value
    setInput({ ...input, [name]: value })
  }

  function submitHandler(e) {
    e.preventDefault()
    addMeetup(input)
    onClose()
  }

  return (
    <FormLayout>
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>New Meetup</h3>

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
            name="image"
            value={input.image}
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
          <button>Add</button>
        </div>
      </form>
    </FormLayout>
  )
}
