import { React } from 'react'

// Components
import Todocard from 'components/todo/Todocard'
import Box from '@material-ui/core/Box'

// Data
const todolist = [
  {
    id: 1,
    title: 'Learn React',
    time: '8am',
  },
  {
    id: 2,
    title: 'Learn state',
    time: '9am',
  },
  {
    id: 3,
    title: 'Learn Redux',
    time: '12pm',
  },
]

export default function Home() {
  return (
    <>
      <Box display="flex" mx={3}>
        {todolist.map(item => (
          <Box key={item.id} mx={1}>
            <Todocard title={item.title} time={item.time} />
          </Box>
        ))}
      </Box>
    </>
  )
}
