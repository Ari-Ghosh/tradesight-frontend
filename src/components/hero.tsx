import { Button } from "@/components/ui/button"
import { SiAdobe } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



export function Hero() {
    return (
        <section className="container px-4 pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                    Make Better Investment Decisions With Alternative Data
                </h1>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                    Track your portfolio performance and get real-time insights with our comprehensive investment analytics platform
                </p>
                <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] h-12 px-8">
                    Get Started
                </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
                <div className="flex items-center gap-3 rounded-lg border p-4">
                    {/* <img src="/placeholder.svg" alt="Adobe" width={24} height={24} className="h-6 w-6" /> */}
                    <SiAdobe />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Adobe</span>
                        <span className="text-xs text-muted-foreground">+12.5%</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                    {/* <img src="/placeholder.svg" alt="Notion" width={24} height={24} className="h-6 w-6" /> */}
                    <SiNotion />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Notion</span>
                        <span className="text-xs text-muted-foreground">+8.3%</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                    {/* <img src="/placeholder.svg" alt="GitHub" width={24} height={24} className="h-6 w-6" /> */}
                    <FaGithub />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">GitHub</span>
                        <span className="text-xs text-muted-foreground">+15.7%</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

