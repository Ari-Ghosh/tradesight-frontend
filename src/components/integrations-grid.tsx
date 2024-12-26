import { Button } from "@/components/ui/button";
import { SiAdobe, SiNotion, SiLinear } from "react-icons/si";
import { FaDiscord, FaPinterest, FaTwitter, FaGithub, FaSlack } from "react-icons/fa";

// Define the type for iconMapping keys
type IconKey = keyof typeof iconMapping;

const iconMapping = {
    SiAdobe: SiAdobe,
    SiNotion: SiNotion,
    SiLinear: SiLinear,
    FaGithub: FaGithub,
    FaSlack: FaSlack,
    FaDiscord: FaDiscord,
    FaPinterest: FaPinterest,
    FaTwitter: FaTwitter,
};

const integrations: { name: string; logo: IconKey; change: string }[] = [
    { name: "Adobe", logo: "SiAdobe", change: "+12.5%" },
    { name: "Notion", logo: "SiNotion", change: "+8.3%" },
    { name: "GitHub", logo: "FaGithub", change: "+15.7%" },
    { name: "Slack", logo: "FaSlack", change: "+10.2%" },
    { name: "Discord", logo: "FaDiscord", change: "+9.8%" },
    { name: "Linear", logo: "SiLinear", change: "+11.4%" },
    { name: "Pinterest", logo: "FaPinterest", change: "+7.9%" },
    { name: "Twitter", logo: "FaTwitter", change: "+13.1%" },
];

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
                {integrations.map((integration) => {
                    const IconComponent = iconMapping[integration.logo];
                    return (
                        <div
                            key={integration.name}
                            className="flex items-center gap-3 rounded-lg border p-4"
                        >
                            {IconComponent && <IconComponent size={24} />}
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{integration.name}</span>
                                <span className="text-xs text-green-500">{integration.change}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-12 text-center">
                <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] h-12 px-8">
                    View All Alerts
                </Button>
            </div>
        </section>
    );
}
