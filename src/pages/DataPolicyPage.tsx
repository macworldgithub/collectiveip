import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Database, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function DataPolicyPage() {
  const stakeholders = [
    "Current, past and prospective employees",
    "Customers",
    "Users of its websites",
    "Subscribers",
    "Other stakeholders",
  ];

  const rights = [
    "The right to be informed",
    "The right of access",
    "The right to rectification",
    "The right to erasure",
    "The right to restrict processing",
    "The right to data portability",
    "The right to object",
    "Rights in relation to automated decision making and profiling.",
  ];

  const timescales = [
    { request: "The right to be informed", timescale: "When data is collected (if supplied by data subject) or within one month (if not supplied by data subject)" },
    { request: "The right of access", timescale: "One month" },
    { request: "The right to rectification", timescale: "One month" },
    { request: "The right to erasure", timescale: "Without undue delay" },
    { request: "The right to restrict processing", timescale: "Without undue delay" },
    { request: "The right to data portability", timescale: "One month" },
    { request: "The right to object", timescale: "On receipt of objection" },
    { request: "Rights in relation to automated decision making and profiling.", timescale: "Not specified" },
  ];

  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-[#3B4041]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f3435]/95 via-[#2f3435]/85 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Database className="text-brand-300" size={24} />
            <span className="text-base font-bold text-brand-300 uppercase tracking-[0.25em]">
              COMPLIANCE & GOVERNANCE
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 max-w-3xl uppercase font-bold">
            DATA POLICY
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span>Data Collection Policy & Terms of Use</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
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
                  Policy Sections
                </h4>
                <nav className="flex flex-col gap-3">
                  <a
                    href="#introduction"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Introduction
                  </a>
                  <a
                    href="#gdpr"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.1 GDPR Statement
                  </a>
                  <a
                    href="#definitions"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.2 Definitions
                  </a>
                  <a
                    href="#principles"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.3 Core Principles
                  </a>
                  <a
                    href="#rights"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.4 Rights of Individuals
                  </a>
                  <a
                    href="#timescales"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    Timescales for Requests
                  </a>
                  <a
                    href="#lawfulness"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.5 Lawfulness of Processing
                  </a>
                  <a
                    href="#privacy-by-design"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.6 Privacy by Design
                  </a>
                  <a
                    href="#contracts-transfers"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.7 - 1.9 Contracts & DPO
                  </a>
                  <a
                    href="#breach-compliance"
                    className="text-sm text-slate-600 hover:text-[#70309d] transition-colors font-medium"
                  >
                    1.10 - 1.11 Breach & Compliance
                  </a>
                </nav>
              </div>
            </div>

            {/* Core Policy Content */}
            <div className="w-full lg:w-3/4 bg-white rounded-2xl border border-slate-100 p-8 md:p-12 shadow-sm space-y-12">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24 space-y-6">
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Introduction
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>
                    In its everyday business operations <strong>Collective IP Limited</strong> makes use of a variety of data about identifiable individuals, including data about:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                    {stakeholders.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <CheckCircle2 className="text-[#70309d] flex-shrink-0" size={16} />
                        <span className="text-slate-600 text-xs font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    In collecting and using this data, the organisation is subject to a variety of legislation controlling how such activities may be carried out and the safeguards that must be put in place to protect it.
                  </p>
                  <p>
                    The purpose of this policy is to set out the relevant legislation and to describe the steps Collective IP Limited is taking to ensure that it complies with it.
                  </p>
                  <p>
                    This control applies to all systems, people and processes that constitute the organisation’s information systems, including board members, directors, employees, suppliers and other third parties who have access to Collective IP Limited systems.
                  </p>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* 1.1 GDPR */}
              <section id="gdpr" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Section 1.1</span>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  The General Data Protection Regulation
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The General Data Protection Regulation 2016 (GDPR) is one of the most significant pieces of legislation affecting the way that H-Tech Supports Ltd carries out its information processing activities. Significant fines are applicable if a breach is deemed to have occurred under the GDPR, which is designed to protect the personal data of citizens of the European Union. It is Collective IP Limited’s policy to ensure that our compliance with the GDPR and other relevant legislation is clear and demonstrable at all times.
                </p>
              </section>

              {/* 1.2 Definitions */}
              <section id="definitions" className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Section 1.2</span>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Definitions
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  There are a total of 26 definitions listed within the GDPR and it is not appropriate to reproduce them all here. However, the most fundamental definitions with respect to this policy are as follows:
                </p>
                
                <div className="space-y-4">
                  <div className="p-5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-[#3B4041] uppercase tracking-wider mb-2">
                      Personal Data
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed italic">
                      "any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;"
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-[#3B4041] uppercase tracking-wider mb-2">
                      Processing
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed italic">
                      "any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;"
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-[#3B4041] uppercase tracking-wider mb-2">
                      Controller
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed italic">
                      "the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law;"
                    </p>
                  </div>
                </div>
              </section>

              {/* 1.3 Core Principles */}
              <section id="principles" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Section 1.3</span>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Principles Relating to Processing of Personal Data
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>There are a number of fundamental principles upon which the GDPR is based. These are as follows:</p>
                  
                  <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#3B4041]">(a) Lawfulness, Fairness and Transparency</h4>
                      <p className="text-slate-500 text-xs">Processed lawfully, fairly and in a transparent manner in relation to the data subject.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#3B4041]">(b) Purpose Limitation</h4>
                      <p className="text-slate-500 text-xs">Collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#3B4041]">(c) Data Minimisation</h4>
                      <p className="text-slate-500 text-xs">Adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#3B4041]">(d) Accuracy</h4>
                      <p className="text-slate-500 text-xs">Accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that inaccurate data are rectified or erased without delay.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#3B4041]">(e) Storage Limitation</h4>
                      <p className="text-slate-500 text-xs">Kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#3B4041]">(f) Integrity and Confidentiality</h4>
                      <p className="text-slate-500 text-xs">Processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage.</p>
                    </div>
                  </div>

                  <p className="font-semibold text-xs mt-6 text-slate-800 bg-slate-50 p-4 rounded-lg">
                    The controller shall be responsible for, and be able to demonstrate compliance with, these principles ("accountability"). Collective IP Limited ensures complete adherence both in current operations and in all future IT systems or processing developments.
                  </p>
                </div>
              </section>

              {/* 1.4 Rights of the Individual */}
              <section id="rights" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Section 1.4</span>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Rights of the Individual
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>The data subject possesses distinct rights under the GDPR. These include:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rights.map((right, idx) => (
                      <div key={idx} className="flex gap-3 p-4 bg-[#efefef]/50 rounded-xl border border-slate-200/50 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#937bbd] text-[#70309d] flex items-center justify-center text-xs font-bold font-heading">
                          {idx + 1}
                        </span>
                        <span className="text-slate-700 text-xs font-medium">{right}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-500 text-xs">
                    Each of these rights is supported by comprehensive processes within Collective IP Limited that ensure action is completed in alignment with the mandated timescales.
                  </p>
                </div>
              </section>

              {/* Timescales Table */}
              <section id="timescales" className="scroll-mt-24 space-y-4">
                <h3 className="font-heading text-lg font-bold text-[#3B4041] uppercase tracking-tight">
                  Table 1 – Timescales for data subject requests
                </h3>
                
                <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                        <th className="px-6 py-4">Data Subject Request</th>
                        <th className="px-6 py-4">Timescale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                      {timescales.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-700">{item.request}</td>
                          <td className="px-6 py-4 text-slate-500">{item.timescale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 1.5 Lawfulness of Processing */}
              <section id="lawfulness" className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Section 1.5</span>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Lawfulness of Processing
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>
                    There are six alternative ways in which the lawfulness of a specific case of processing of personal data may be established under the GDPR. It is Collective IP Limited’s policy to identify the appropriate basis for processing and to document it, in accordance with the Regulation.
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-wider">1.5.1 Consent</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Unless it is necessary for a reason allowable in the GDPR, Collective IP Limited will always obtain explicit consent from a data subject to collect and process their data. In case of children below the age of 16 parental consent will be obtained. Transparent information about our usage of their personal data will be provided to data subjects at the time that consent is obtained and their rights explained, including the right to withdraw consent. This information will be provided in an accessible form, written in clear language and free of charge. If not obtained directly from the data subject, information will be provided within a reasonable period and definitely within one month.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-wider">1.5.2 Performance of a Contract</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Where the personal data collected and processed are required to fulfil a contract with the data subject, explicit consent is not required. This applies in scenarios where the contract cannot be completed without the personal data in question (e.g., a delivery cannot be made without an address).
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-wider">1.5.3 Legal Obligation</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        If the personal data is required to comply with the law, explicit consent is not required. This is often the case for records relating to employment, taxation, and government filings.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-wider">1.5.4 Vital Interests of the Data Subject</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        In cases where processing is required to protect the vital interests of the data subject or of another natural person, this serves as the lawful basis. Collective IP Limited will retain documented evidence of this requirement whenever utilized.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-wider">1.5.5 Task Carried Out in the Public Interest</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Where Collective IP Limited needs to perform a task that it believes is in the public interest or as part of an official duty, consent is not requested. The assessment of the public interest will be fully documented and kept on record.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-2">
                      <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-wider">1.5.6 Legitimate Interests</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        If processing is in the legitimate interests of Collective IP Limited and does not affect the rights and freedoms of the data subject in a significant way, it can be defined as the lawful basis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 1.6 Privacy by Design */}
              <section id="privacy-by-design" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Section 1.6</span>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-tight">
                  Privacy by Design
                </h2>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>
                    Collective IP Limited has adopted the principle of privacy by design and will ensure that the definition and planning of all new or significantly changed systems that collect or process personal data will be subject to due consideration of privacy issues, including the completion of one or more data protection impact assessments.
                  </p>
                  <p>The data protection impact assessment will include:</p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-500">
                    <li>Consideration of how personal data will be processed and for what purposes</li>
                    <li>Assessment of whether the proposed processing of personal data is both necessary and proportionate to the purpose(s)</li>
                    <li>Assessment of the risks to individuals in processing the personal data</li>
                    <li>What controls are necessary to address the identified risks and demonstrate compliance with legislation</li>
                  </ul>
                  <p>Use of techniques such as data minimization and pseudonymisation will be considered where applicable and appropriate.</p>
                </div>
              </section>

              {/* 1.7 - 1.9 Contracts & DPO */}
              <section id="contracts-transfers" className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Sections 1.7 - 1.9</span>
                </div>
                
                <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#3B4041] uppercase tracking-tight">
                      1.7 Contracts Involving the Processing of Personal Data
                    </h3>
                    <p>
                      Collective IP Limited will ensure that all relationships it enters into that involve the processing of personal data are subject to a documented contract that includes the specific information and terms required by the GDPR.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#3B4041] uppercase tracking-tight">
                      1.8 International Transfers of Personal Data
                    </h3>
                    <p>
                      Transfers of personal data outside the European Union will be carefully reviewed prior to the transfer taking place to ensure that they fall within the limits imposed by the GDPR. This depends partly on the European Commission’s judgement as to the adequacy of the safeguards for personal data applicable in the receiving country and this may change over time.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#3B4041] uppercase tracking-tight">
                      1.9 Data Protection Officer
                    </h3>
                    <p>
                      A defined role of Data Protection Officer (DPO) is required under the GDPR if an organisation is a public authority, if it performs large scale monitoring or if it processes particularly sensitive types of data on a large scale. 
                    </p>
                    <p className="bg-slate-50 p-4 rounded-lg font-semibold text-xs border-l-4 border-slate-300 text-slate-500 mt-2">
                      Based on these criteria, Collective IP Limited does not require a Data Protection Officer to be appointed.
                    </p>
                  </div>
                </div>
              </section>

              {/* 1.10 - 1.11 Breach & Compliance */}
              <section id="breach-compliance" className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#70309d] uppercase tracking-widest">
                  <span>Sections 1.10 - 1.11</span>
                </div>

                <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#3B4041] uppercase tracking-tight">
                      1.10 Breach Notification
                    </h3>
                    <p>
                      It is Collective IP Limited’s policy to be fair and proportionate when considering the actions to be taken to inform affected parties regarding breaches of personal data. In line with the GDPR, where a breach is known to have occurred which is likely to result in a risk to the rights and freedoms of individuals, the relevant supervisory authority will be informed within 72 hours.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-bold text-[#3B4041] uppercase tracking-tight">
                      1.11 Addressing Compliance to the GDPR
                    </h3>
                    <p>
                      The following actions are undertaken to ensure that Collective IP Limited complies with the accountability principle of the GDPR:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-500">
                      <li>The legal basis for processing personal data is clear and unambiguous.</li>
                      <li>All staff involved in handling personal data understand their responsibilities for following good data protection practice.</li>
                      <li>Training in data protection has been provided to all staff.</li>
                      <li>Rules regarding consent are followed.</li>
                      <li>Routes are available to data subjects wishing to exercise their rights regarding personal data and such enquiries are handled effectively.</li>
                      <li>Regular reviews of procedures involving personal data are carried out.</li>
                      <li>Privacy by design is adopted for all new or changed systems and processes.</li>
                    </ul>

                    <div className="p-5 rounded-xl border border-slate-200/50 bg-[#efefef]/50 mt-4 space-y-2">
                      <h5 className="text-xs font-bold text-[#3B4041] uppercase tracking-wider">
                        Documented Processing Activities Recorded:
                      </h5>
                      <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1.5">
                        <li>Organisation name and relevant details</li>
                        <li>Purposes of the personal data processing</li>
                        <li>Categories of individuals and personal data processed</li>
                        <li>Categories of personal data recipients</li>
                        <li>Personal data retention schedules</li>
                        <li>Relevant technical and organisational controls in place</li>
                      </ul>
                    </div>
                    
                    <p className="text-xs text-slate-400 mt-4">
                      These actions are reviewed on a regular basis as part of the management process concerned with data protection.
                    </p>
                  </div>
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
