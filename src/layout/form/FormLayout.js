import { makeStyles } from '@material-ui/core'

export default function FormLayout({ children }) {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

const useStyles = makeStyles({
  root: {
    padding: 10,
    border: '1px solid #e0e0e0',
    borderRadius: 10,
    boxShadow: '3px 3px 8px 0px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
})
