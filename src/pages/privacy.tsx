import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "gatsby-background-image";

import Container, {
  Section,
  TopDivider,
  PageWrapper,
} from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";

const PrivacyPolicy: React.FC = () => {
  const { headerBg, headerDivider, footerDivider } = useStaticQuery(graphql`
    query {
      headerBg: file(relativePath: { eq: "bgs/header-bg@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerDivider: file(relativePath: { eq: "dividers/hero-white@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerDivider: file(relativePath: { eq: "dividers/mod/footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Privacy Policy" />

      <Section>
        <BackgroundImage
          Tag="section"
          fluid={headerBg.childImageSharp.fluid}
          backgroundColor="transparent"
          style={{
            backgroundPosition: "center left",
            height: "300px",
            top: "-1px",
          }}
        ></BackgroundImage>
        <Divider image={headerDivider} />
      </Section>

      <Section>
        <Container bg="transparent">
          <PageWrapper>
            <h1>Privacy Policy</h1>
            <p>
              <em>Last Updated January 29, 2021</em>
            </p>
            <p>
              Welcome to the website (the &ldquo;<strong>Site</strong>&rdquo;)
              of trycourier.com, Inc. (&ldquo;<strong>Courier</strong>,&rdquo;
              &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>
              ,&rdquo; or &ldquo;<strong>our</strong>&rdquo;). Courier provides
              a centralized application programming interface (API) messaging
              system that lets developers route user notifications across
              multiple existing channels to the best web and mobile application
              for the recipient (collectively, including the Site, the &ldquo;
              <strong>Service</strong>&rdquo;).
            </p>
            <p>
              This Privacy Policy explains what Personal Information (defined
              below) we collect, how we use and share that information, and your
              choices concerning our information practices. This Privacy Policy
              is incorporated into and forms part of our{" "}
              <a href="https://www.courier.com/terms">Terms of Service</a>.
            </p>
            <p>
              Before using the Service or submitting any Personal Information to
              Courier, please review this Privacy Policy carefully and contact
              us if you have any questions. By using the Service, you agree to
              the practices described in this Privacy Policy. If you do not
              agree to this Privacy Policy, please do not access the Site or
              otherwise use the Service.
            </p>
            <p>
              <strong>1. </strong>{" "}
              <strong>PERSONAL INFORMATION WE COLLECT</strong>
            </p>
            <p>
              We collect information that alone or in combination with other
              information in our possession could be used to identify you
              (&ldquo;<strong>Personal Information</strong>&rdquo;) as follows:
            </p>
            <p>
              <strong>Personal Information You Provide:</strong> We collect the
              following categories of Personal Information from you when you
              sign up for a demonstration, register for an account, or otherwise
              contact us. Personal Information includes anything considered
              Personal Data under the General Data Protection Regulation,
              including any implementing national laws and regulations
              (&ldquo;GDPR&rdquo;). The Personal Information we collect varies
              depending on what you choose to provide, but it may include your
              name, email address, phone number and information about your
              request:{" "}
            </p>
            <p>
              &middot; <strong>Identification Information:</strong> We collect
              your name, email address, phone number, company name and your
              position at your company. If you register through a third party
              service like Google or GitHub, we may collect additional
              information from you, as permitted by your settings with the third
              party service.
            </p>
            <p>
              &middot; <strong>Financial Information:</strong> Our payment
              processor(s) will collect the financial information necessary to
              process your payments, such as your payment card number and
              authentication details. Please note, however, that we store only a
              tokenized version of such information and do not maintain payment
              card information on our servers.
            </p>
            <p>
              &middot; <strong>Communication Information: </strong>We may
              collect information when you contact us with questions or concerns
              and when you voluntarily respond to questionnaires, surveys or
              requests for market research seeking your opinion and feedback.
              Providing communication information is optional to you.
            </p>
            <p>
              &middot; <strong>Social Media Information:</strong> We have pages
              on social media sites like Instagram, Facebook, Twitter, and
              LinkedIn and a community page on GitHub (collectively &ldquo;
              <strong>Social Media Pages</strong>&rdquo;). When you interact
              with our Social Media Pages, we will collect Personal Information
              that you elect to provide to us, such as your contact details. In
              addition, the companies that host our Social Media Pages may
              provide us with aggregate information and analytics regarding the
              use of our Social Media Pages.
            </p>
            <p>
              <strong>Internet Activity Information:</strong> When you visit,
              use, and interact with the Service, we may receive certain
              information about your visit, use, or interactions. For example,
              we may monitor the number of people that visit the Service, peak
              hours of visits, which page(s) are visited, the domains our
              visitors come from (e.g., google.com, yahoo.com, etc.), and which
              browsers people use to access the Service (e.g., Chrome, Firefox,
              Microsoft Internet Explorer, etc.), broad geographical
              information, and navigation pattern. In particular, the following
              information is created and automatically logged in our systems:{" "}
            </p>
            <p>
              &middot; <strong>Log Information</strong>: Information that your
              browser automatically sends whenever you visit the Site. Log
              Information includes your Internet Protocol address, browser type
              and settings, the date and time of your request, and how you
              interacted with the Site.{" "}
            </p>
            <p>
              &middot; <strong>Cookies Information:</strong> Please see the
              &ldquo;Cookies&rdquo; section below to learn more about how we use
              cookies.
            </p>
            <p>
              &middot; <strong>Device Information</strong>: Includes name of the
              device, operating system, and browser you are using. Information
              collected may depend on the type of device you use and its
              settings.{" "}
            </p>
            <p>
              &middot; <strong>Usage Information</strong>: We collect
              information about how you use our Service, such as the types of
              content that you view or engage with, the features you use, the
              actions you take, and the time, frequency, and duration of your
              activities.
            </p>
            <p>
              &middot; <strong>Location Information</strong>: We derive a rough
              estimate of your location from your IP address.
            </p>
            <p>
              &middot; <strong>Email Open/Click Information: </strong>We use
              pixels in our email campaigns that allow us to collect your email
              and IP address as well as the date and time you open an email or
              click on any links in the email.
            </p>
            <p>
              <strong> </strong>
            </p>
            <p>
              <strong>
                Personal Information We Process on Behalf of Our Business
                Customers
              </strong>
              : In order to provide the Service, we collect Personal Information
              from our business customers (&ldquo;<strong>Customers</strong>
              &rdquo;) and the people they communicate with (&ldquo;
              <strong>Recipients</strong>&rdquo;) in order to deliver
              notifications across multiple channels. Through cross-channel
              engagement tracking, we may receive Personal Information about
              Customers and Recipients, such as names, email addresses, and
              phone numbers. We process that information pursuant to our Terms
              of Service and other agreements with our Customers. We have no
              direct relationship with Recipients. If you are a Recipient and
              would no longer like your information to be used by one of our
              Customers or you would like to access, correct, or request
              deletion of your information, please contact the Customer that you
              interact with directly.
            </p>
            <p>
              <strong>Cookies:</strong> We use cookies to operate and administer
              our Site, gather usage data on our Site, and improve your
              experience on it. A &ldquo;cookie&rdquo; is a piece of information
              sent to your browser by a website you visit. Cookies can be stored
              on your computer for different periods of time. Some cookies
              expire after a certain amount of time, or upon logging out
              (session cookies), others survive after your browser is closed
              until a defined expiration date set in the cookie (as determined
              by the third party placing it), and help recognize your computer
              when you open your browser and browse the Internet again
              (persistent cookies). For more details on cookies please visit{" "}
              <a href="http://www.allaboutcookies.org/" target="_blank">
                All About Cookies
              </a>
              .
            </p>
            <p>
              On most web browsers, you will find a &ldquo;help&rdquo; section
              on the toolbar. Please refer to this section for information on
              how to receive a notification when you are receiving a new cookie
              and how to turn cookies off.{" "}
            </p>
            <p>
              Please note that if you limit the ability of websites to set
              cookies, you may be unable to access certain parts of the Site and
              you may not be able to benefit from the full functionality of the
              Site.
            </p>
            <p>
              Advertising networks may use cookies to collect Personal
              Information. Most advertising networks offer you a way to opt out
              of targeted advertising. If you would like to find out more
              information, please visit the Network Advertising
              Initiative&rsquo;s{" "}
              <a href="http://www.networkadvertising.org" target="_blank">
                online resources
              </a>{" "}
              and follow the opt-out instructions there.
            </p>
            <p>
              If you access the Site on your mobile device, you may not be able
              to control tracking technologies through the settings.{" "}
            </p>
            <p>
              <strong>Analytics:</strong> We use Google Analytics, a web
              analytics service provided by Google, Inc. (&ldquo;Google&rdquo;).
              Google Analytics uses cookies to help us analyze how users use the
              Site and enhance your experience when you use the Site. For more
              information on how Google uses this information, click{" "}
              <a
                href="http://www.google.com/policies/privacy/partners/"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <p>
              <strong>Online Tracking and Do Not Track Signals</strong>: We and
              our third party service providers may use cookies, pixels, or
              other tracking technologies to collect information about your
              browsing activities over time and across different websites
              following your use of the Site. Our Site currently does not
              respond to &ldquo;Do Not Track&rdquo; (&ldquo;DNT&rdquo;) signals
              and operates as described in this Privacy Policy whether or not a
              DNT signal is received. If we do respond to DNT signals in the
              future, we will update this Privacy Policy to describe how we do
              so.
            </p>
            <p>
              <strong>2. </strong>{" "}
              <strong>HOW WE USE PERSONAL INFORMATION</strong>
            </p>
            <p>
              We may use Personal Information with your prior consent or as
              necessary for the following legitimate business interests:
            </p>
            <p>
              &middot; To provide the Service and help deliver notifications
              across multiple channels;
            </p>
            <p>
              &middot; To help users build their messaging flows and templates;{" "}
            </p>
            <p>
              &middot; To respond to your inquiries, comments, feedback, or
              questions;
            </p>
            <p>
              &middot; To send administrative information to you, for example,
              information regarding the Service and changes to our terms,
              conditions, and policies;
              <br />
              <br />{" "}
            </p>
            <p>
              &middot; To analyze how you interact with our Service and provide,
              maintain and improve the content and functionality of the Service
              and our customer relationships and experiences, develop our
              business and inform our marketing strategy (please see the
              &ldquo;Cookies&rdquo; section below to learn how we use cookies);
            </p>
            <p>
              &middot; To track data on requests made to our Application
              Programming Interface (API), such as when the requests are made,
              their status, and how long it takes us to complete the request in
              order to monitor and improve infrastructure performance around
              latency and reliability;
            </p>
            <p>&middot; To develop new products and services;</p>
            <p>
              &middot; To administer and protect our business and the Site,
              prevent fraud, criminal activity, or misuses of our Site, and to
              ensure the security of our IT systems, architecture and networks
              (including troubleshooting, testing, system maintenance, support
              and hosting of data); and
            </p>
            <p>
              &middot; To comply with legal obligations and legal process and to
              protect our rights, privacy, safety or property, and/or that of
              our affiliates, you or other third parties, and enforce our terms
              and policies.
            </p>
            <p>
              For information about what we mean by legitimate interests and the
              rights of individuals in the European Union (&ldquo;EU&rdquo;),
              please see the &ldquo;EU Users&rdquo; section below.
            </p>
            <p>
              <strong>Aggregated Information.</strong> We may aggregate Personal
              Information and use the aggregated information to analyze the
              effectiveness of our Service, to improve and add features to our
              Service, and for other similar purposes. In addition, from time to
              time, we may analyze the general behavior and characteristics of
              users of our Service and share aggregated information like general
              user statistics with prospective business partners. We may collect
              aggregated information through the Service, through cookies, and
              through other means described in this Privacy Policy.
            </p>
            <p>
              <strong>Marketing. </strong>We may contact you to provide
              information we believe will be of interest to you. For instance,
              if you elect to provide your email address, we may use that
              information to send you promotional information about our products
              and services. If we do, where required by law, for example if you
              are in the EU, we will only send you such emails if you consent to
              us doing so at the time you provide us with your Personal Data.
              You may opt out of receiving emails by following the instructions
              contained in each promotional email we send you or by contacting
              us. If you unsubscribe from our marketing lists, you will no
              longer receive marketing communications but we will continue to
              contact you regarding our Site and Services and to respond to your
              requests.
            </p>
            <p>
              <strong>4. </strong>{" "}
              <strong>SHARING AND DISCLOSURE OF PERSONAL INFORMATION</strong>
            </p>
            <p>
              Courier does not sell your Personal Information. In certain
              circumstances we may share the categories of Personal Information
              with third parties without further notice to you, unless required
              by the law, as set forth below:
            </p>
            <p>
              &middot; <strong>Vendors and Service Providers: </strong> To
              assist us in meeting business operations needs and to perform
              certain services and functions, we may share Personal Data with
              service providers, including hosting, cloud services and other
              information technology services providers; event management, email
              communication software providers and email newsletter providers;
              data base and sales/customer relationship management services;
              payment processors; web analytics services (for more details on
              the third parties that place cookies through the Site, please see
              the &ldquo;Cookies&rdquo; section below). Pursuant to our
              instructions, these parties will access, process or store Personal
              Data in the course of performing their duties to us.
            </p>
            <p>
              &middot; <strong>Business Transfers:</strong> If we are involved
              in a merger, acquisition, financing due diligence, reorganization,
              bankruptcy, receivership, dissolution, sale of all or a portion of
              our assets, or transition of service to another provider
              (collectively a &ldquo;Transaction&rdquo;), your Personal
              Information and other information may be shared in the diligence
              process with counterparties and others assisting with the
              Transaction and transferred to a successor or affiliate as part of
              or following that Transaction along with other assets.
            </p>
            <p>
              &middot; <strong>Legal Requirements:</strong> If required to do so
              by law or in the good faith belief that such action is necessary
              to (i) comply with a legal obligation, including to meet national
              security or law enforcement requirements, (ii) protect and defend
              our rights or property, (iii) prevent fraud, (iv) act in urgent
              circumstances to protect the personal safety of users of the
              Service, or the public, or (v) protect against legal liability.
            </p>
            <p>
              &middot; <strong>Affiliates: </strong>We may share Personal
              Information with our current and future affiliates, meaning an
              entity that controls, is controlled by, or is under common control
              with Courier. Our affiliates may use the Personal Information we
              share in a manner consistent with this Privacy Policy.
            </p>
            <p>
              <strong>5. </strong> <strong>DATA RETENTION</strong>
            </p>
            <p>
              We keep Personal Data for as long as reasonably necessary for the
              purposes described in this Privacy Policy, while we have a
              legitimate business need to do so, or as required by law (e.g. for
              tax, legal, accounting or other purposes), whichever is the
              longer.
            </p>
            <p>
              If you have elected to receive marketing communications from us,
              we retain information about your marketing preferences until you
              opt out of receiving these communications and in accordance with
              our policies.
            </p>
            <p>
              To determine the appropriate retention period for your Personal
              Data, we will consider the amount, nature, and sensitivity of the
              Personal Data, the potential risk of harm from unauthorized use or
              disclosure of your Personal Data, the purposes for which we use
              your Personal Data and whether we can achieve those purposes
              through other means, and the applicable legal requirements.
            </p>
            <p>
              <strong>6. </strong> <strong>UPDATE YOUR INFORMATION</strong>
            </p>
            <p>
              If you need to change or correct your Personal Data, or wish to
              have it deleted from our systems, you may contact us at
              support@courier.com. We will address your request as required by
              applicable law.
            </p>
            <p>
              <strong>7. </strong>{" "}
              <strong>CALIFORNIA PRIVACY RIGHTS DISCLOSURES</strong>
            </p>
            <p>
              Where provided for by law and subject to any applicable
              exceptions, California residents may have the right:
            </p>
            <p>
              &middot; To know the categories of Personal Information that
              Company has collected about you, the business purpose for
              collecting your Personal Information, and the categories of
              sources from which the Personal Information was collected;
            </p>
            <p>
              &middot; To access the specific pieces of Personal Information
              that Company has collected about you;
            </p>
            <p>
              &middot; To know whether Company has disclosed your Personal
              Information for business purposes, the categories of Personal
              Information so disclosed, and the categories of third parties to
              whom we have disclosed your Personal Information;
            </p>
            <p>
              &middot; To have Company, under certain circumstances, delete your
              Personal Information;
            </p>
            <p>
              &middot; To instruct businesses that sell Personal Information to
              stop doing so &ndash; Company, however, does not sell Personal
              Information;] [OR] [To opt out: we may share Identification
              Information and Internet Activity Information with social media
              platforms and other advertising partners that will use that
              information to serve you targeted advertisements on social media
              platforms and other third party websites &ndash; under certain
              regulations such sharing may be considered a &ldquo;sale&rdquo; of
              Personal Information;] and
            </p>
            <p>
              &middot; To be free from discrimination related to the exercise of
              these rights.
            </p>
            <p>
              If you would like to exercise any or all of these rights, you may
              do so by contacting us at
              <a href="mailto:support@courier.com">support@courier.com</a>.
              After we receive your request, we may request additional
              information from you to verify your identity. Your authorized
              agent may submit requests in the same manner, although we may
              require the agent to present signed written permission to act on
              your behalf, and you may also be required to independently verify
              your identity with us and confirm that you have provided the agent
              permission to submit the request.
            </p>
            <p>
              Please{" "}
              <a href="mailto:privacy@getpinwheel.com?subject=Privacy%252520@%252520Pinwheel">
                contact us
              </a>{" "}
              with questions or to request access to an alternative format of
              this Privacy Policy.
            </p>
            <p>
              <strong>Third Party Marketing</strong>: If you are a California
              resident and wish to opt out of sharing your Personal Information
              with third parties for their direct marketing purposes, please
              email Company at{" "}
              <a href="mailto:support@courier.com">support@courier.com</a> and
              clearly state your request, including your name, mailing address,
              email address, and phone number. Please see the &ldquo;Your
              Choices&rdquo; section of this Privacy Policy for additional
              information.
            </p>
            <p>
              <strong>8. </strong> <strong>EU USERS</strong>
            </p>
            <p>
              <strong>Scope</strong>. This section applies to individuals in the
              EU (for these purposes, reference to the EU also includes the
              European Economic Area countries of Iceland, Liechtenstein and
              Norway, the United Kingdom, and, to the extent applicable,
              Switzerland).
            </p>
            <p>
              <br />
              <br />{" "}
            </p>
            <p>
              <strong>Data Controller</strong>. Data protection laws in the EU
              differentiate between the &ldquo;data controller&rdquo; and
              &ldquo;data processor&rdquo; of Personal Data. Courier is the data
              controller for the processing of your Personal Data relating to
              data collected directly from end users who visit our website or
              other data we collect independently from our business customers.
              You can find our contact information, and the contact information
              of our EU-based representative, in the &ldquo;Contact Us&rdquo;
              section below.
            </p>
            <p>
              <strong>Data Processor</strong>. Courier is the data processor for
              the processing of your Personal Data relating to when we are
              providing our service on behalf of our business customers. To
              exercise the rights described below in relation to when Courier is
              the processor, please contact our customer that processed your
              Personal Data (the data controller) in order to exercise your
              rights.
            </p>
            <p>
              <strong>Legal Bases for Processing</strong>. This Privacy Policy
              (the paragraph &ldquo;How We Use Personal Data&rdquo;) describes
              the legal bases we rely on for the processing of your Personal
              Data. Please contact us if you have any questions about the
              specific legal basis we are relying on to process your Personal
              Data.
            </p>
            <p>
              As used in this Privacy Policy, &ldquo;legitimate interests&rdquo;
              means our interests in conducting our business and developing a
              business relationship with you. This Privacy Policy describes when
              we process your Personal Data for our legitimate interests, what
              these interests are and your rights. We will not use your Personal
              Data for activities where the impact on you overrides our
              interests, unless we have your consent or those activities are
              otherwise required or permitted by law.
            </p>
            <p>
              <strong>Your Rights</strong>. Pursuant to the GDPR, you have the
              following rights in relation to your Personal Data, under certain
              circumstances and subject to any applicable exceptions:
            </p>
            <p>
              &middot; <strong>Right of access:</strong> If you ask us, we will
              confirm whether we are processing your Personal Data and, if so,
              provide you with a copy of that Personal Data along with certain
              other details. If you require additional copies, we may need to
              charge a reasonable fee.
            </p>
            <p>
              &middot; <strong>Right to rectification:</strong> If your Personal
              Data is inaccurate or incomplete, you are entitled to ask that we
              correct or complete it. If we shared your Personal Data with
              others, we will tell them about the correction where possible. If
              you ask us, and where possible and lawful to do so, we will also
              tell you with whom we shared your Personal Data so you can contact
              them directly.
            </p>
            <p>
              &middot; <strong>Right to erasure:</strong> You may ask us to
              delete or remove your Personal Data, such as where you withdraw
              your consent. If we shared your data with others, we will tell
              them about the erasure where possible. If you ask us, and where
              possible and lawful to do so, we will also tell you with whom we
              shared your Personal Data with so you can contact them directly.
            </p>
            <p>
              &middot; <strong>Right to restrict processing:</strong> You may
              ask us to restrict or &lsquo;block&rsquo; the processing of your
              Personal Data in certain circumstances, such as where you contest
              the accuracy of the data or object to us processing it (please
              read below for information on your right to object). We will tell
              you before we lift any restriction on processing. If we shared
              your Personal Data with others, we will tell them about the
              restriction where possible. If you ask us, and where possible and
              lawful to do so, we will also tell you with whom we shared your
              Personal Data so you can contact them directly.
            </p>
            <p>
              &middot; <strong>Right to data portability: </strong>You have the
              right to obtain your Personal Data from us that you consented to
              give us or that was provided to us as necessary in connection with
              our contract with you, and that is processed by automated means.
              We will give you your Personal Data in a structured, commonly used
              and machine-readable format. You may reuse it elsewhere.
            </p>
            <p>
              &middot;{" "}
              <strong>Rights in relation to automated decision-making</strong>:
              You have the right to be free from decisions based solely on
              automated processing of your Personal Data (including profiling)
              which produce a significant legal effect on you, unless this is
              necessary in relation to a contract between you and us or you
              provide your explicit consent to this use.
            </p>
            <p>
              &middot; <strong>Right to object:</strong> You may ask us at any
              time to stop processing your Personal Data, and we will do so:
            </p>
            <p>
              o If we are relying on a legitimate interest to process your
              Personal Data -- unless we demonstrate compelling legitimate
              grounds for the processing or we need to process your data in
              order to establish, exercise, or defend legal claims;
            </p>
            <p>
              o If we are processing your Personal Data for direct marketing. We
              may keep minimum information about you in a suppression list in
              order to ensure your choices are respected in the future and to
              comply with data protection laws (such processing is necessary for
              our and your legitimate interest in pursuing the purposes
              described above);
            </p>
            <p>
              &middot; <strong>Right to withdraw consent:</strong> If we rely on
              your consent to process your Personal Data, you have the right to
              withdraw that consent at any time. Withdrawal of consent will not
              affect any processing of your data before we received notice that
              you wished to withdraw consent.
            </p>
            <p>
              &middot;{" "}
              <strong>
                Right to lodge a complaint with the data protection authority:
              </strong>{" "}
              If you have a concern about our privacy practices, including the
              way we handled your Personal Data, you can report it to the data
              protection authority that is authorized to hear those concerns (in
              the UK, the Information Commissioner&rsquo;s Office (ICO), who can
              be contacted at{" "}
              <a href="https://ico.org.uk/concerns">
                https://ico.org.uk/concerns
              </a>
              , and in other EU countries the data protection authority of the
              country in which you are located).
            </p>
            <p>
              Please see the &ldquo;Contact Us&rdquo; section below for
              information on how to exercise your rights.{" "}
            </p>
            <p>
              <strong>Data Transfers.</strong> Company is based in the U.S. The
              U.S. may have data protection laws less stringent than or
              otherwise different from the laws in effect in the EU and UK.
              Transfers of your Personal Data to Company in the U.S. are
              necessary to perform the agreement we have entered into, or are
              about to enter into, with you.
            </p>
            <p>
              <strong>9. </strong> <strong>CHILDREN</strong>
            </p>
            <p>
              Our Service is not directed to children who are under the age of
              16. Courier does not knowingly collect Personal Information from
              children under the age of 16. If you have reason to believe that a
              child under the age of 16 has provided Personal Information to
              Courier through the Service please contact us and we will endeavor
              to delete that information from our databases.
            </p>
            <p>
              <strong>10. </strong> <strong>LINKS TO OTHER WEBSITES</strong>
            </p>
            <p>
              The Service may contain links to other websites not operated or
              controlled by Courier, including social media services (&ldquo;
              <strong>Third Party Sites</strong>&rdquo;). The information that
              you share with Third Party Sites will be governed by the specific
              privacy policies and terms of service of the Third Party Sites and
              not by this Privacy Policy. By providing these links we do not
              imply that we endorse or have reviewed these sites. Please contact
              the Third Party Sites directly for information on their privacy
              practices and policies.{" "}
            </p>
            <p>
              <strong>11. </strong> <strong>COOKIES</strong>
            </p>
            <p>
              A &ldquo;cookie&rdquo; is a piece of information sent to your
              browser by a website you visit. By choosing to use the Site after
              having been notified of our use of cookies and other technologies
              in the ways described in this Privacy Policy, and, in applicable
              jurisdictions, through notice and unambiguous acknowledgement of
              your consent, you agree to such use.{" "}
            </p>
            <p>
              Cookies can be stored on your computer for different periods of
              time. Some cookies expire after a certain amount of time, or upon
              logging out (session cookies), others survive after your browser
              is closed until a defined expiration date set in the cookie (as
              determined by the third party placing it), and help recognize your
              computer when you open your browser and browse the Internet again
              (persistent cookies). Our Site uses cookies from the third parties
              described below. For more details on cookies please visit{" "}
              <a href="http://www.allaboutcookies.org/">All About Cookies</a>.
            </p>
            <p>
              <strong>Your Choices</strong>. On most web browsers, you will find
              a &ldquo;help&rdquo; section on the toolbar. Please refer to this
              section for information on how to receive a notification when you
              are receiving a new cookie and how to turn cookies off. Please see
              the links below for guidance on how to modify your web
              browser&rsquo;s settings on the most popular browsers:
            </p>
            <p>
              &middot;{" "}
              <a
                href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11"
                target="_blank"
              >
                Internet Explorer
              </a>
            </p>
            <p>
              &middot;{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences?esab=a&amp;s=cookies&amp;r=6&amp;as=s"
                target="_blank"
              >
                Mozilla Firefox
              </a>
            </p>
            <p>
              &middot;{" "}
              <a
                href="https://support.google.com/accounts/answer/61416?hl=en"
                target="_blank"
              >
                Google Chrome
              </a>
            </p>
            <p>
              &middot;{" "}
              <a
                href="https://support.apple.com/kb/PH21411?viewlocale=en_US&amp;locale=en_US"
                target="_blank"
              >
                Apple Safari
              </a>
            </p>
            <p>
              Please note that if you limit the ability of websites to set
              cookies, you may be unable to access certain parts of the Site and
              you may not be able to benefit from the full functionality of the
              Site.
            </p>
            <p>
              Most advertising networks offer you a way to opt out of targeted
              advertising. If you would like to find out more information,
              please visit the Network Advertising Initiative&rsquo;s online
              resources at{" "}
              <a href="http://www.networkadvertising.org" target="_blank">
                http://www.networkadvertising.org
              </a>{" "}
              and follow the opt-out instructions there or if you are located in
              the European Union, visit the European Interactive Digital
              Advertising Alliance&rsquo;s Your Online Choices opt-out tool{" "}
              <a href="https://youronlinechoices.eu/" target="_blank">
                here
              </a>
              .
            </p>
            <p>
              If you access the Site on your mobile device, you may not be able
              to control tracking technologies through the settings.
            </p>
            <p>
              <strong>12. </strong> <strong>SECURITY</strong>
            </p>
            <p>
              You use the Service at your own risk. We implement commercially
              reasonable technical, administrative, and organizational measures
              to protect Personal Information both online and offline from loss,
              misuse, and unauthorized access, disclosure, alteration, or
              destruction. However, no Internet or e-mail transmission is ever
              fully secure or error free. In particular, e-mail sent to or from
              us may not be secure. Therefore, you should take special care in
              deciding what information you send to us via the Service or
              e-mail. Please keep this in mind when disclosing any Personal
              Information to Courier via the Internet. In addition, we are not
              responsible for circumvention of any privacy settings or security
              measures contained on the Service, or third party websites.
            </p>
            <p>
              <strong>13. </strong> <strong>YOUR CHOICES</strong>
            </p>
            <p>
              In certain circumstances providing Personal Information is
              optional. However, if you choose not to provide Personal
              Information that is needed to use some features of our Service,
              you may be unable to use those features. You can also log in to
              your account or contact us to request updates or corrections to
              your Personal Information.
            </p>
            <p>
              <strong>13. CHANGES TO THE PRIVACY POLICY</strong>
            </p>
            <p>
              The Service and our business may change from time to time. As a
              result we may change this Privacy Policy at any time. When we do
              we will post an updated version on this page, unless another type
              of notice is required by the applicable law. By continuing to use
              our Service or providing us with Personal Information after we
              have posted an updated Privacy Policy, or notified you by other
              means if applicable, you consent to the revised Privacy Policy and
              practices described in it.
            </p>
            <p>
              <strong>14. CONTACT US</strong>
            </p>
            <p>
              If you have any questions about our Privacy Policy or information
              practices, please feel free to contact us at our designated
              request address:{" "}
              <a href="mailto:support@courier.com">support@courier.com</a>.
            </p>
          </PageWrapper>
        </Container>
      </Section>

      <Section>
        <TopDivider className="footer" bg="white">
          <Divider image={footerDivider} />
        </TopDivider>
        <Container bg="berry">
          <Footer />
        </Container>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;
