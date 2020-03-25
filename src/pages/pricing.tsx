import React from "react";
import Simple from "../templates/simple";

import UsageBasedPricing from "../components/pricing/usage-based-pricing";
import SubscriptionPlans from "../components/pricing/subscription-plans";

const PricingPage: React.FC = () => {
  return (
    <Simple title="Pricing">
      <UsageBasedPricing />
      <SubscriptionPlans />
    </Simple>
  );
};

export default PricingPage;
