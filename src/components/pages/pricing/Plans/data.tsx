export default [
    {
        name: "Developer",
        price: "Free, forever",
        buttonType: "DarkGradientBg",
        limits: "Up to 10,000 messages/mo",
        buttonText: "Create a free account",
        planIncludes: {
            title: "What you get:",
            points: [
                "Unlimited team members",
                "Unlimited templates",
                "Access to all channels",
                "Unlimited custom brands",
            ]
        }
    },
    {
        name: "Business",
        buttonType: "PurpleBgButton",
        price: "$0.005/message",
        limits: "Billed monthly, no commitments",
        buttonText: "Create a free account",
        planIncludes: {
            title: "Everything in Developer, plus:",
            points: [
                "Removal of 'Powered By Courier' branding",
                "Unlimited messages",
                "Chat & email support",
            ]
        }
    },
    {
        name: "Enterprise",
        buttonType: "WhiteBgSimple",
        price: "Flexible pricing for your business",
        buttonText: "Get a demo",
        planIncludes: {
            title: "Everything in Business, plus:",
            points: [
                "Volume discounts",
                "Role-based access control",
                "Dedicated account manager",
                "SOC 2 report"
            ]
        }
    }
];
