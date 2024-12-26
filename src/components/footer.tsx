export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Tutorials
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    News
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Newsletter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Help centre
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Licenses
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © 2024 Peekio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
