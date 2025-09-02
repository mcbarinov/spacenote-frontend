import { AuthContext } from "@/contexts/auth/AuthContext"
import { useContext } from "react"

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return ctx
}
