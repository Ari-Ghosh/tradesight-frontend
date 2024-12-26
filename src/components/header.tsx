import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <a href="/" className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-[#0066FF]" />
                        <span className="ml-2 font-semibold">Peekio</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Overview
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Blog
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Pricing
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Contact
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:inline-flex">
                        Log in
                    </Button>
                    <Button className="bg-[#0066FF] hover:bg-[#0052CC]">
                        Sign up
                    </Button>
                </div>
            </div>
        </header>
    )
}

