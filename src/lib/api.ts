import type { LoginRequest, LoginResponse } from "@/types"
import { httpClient } from "./http-client"

export const api = {
  // Auth API
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    return await httpClient.post("api/v1/auth/login", { json: credentials }).json<LoginResponse>()
  },

  async logout(): Promise<void> {
    await httpClient.post("api/v1/auth/logout")
  },
}
