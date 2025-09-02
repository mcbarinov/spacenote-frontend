import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/useAuth"
import { ChevronDown } from "lucide-react"
import { Link, Navigate, useNavigate } from "react-router"

export default function Header() {
  const navigate = useNavigate()
  const { username, isAuthenticated, logout } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const handleLogout = () => {
    logout()
    void navigate("/login")
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold hover:text-primary">
          SpaceNote
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              {username}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {username === "admin" && (
              <>
                <DropdownMenuItem
                  onClick={() => {
                    void navigate("/users")
                  }}
                >
                  Manage Users
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuItem
              onClick={() => {
                void navigate("/change-password")
              }}
            >
              Change Password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
