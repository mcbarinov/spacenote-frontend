import { Outlet } from "react-router"
import Footer from "./-components/Footer"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
