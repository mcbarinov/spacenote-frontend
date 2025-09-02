import { useAuth } from "@/hooks/useAuth"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { toast } from "sonner"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const loginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
})

type LoginForm = z.infer<typeof loginSchema>

export default function Login() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  })

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.username, data.password)
      void navigate("/")
    } catch {
      toast.error("Invalid username or password")
    }
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>SpaceNote</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={void form.handleSubmit(onSubmit)()} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" {...field} placeholder="Username" disabled={form.formState.isSubmitting} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" {...field} disabled={form.formState.isSubmitting} placeholder="Password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
