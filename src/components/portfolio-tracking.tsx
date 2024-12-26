import { Button } from "@/components/ui/button";
import { SiAdobe, SiNotion } from "react-icons/si";
import { FaGithub, FaSlack } from "react-icons/fa";

// Define the type for the keys of iconMapping
type IconKey = keyof typeof iconMapping;

const iconMapping = {
    SiAdobe: SiAdobe,
    SiNotion: SiNotion,
    FaGithub: FaGithub,
    FaSlack: FaSlack,
};

const portfolioItems: { name: string; logo: IconKey; value: string; change: string }[] = [
    { name: "Adobe", logo: "SiAdobe", value: "$750", change: "+12.5%" },
    { name: "Notion", logo: "SiNotion", value: "$550", change: "+8.3%" },
    { name: "GitHub", logo: "FaGithub", value: "$950", change: "+15.7%" },
    { name: "Slack", logo: "FaSlack", value: "$450", change: "+10.2%" },
];

export function PortfolioTracking() {
    return (
        <section className="container px-4 py-16">
            <div className="grid gap-16 md:grid-cols-2 md:gap-12">
                <div>
                    <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                        Track your portfolio
                    </h2>
                    <p className="mb-8 text-muted-foreground">
                        Monitor your investments in real-time with our comprehensive portfolio tracking system. Get instant updates on performance, trends, and market movements.
                    </p>
                    <div className="mb-8 overflow-hidden rounded-lg border">
                        <table className="w-full">
                            <thead className="border-b bg-muted/50">
                                <tr>
                                    <th className="p-4 text-left font-medium">Company</th>
                                    <th className="p-4 text-right font-medium">Value</th>
                                    <th className="p-4 text-right font-medium">Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {portfolioItems.map((item) => {
                                    const IconComponent = iconMapping[item.logo];
                                    return (
                                        <tr key={item.name} className="border-b last:border-0">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    {IconComponent && <IconComponent size={24} />}
                                                    <span className="font-medium">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-right">{item.value}</td>
                                            <td className="p-4 text-right text-green-500">{item.change}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] h-12 px-8">
                        View Portfolio
                    </Button>
                </div>
                <div className="relative">
                    <img
                        src="/placeholder.svg"
                        alt="Portfolio tracking illustration"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
