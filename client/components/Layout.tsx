import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>Nav</nav>
      <Outlet />
    </div>
  )
}

export default Layout