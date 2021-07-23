import { Box, Typography } from '@material-ui/core'

export default function About() {
  return (
    <Box mx={2}>
      <Box my={5}>
        <Typography variant="h4" color="primary">
          About Project
        </Typography>
        <p>
          Website helps manageing your meetups easier only on one page. Your
          meetup can be add, observe in detail, edit or delete. Especially,
          favorite is an awesome feature where you can save your important
          meetups and toggle <b> Favorite Button </b> to see them.
        </p>

        <h4>Technology</h4>
        <ul>
          <li>Front-end: ReactJS, Material UI</li>
          <li>Back-end: Firebase</li>
          <li>
            Link github:{' '}
            <a
              target="_blank"
              href="https://github.com/hoanglong040800/react-meetup"
            >
              hoanglong040800/react-meetup
            </a>
          </li>
        </ul>
      </Box>

      <Box my={5}>
        <Typography variant="h4" color="primary">
          About Me
        </Typography>

        <p>I'm a senior student at University of Information and Technology</p>

        <h4>Contact</h4>
        <ul>
          <li>
            Email: <i>hoanglong040800@gmail.com</i>
          </li>

          <li>
            Phone: <i>(+84) 93 722 9340</i>
          </li>

          <li>
            See all my awesome projects at:{' '}
            <a target="_blank" href="https://github.com/hoanglong040800">
              github.com/hoanglong040800
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  )
}
