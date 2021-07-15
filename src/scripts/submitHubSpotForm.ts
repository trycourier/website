import cookie from "cookie";

interface ResponseBody {
  inlineMessage?: string;
  correlationId?: string;
  message?: string;
  status?: "error";
  errors?: Array<{
    message: string;
    errorType:
      | "MAX_NUMBER_OF_SUBMITTED_VALUES_EXCEEDED"
      | "INVALID_EMAIL"
      | "BLOCKED_EMAIL"
      | "REQUIRED_FIELD"
      | "INVALID_NUMBER"
      | "INPUT_TOO_LARGE"
      | "FIELD_NOT_IN_FORM_DEFINITION"
      | "NUMBER_OUT_OF_RANGE"
      | "VALUE_NOT_IN_FIELD_DEFINITION"
      | "INVALID_METADATA"
      | "INVALID_GOTOWEBINAR_WEBINAR_KEY"
      | "INVALID_HUTK"
      | "INVALID_IP_ADDRESS"
      | "INVALID_PAGE_URI"
      | "INVALID_LEGAL_OPTION_FORMAT"
      | "MISSING_PROCESSING_CONSENT"
      | "MISSING_PROCESSING_CONSENT_TEXT"
      | "MISSING_COMMUNICATION_CONSENT_TEXT"
      | "MISSING_LEGITIMATE_INTEREST_TEXT"
      | "DUPLICATE_SUBSCRIPTION_TYPE_ID"
      | "FORM_HAS_RECAPTCHA_ENABLED";
  }>;
}

const submitHubSpotForm = async <Values extends {}>(
  formId: string,
  values: Values
): Promise<ResponseBody> => {
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
  return response.json();
};

export default submitHubSpotForm;
