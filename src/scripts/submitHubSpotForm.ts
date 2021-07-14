import cookie from "cookie";

const submitHubSpotForm = async <Values extends {}>(
  formId: string,
  values: Values
) => {
  const cookies = cookie.parse(document.cookie);
  const data = {
    submittedAt: new Date().valueOf(),
    fields: Object.entries(values).map(([key, value]) => ({
      name: key,
      value,
    })),
    context: {
      hutk: cookies.hubspotutk || "0357bb413489ee6bfdeda28e0566a639",
      pageUri: window.location.href,
      pageName: document.title,
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Courier to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications from Courier.",
          },
        ],
      },
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/6196736/${formId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) throw new Error("Error submitting the form");

  return response.json();
};

export default submitHubSpotForm;
