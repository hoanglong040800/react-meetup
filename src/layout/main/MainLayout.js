import MainNavigation from 'layout/nav/MainNavigation'
import classes from './MainLayout.module.css'

export default function MainLayout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  )
}
