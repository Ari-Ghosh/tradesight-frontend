import { Star } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';

const testimonials = [
    {
        text: "This platform has transformed how I make investment decisions. The real-time data and insights are invaluable.",
        author: "Investment Analyst",
        company: "Major Financial Firm",
        rating: 5,
    },
    {
        text: "The alternative data sources provide a competitive edge in understanding market trends and making informed decisions.",
        author: "Portfolio Manager",
        company: "Investment Fund",
        rating: 5,
    },
    {
        text: "Excellent platform for both beginners and experienced investors. The insights are clear and actionable.",
        author: "Independent Investor",
        company: "Self-employed",
        rating: 4,
    },
];

export function Testimonials() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
                Read Over 10000+ Reviews
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-lg border p-6">
                        <div className="mb-4 flex justify-center">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center mb-4">
                            <FaUserCircle className="text-gray-400 h-16 w-16" />
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground text-center">{testimonial.text}</p>
                        <div className="text-center">
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
