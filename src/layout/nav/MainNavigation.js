import { Link } from 'react-router-dom'

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

export default function MainNavigation() {
  const classes = useStyles()

  return (
    <nav className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box mr={3}>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/626px-Meetup_Logo.png"
                alt="meetup-logo"
                width="50"
              />
            </Link>
          </Box>

          <Box>
            <Link to="/" className={classes.link}>
              All Meetup
            </Link>

            <Link to="/favorite" className={classes.link}>
              Favorite
            </Link>

            <Link to="/todo" className={classes.link}>
              Todo
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: 15,
  },
}))
