import { Button } from "@/components/ui/button"
import DarkMode from "./DarkMode"


export function Header() {
    return (
        
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white flex justify-center mx-auto w-full">
            
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <a href="/" className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-[#0066FF]" />
                        <span className="ml-2 font-semibold">Trade Sight</span>
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
                        <a href="/trading" className="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Trading Portal</span>
                        </a>
                    </nav>
                </div>
               
                <div className="flex items-center gap-4">
                
                    <DarkMode />
                
                    <Button variant="ghost" className="bg-blue-300 hidden md:inline-flex">
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
