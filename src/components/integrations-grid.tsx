import { Button } from "@/components/ui/button"

const integrations = [
    { name: "Adobe", logo: "/placeholder.svg", change: "+12.5%" },
    { name: "Notion", logo: "/placeholder.svg", change: "+8.3%" },
    { name: "GitHub", logo: "/placeholder.svg", change: "+15.7%" },
    { name: "Slack", logo: "/placeholder.svg", change: "+10.2%" },
    { name: "Discord", logo: "/placeholder.svg", change: "+9.8%" },
    { name: "Linear", logo: "/placeholder.svg", change: "+11.4%" },
    { name: "Pinterest", logo: "/placeholder.svg", change: "+7.9%" },
    { name: "Twitter", logo: "/placeholder.svg", change: "+13.1%" },
]

export function IntegrationsGrid() {
    return (
        <section className="container px-4 py-16">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
                Get Impactful Stock Alerts
            </h2>
            <p className="mx-auto mb-12 max-w-[600px] text-center text-muted-foreground">
                Stay updated with real-time alerts and notifications about your investment portfolio
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {integrations.map((integration) => (
                    <div
                        key={integration.name}
                        className="flex items-center gap-3 rounded-lg border p-4"
                    >
                        <img
                            src={integration.logo}
                            alt={integration.name}
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">{integration.name}</span>
                            <span className="text-xs text-green-500">{integration.change}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] h-12 px-8">
                    View All Alerts
                </Button>
            </div>
        </section>
    )
}

