import { BarChart3, LineChart, PieChart, Activity, TrendingUp, Users } from 'lucide-react'

const features = [
    {
        icon: BarChart3,
        title: "Performance Analytics",
        description: "Track and analyze investment performance in real-time",
    },
    {
        icon: LineChart,
        title: "Market Trends",
        description: "Stay updated with the latest market trends and patterns",
    },
    {
        icon: PieChart,
        title: "Portfolio Diversity",
        description: "Maintain a balanced and diversified investment portfolio",
    },
    {
        icon: Activity,
        title: "Risk Assessment",
        description: "Evaluate and manage investment risks effectively",
    },
    {
        icon: TrendingUp,
        title: "Growth Tracking",
        description: "Monitor your investments' growth over time",
    },
    {
        icon: Users,
        title: "Social Insights",
        description: "Learn from community insights and expert opinions",
    },
]

export function Features() {
    return (
        <section className="container px-4 py-16 md:py-24">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
                Monitor Company Performance
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="rounded-lg border p-6"
                    >
                        <feature.icon className="mb-4 h-6 w-6 text-[#0066FF]" />
                        <h3 className="mb-2 font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

