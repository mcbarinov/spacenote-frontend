import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { api } from "@/lib/api"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    const authToken = localStorage.getItem("auth_token")

    if (storedUsername && authToken) {
      setUsername(storedUsername)
    }
  }, [])

  const login = async (username: string, password: string) => {
    const res = await api.login({ username, password })
    localStorage.setItem("auth_token", res.auth_token)
    localStorage.setItem("username", username)
    setUsername(username)
  }

  const logout = () => {
    void api.logout()
    localStorage.removeItem("auth_token")
    localStorage.removeItem("username")
    setUsername(null)
  }

  return (
    <AuthContext
      value={{
        username,
        isAuthenticated: !!username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext>
  )
}
