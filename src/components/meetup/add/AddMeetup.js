import { useState } from 'react'

// components
import classes from './AddMeetup.module.css'
import FormLayout from 'components/layout/form/FormLayout'

export default function AddMeetup() {
  const [input, setInput] = useState({
    title: '',
    address: '',
    image: '',
    description: '',
  })

  function changeHandler(e) {
    const value = e.target.value
    const name = e.target.name
    setInput({ ...input, [name]: value })
  }

  function submitHandler(e) {
    e.preventDefault()
  }

  return (
    <FormLayout>
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>Add new Meetup</h3>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            name="title"
            value={input.title}
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            name="address"
            value={input.address}
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            required
            name="image"
            value={input.image}
            onChange={changeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
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
