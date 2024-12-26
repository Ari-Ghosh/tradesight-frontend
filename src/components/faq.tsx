import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What data do I get?",
        answer: "Our platform provides comprehensive investment data including real-time market updates, company performance metrics, and alternative data sources for informed decision-making."
    },
    {
        question: "How can I get up and running?",
        answer: "Simply sign up for an account, connect your investment portfolio, and start tracking your investments immediately. Our onboarding process is quick and straightforward."
    },
    {
        question: "What makes us unique?",
        answer: "We combine traditional investment metrics with alternative data sources to provide unique insights that help you make better investment decisions."
    },
    {
        question: "How does pricing work?",
        answer: "We offer flexible pricing plans to suit different investment needs. Contact our sales team for detailed pricing information."
    },
]

export function FAQ() {
    return (
        <section className="container px-4 py-16">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
                Frequently asked questions
            </h2>
            <div className="mx-auto max-w-[800px]">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

