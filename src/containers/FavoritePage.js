import { useContext } from 'react'
import { Box } from '@material-ui/core'

import MeetupList from 'components/meetup/list/MeetupList'
import FavContext from 'context/fav-context'

export default function FavoritePage() {
  const favCxt = useContext(FavContext)

  return (
    <div>
      <Box display="flex" alignItems="center">
        <h1>Favorites ({favCxt.totalFavs})</h1>
      </Box>

      {favCxt.favs ? (
        <MeetupList list={favCxt.favs} />
      ) : (
        <p>You have no favorite meetup</p>
      )}
    </div>
  )
}
