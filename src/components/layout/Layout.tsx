import { Outlet } from "react-router"
import Footer from "./-components/Footer"
import Header from "./-components/Header"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
