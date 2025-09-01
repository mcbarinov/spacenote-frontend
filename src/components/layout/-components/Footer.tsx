export default function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        SpaceNote © {new Date().getFullYear()}
      </div>
    </footer>
  )
}
