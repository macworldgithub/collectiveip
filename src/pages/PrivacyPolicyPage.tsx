import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Shield, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-[#3B4041]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f3435]/95 via-[#2f3435]/85 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-brand-300" size={24} />
            <span className="text-base font-bold text-brand-300 uppercase tracking-[0.25em]">
              LEGAL & TRUST
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 max-w-3xl uppercase">
            PRIVACY POLICY
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> Last updated: December 2024
            </span>
            <span>Collective IP Limited</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar / Quick Links */}
            <div className="w-full lg:w-1/4 lg:sticky lg:top-28 h-fit space-y-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-600 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Quick Navigation
                </h4>
                <nav className="flex flex-col gap-3">
                  <a
                    href="#information-collected"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Information Collected
                  </a>
                  <a
                    href="#use-of-information"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Use of Personal Info
                  </a>
                  <a
                    href="#use-of-cookies"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Use of Cookies
                  </a>
                  <a
                    href="#data-capture"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Data Capture Preferences
                  </a>
                  <a
                    href="#marketing"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Marketing Guidelines
                  </a>
                  <a
                    href="#disclosures"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Disclosures
                  </a>
                  <a
                    href="#other-websites"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Third-Party Sites
                  </a>
                  <a
                    href="#subject-access"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Subject Access Requests
                  </a>
                </nav>
              </div>

              {/* Direct Support */}
              <div className="bg-gradient-to-br from-[#70309d] to-[#5a2680] text-white rounded-xl p-6 shadow-md">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2">
                  Have Queries?
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  For questions concerning your personal information or our practices, feel free to reach out.
                </p>
                <a
                  href="mailto:contactus@collectiveip.co.uk"
                  className="inline-flex items-center gap-2 text-xs font-bold bg-white text-[#70309d] px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </div>

            {/* Core Policy Content */}
            <div className="w-full lg:w-3/4 bg-white rounded-2xl border border-slate-100 p-8 md:p-12 shadow-sm space-y-10">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-base leading-relaxed">
                  This Privacy Policy sets out the data processing practices carried out using the Internet and any other electronic communications networks by <strong>Collective IP Limited</strong>. If you have any requests concerning your personal information or any queries with regard to these practices, please contact Collective IP at{" "}
                  <a href="mailto:contactus@collectiveip.co.uk" className="text-[#70309d] font-semibold hover:underline">
                    contactus@collectiveip.co.uk
                  </a>
                  . Please note that all data thus captured will be used and held in accordance with the requirements of the Data Protection Act 1998.
                </p>
              </div>

              <hr className="border-slate-100" />

              {/* Section 1 */}
              <section id="information-collected" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-dark-default uppercase tracking-tight">
                  Information Collected
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>
                    Collective IP Limited does not collect personal information from you unless you provide it to us. This means that you can visit our site without telling us who you are or revealing any personally identifiable information about yourself.
                  </p>
                  <p>
                    When you supply information about yourself for a specific purpose (registering, asking for advice, making an enquiry), we use the information for that purpose only.
                  </p>
                  <p>
                    Our primary goal in collecting other information from you (for example by way of cookies see below) is so that we can provide you with a smooth, efficient, and customised experience. It allows us to provide services and features that most likely meet your needs and helps us to customise our service and the Site to make your browsing experience easier.
                  </p>
                  <p>
                    From time to time, we may also use your information to contact you for market research or to provide you with information we think would be of interest. We collect information from visitors to this website through the use of online forms, email hyperlinks, downloadable content and contact us webpages.
                  </p>
                  <p>
                    We may also use aggregate information and statistics, (which will not contain your identifying information) for the purposes of monitoring your usage of the Website in order to help us develop the Website, products and services offered by Collective IP Limited. We may provide such aggregate information to third parties.
                  </p>
                  <p>
                    We may collect information which is based upon your behaviour and navigation on our Website. This information allows Collective IP Limited to carry out internal research on the users’ interest, demographics and behaviour so that we can better understand, and in turn provide better information, products and services to you and other customers or Registered Users.
                  </p>
                </div>
                <div className="bg-slate-50 border-l-4 border-[#70309d] p-4 rounded-r-lg mt-4">
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    If you do not wish Collective IP Limited to send you any information set out in the above, please send an e-mail to{" "}
                    <a href="mailto:contactus@collectiveip.co.uk" className="text-[#70309d] hover:underline font-semibold">
                      contactus@collectiveip.co.uk
                    </a>
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="use-of-information" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-dark-default uppercase tracking-tight">
                  Use of Personal Information
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>We process personal information collected via this website for the purposes of:</p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-500">
                    <li>Providing information about products and services</li>
                    <li>Providing and personalising our services</li>
                    <li>Dealing with your enquiries and requests</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="use-of-cookies" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Use of Cookies
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our website uses ‘cookies and other technologies to collect information to assist in monitoring Collective IP’s web page flow, promotional effectiveness as well as to promote trust and safety. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.
                </p>
              </section>

              {/* Section 4 */}
              <section id="data-capture" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Data Capture Information
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We will send you information according to the preferences you submitted via our online forms. If you would like to change these preferences at any point, please email us at{" "}
                  <a href="mailto:contactus@collectiveip.co.uk" className="text-[#70309d] hover:underline font-semibold">
                    contactus@collectiveip.co.uk
                  </a>
                  .
                </p>
                <div className="bg-[#efefef]/50 border border-slate-200/60 p-4 rounded-xl flex items-start gap-4">
                  <MapPin className="text-[#70309d] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="text-xs font-bold text-[#3B4041] uppercase tracking-wider mb-1">
                      Postal Contact Address
                    </h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Collective IP Limited, Apex, 1 Watervole Way, Balby, Doncaster, DN4 5JP
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="marketing" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Marketing
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    Please note that your information may be used to send you details of those products or services that we offer that we have identified as likely to be of interest to you. This will be in the form of an email or by post and occasionally by a follow up telephone call. This will be in accordance with the preferences that you indicated when you completed the online form. We act strictly within the B2B guidelines.
                  </p>
                  <p>
                    If at any point you would like to opt-out of receiving communications from us or would like to change the channels (such as email or post) please email us at{" "}
                    <a href="mailto:contactus@collectiveip.co.uk" className="text-[#70309d] hover:underline font-semibold">
                      contactus@collectiveip.co.uk
                    </a>
                    . Alternatively, you can also write to us at the postal address listed above.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="disclosures" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Disclosures
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    We will only disclose data when obliged to disclose personal data by law, or the disclosure is ‘necessary’ for purposes of national security, taxation and criminal investigation, or we have your consent, and to the following:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-500">
                    <li>Business partners.</li>
                    <li>Suppliers we engage to process data on our behalf.</li>
                    <li>Successors in title to our business.</li>
                  </ul>
                  <p>
                    From time to time, as part of our service, we may pass your information to a data processor. This is done in accordance with the Data Protection Act 1998.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="other-websites" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Other Websites
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our website may contain links to other websites that are outside our control and are not covered by this Privacy Policy. If you access other sites using the links provided, the operators of these sites may collect information from you that will be used by them in accordance with their privacy policy, which may differ from ours.
                </p>
              </section>

              {/* Section 8 */}
              <section id="subject-access" className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Subject Access Requests
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You have the right to see what personal data we hold about you. To obtain a copy of the personal information we hold about you, please email us at{" "}
                  <a href="mailto:contactus@collectiveip.co.uk" className="text-[#70309d] hover:underline font-semibold">
                    contactus@collectiveip.co.uk
                  </a>{" "}
                  or write to us at the postal address listed above.
                </p>
              </section>

              {/* Section 9 */}
              <section className="scroll-mt-24 space-y-4">
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Internet-based transfers & Amendments
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>
                    Given that the Internet is a global environment, using it to collect and process personal data necessarily involves the transmission of data on an international basis. This means for instance that data you pass to us may be processed outside the European Economic Area, although the data will always be held securely and in line with the requirements of UK data protection legislation. By communicating electronically with us, you acknowledge and agree to our processing of personal data in this way.
                  </p>
                  <p>
                    Please note that this privacy policy is subject to change from time to time. It was last updated in December 2024.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
