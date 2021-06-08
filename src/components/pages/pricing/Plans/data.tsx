export default [
    {
        name: "Developer",
        price: "Free, forever",
        buttonType: "DarkGradientBg",
        limits: "Up to 10,000 notifications/mo",
        buttonText: "Create a free account",
        planIncludes: {
            title: "What you get:",
            points: [
                "Unlimited team members",
                "Unlimited templates",
                "Access to all channels",
                "72-hour log retention"
            ]
        }
    },
    {
        name: "Startup",
        buttonType: "PurpleBgButton",
        price: "$99/month",
        limits: "Includes 10,000 notifications/mo +$0.005/additional",
        buttonText: "Try for free",
        planIncludes: {
            title: "Everything in Free, plus:",
            points: [
                "Unlimited custom brands",
                "Chat & email support",
                "7-day log retention"
            ]
        }
    },
    {
        name: "Growth",
        buttonType: "PurpleBgButton",
        price: "$2,000/month",
        limits: "Includes 10,000 notifications/mo +$0.001/additional",
        buttonText: "Try for free",
        planIncludes: {
            title: "Everything in Starter, plus:",
            points: [
                "Role-based access control",
                "Dedicated account manager",
                "30-day log retention"
            ]
        }
    },
    {
        name: "Enterprise",
        buttonType: "WhiteBgSimple",
        price: "Flexible pricing for your business",
        limits: "",
        buttonText: "Get a demo",
        planIncludes: {
            title: "Everything in Growth, plus:",
            points: [
                "Custom roles & permissions",
                "Tailored onboarding & training",
                "Flexible log retention"
            ]
        }
    }
];
