import { number } from "yup";
import {
  Practice1,
  Practice2,
  Practice3,
  Practice4,
  Practice5,
  Practice6,
  Practice7,
} from "../features/home/assets/export-assets";

export const dataPracticeAreas = [
  {
    id: 1,
    title: "Tax & Customs",
    slug: "tax-and-custom",
    ourPeople: [1, 3, 5],
    image: Practice6,
    description: {
      first_line:
        "<p>Our Tax & Customs practice is dedicated to helping clients navigate complex, ever-changing, and often conflicting tax & customs regulations. We guide businesses on fiscal and non-fiscal regulations, duties, taxes, and the penalties and consequences of non-compliance. Also, we track duty risks and identify potential tax deductions.</p>",
      second_line:
        "<p>Our team comprises industry specialists, accountants, lawyers, supply chain experts, and economists with deep knowledge of tax & customs policies, national regulations, and practices. Our team is also versed in dealing with indirect tax issues, such as those related to VAT and import taxes.</p> <p>Our team offers skilled guidance on structuring supply chains and arrangements related to tax advisory and structures, production, import, distribution, and transportation of goods and services, both domestically and internationally. Our tax & customs advisory team helps clients manage taxes and mitigate risks associated with supply chain restructuring and M&A.</p>",
    },
    specialistServiceArea: [
      {
        id: 1,
        number: "01",
        title: "Tax Advisory and Planning",
        list: [
          "Tax planning strategies to minimize liabilities and maximize opportunities.",
          "Guidance on domestic and international tax regulations.",
          "Structuring transactions (including mergers and acquisitions) to ensure tax efficiency.",
          "Advice on Indonesian tax compliance requirements.",
          "Advising and assisting clients in application for tax incentives to the Indonesian authorities.",
        ],
      },
      {
        id: 2,
        number: "02",
        title: "Tax Dispute & Resolution Services",
        list: [
          "Representing clients in tax appeal in the Tax Court.",
          "Assisting clients in civil review process in the Supreme Court.",
        ],
      },
      {
        id: 3,
        number: "03",
        title: "Customs Review",
        list: [
          "Conducting portfolio review on custom valuation, tariff classification, customs management of import facility, free trade agreements, royalty, procedures and customs documents on a sampling basis",
          "Conducting portfolio review on custom valuation, tariff classification, customs management of import facility, free trade agreements, royalty, procedures and customs documents on a sampling basis",
        ],
      },
      {
        id: 4,
        number: "04",
        title: "Customs Dispute",
        list: [
          "Representing the client before the Tax Court, including the preparation of subsequent submissions as required during the proceedings",
          "Drafting and submitting the customs appeal letter to the Tax Court",
        ],
      },
      {
        id: 5,
        number: "05",
        title: "Tax Audit & Objection Assistance",
        list: [
          "Supporting clients in tax audits, tax objection, and tax crime investigations.",
          "Assisting clients in general communication with the Indonesian tax authorities.",
          "Providing comments and recommendations on the audit and objections results to the Client.",
        ],
      },
      {
        id: 6,
        number: "06",
        title: "Customs Audit",
        list: [
          "Reviewing the customs auditor’s working paper and preparing confirmation to the findings",
          "Attending the closing conference meeting with the Client’s representative",
          "Providing comments and recommendations on the audit results (e.g. whether to accept or to lodge a letter of appeal for the assessment) to the Client",
        ],
      },
      {
        id: 7,
        number: "07",
        title: "Customs Valuation & Classification",
        list: [
          "Identifying and analyzing the appropriate national tariff classification code",
          "Provide assistance regarding Pre-Entry Classification Letter from Customs Authority",
          "Analyze the agreement and cost of the royalty, proceed, assist and future price",
          "Analyze and review the cost that should be added to customs value such as freight and insurance",
          "Voluntary declaration: estimate the amount of customs value that should be added, and to prevent underpayment and/or overpayment of import duties and taxes",
          "Voluntary payment: Calculate the difference between Voluntary Declaration and Current Sales of the company to mitigate the risk of underpayment",
        ],
      },
    ],
    notableCredentials: [
      {
        title: "US based Technology, Media, and Telecom Company	",
        description:
          "Advising the client on the Indonesian tax implications in relation to its global restructuring plan.",
      },
      {
        title: "US based Data Hosting Service Provider",
        description:
          "Advising a US-based data hosting service provider on the tax implications and potential risk in relation to setting up a data center in Indonesia.",
      },
      {
        title: "Holding Company of an Indonesian Retail Group",
        description:
          "Advising the client on its acquisition by a venture capital firm, providing tax-efficient solutions throughout the transaction.",
      },
      {
        title: "Indian Manufacturer Automotive Industry",
        description:
          "Advising the client on its acquisition by a venture capital firm, providing tax-efficient solutions throughout the transaction.",
      },
      {
        title: "Japan based Trading Company",
        description:
          "Assisting clients in the process of filing the private ruling regarding prepaid tax article 22 related to importation transaction.",
      },
      {
        title: "Multiple Multinational Clients",
        description:
          "Advising clients regarding property and land tax concerning the sale of assets and share transfers.",
      },
      {
        title: "French based Gas Producer",
        description:
          "Assisting the client in filing a Civil Review regarding the purchase and sale of asset infrastructure for gas distribution in special industrial zones.",
      },
      {
        title: "German based Pet Food Company",
        description:
          "Assisting the client in its tax audit process in Indonesia.",
      },
      {
        title: "Various Multinational Oil & Gas Companies",
        description:
          "Representing various oil & gas companies in the Tax Court on tax disputes due to interpretation of a Production Sharing Contract.",
      },
      {
        title: "Various Mining Companies",
        description:
          "Representing various mining companies in the Tax Court and Supreme Court",
      },
      {
        title: "A financial data provider company",
        description:
          "Representing the client in the Tax Court related to the client’s Transfer Pricing dispute",
      },
      {
        title: "US based Technology Company",
        description:
          "Assisting in relation to an importation license matter. Our role was to ensure that the client complies with the export/import regulation in Indonesia.",
      },
      {
        title: "US based Cloud Company",
        description:
          "Advising client for the import of intangible goods and rack assist valuation to comply with the principle of customs valuation.",
      },
      {
        title: "German based Chemical Company",
        description:
          "Representing the client in appeal to the Tax Court on HS codes classification, customs valuation and Free Trade Agreements.",
      },
      {
        title: "Several Multinational Clients (Customs Review)",
        description:
          "Conducting portfolio review and due diligence which covers customs valuation, tariff classification, customs management of import facility, free trade agreements, royalty, proceeds, type & quantity and customs documents on sampling basis. Furthermore, analyzing the possible non-compliance risks and potential penalties and providing recommendations for improvement.",
      },
      {
        title: "Global Cloud Company",
        description:
          "Assisting the client during customs audit which performed by customs authorities e.g., assessment on the dutiable of software, royalties on imported products, the fulfillment of Free Trade Agreement provisions, e.g., Certificate of Origin, and  the classification of imported products.",
      },
      {
        title: "Multinational technology Company",
        description: "Advising the client for Indonesian digital service tax.",
      },
      {
        title: "German EV Manufacturer",
        description:
          "Advising the import duty and taxes for Reagents products and the export of a mixed nickel-cobalt hydroxide precipitate (MHP) from the proposed joint venture structure.",
      },
    ],
  },
  {
    id: 2,
    title: "Trade & Logistics",
    slug: "trade-and-logistics",
    image: Practice7,
    ourPeople: [1, 2, 3, 4, 5],
    description: {
      first_line:
        "<p>Our full-service Trade and Logistics practice advises clients in various industries (e.g., Retail, FMCG, Automotive) on supply chain management and structure, regulatory compliance and operation, business licensing, export and import, manufacturing, trade remedies (anti-dumping), inbound investment, and WTA and FTA.</p>",
      second_line:
        "<p>We focus on assisting companies to reduce international trade costs, mitigate import/export risks, and improve supply chain efficiency. Our team has a proven track record of success in dealing with influential government authorities. In addition, our team is well equipped with extensive experience handling trade-related disputes, including anti-dumping measures, consumer protection law, product recalls, and contractual disputes.</p>",
    },
    specialistServiceArea: [
      {
        id: 1,
        number: "01",
        title: "Anti-dumping investigation",
        list: [
          "Review completed exporter/producer questionnaire response, supporting documentation and advice regarding the same prior to submission to KADI to ensure accuracy and veracity of response and supporting documentation",
          "Provide legal advice and assistance on Indonesian anti-dumping law issues and regulations arising throughout the course of investigation",
          "Conduct assessment of the preliminary estimated dumping margin",
        ],
      },
      {
        id: 2,
        number: "02",
        title: "Import/Export Regulatory, Advice, and Dispute",
        list: [
          "Provide advice and guidelines regarding the import/export process in Indonesia, including any possible exemptions, rulings/accommodations that clients can obtain.",
          "Identify and analyze the requirements for the import/export of clients' products in Indonesia.",
          "Handling disputes and investigation arising from cross-border trade activities, including issues related to jurisdiction, applicable law, and enforcement of judgments.",
        ],
      },
      {
        id: 3,
        number: "03",
        title: "FTA Saving Program",
        list: [
          "Identifying the Preferential Tariff (FTA Tariff) for goods to be imported",
          "Identifying and classifying Rules of Origin criteria",
          "Obtaining written confirmation on the willingness of the vendor to utilize the free trade agreement; Periodic review of FTA process and procedures",
        ],
      },
      {
        id: 4,
        number: "04",
        title: "Supply Chain Structuring and Optimization",
        list: [
          "Advising on tailored structure and strategies to optimize supply chain operations, including the use of import/export facilities.",
          "Drafting and negotiating agreements with third-party logistics providers to ensure correctness, efficient and cost-effective proceeding.",
        ],
      },
    ],
    notableCredentials: [
      {
        title: "US based Cloud Company",
        description:
          "Advising on the post border audit mechanism and representing the client during post border investigation.",
      },
      {
        title: "US based Electricity Company",
        description:
          "Assisting and providing a US based electricity company on issues related to importation and distribution of remanufactured machinery and components to Indonesia.",
      },
      {
        title: "Global Optical Manufacturer Company",
        description:
          "Advising the client in relation to the restructuring of its supply chain by exploring several alternatives. We provided assessments of the proposed alternatives and suggested solutions.",
      },
      {
        title: "Multinational Chemical Company",
        description:
          "Assisting Indonesian Prominent Cosmetic Group in relation to their business setup in overseas. Advising in their supply chain structure and export procedure.",
      },
      {
        title: "Cross Border E-Commerce",
        description:
          "Assisting clients in the process of filing the private ruling regarding prepaid tax article 22 related to importation transaction.",
      },
      {
        title: "US based Health Nutrition Company",
        description:
          "Advising and assisting client in setting up direct selling business company (MLM) in Indonesia, e.g. health (food and nutrition) and consumer goods products.",
      },
      {
        title: "US based Big CC Motorcycle",
        description:
          "Assisting the client that engage in motorcycle manufacturer in restructuring its distribution operation in Indonesia as result of termination of its local agency/distribution agreement.",
      },
      {
        title: "Singaporean based Logistics Company",
        description: `Assisting and providing a logistics, warehousing and trade finance facilitation service company with legal advice in relation to establishment of a Bonded Logistic Center ("BLC").`,
      },
      {
        title: "US based Transportation Company",
        description:
          "We provided legal advice on the main regulation governing BLC by providing warehouse storage and logistics services.",
      },
      {
        title: "US based Furniture Manufacturer",
        description:
          "Advising the export/import requirement and change of manufacturing entity and how it will impact the license.",
      },
      {
        title: "US based Mobile phone/Electronic Company",
        description:
          "Representing clients in discussions and negotiations with the Ministry of Trade and Ministry of Industry on the implementation of import restrictions their products",
      },
      {
        title: "A well-known Flavoring Company",
        description:
          "Advising in restructuring of their supply chain including maximizing the FTA benefits.",
      },
      {
        title: "Several International Logistics Companies",
        description:
          "Advising in relation to establishment of customs and investments facilities for clients (e.g., Masterlist, Bonded Logistic Center).",
      },
      {
        title:
          "Japanese based Company engaged in Manufacturing and Sale of Automobile Components",
        description:
          "Assisting Japanese based company engaged in manufacturing and sale of automobile components related to possible supply chain restructuring. Also, advising in relation to establishment of investments facilities for clients (e.g., Masterlist, Bonded Logistic Center).",
      },
      {
        title: "EU’s member state",
        description:
          "Advising and assisting the EU Delegation in Indonesia to conduct preparation for the bilateral trade agreement with Indonesia. This included providing relevant information for negotiation and conducting presentation before the EU countries representative.",
      },
    ],
  },
  {
    id: 3,
    title: "Antirust & Competition",
    slug: "antirust-and-competition",
    image: Practice1,
    ourPeople: [4],
    description: {
      first_line:
        "<p>Anagata’s Antitrust and Competition Practice offers a comprehensive range of legal services to help clients navigate the intricate landscape of antitrust laws and regulations, ensuring compliance and safeguarding their business interests.</p>",
      second_line:
        "<p>We guide clients through the process of obtaining merger clearance, obtaining competition compliance certification, structuring their business processes and transactions to comply with competition law. We also represent clients in facing antitrust investigations.</p>",
    },
    specialistServiceArea: [
      {
        id: 1,
        number: "01",
        title: "Merger Control",
        list: [
          "Advising clients on application of merger control thresholds to transactions.",
          "Assisting clients in drafting transaction documents to comply with and anticipate impact of merger filing requirements.",
          "Preparing and submitting merger filing submissions.",
          "Representing clients before Indonesian Competition Commission (ICC) to address ICC’s  objection to transactions.",
          "Representing clients before ICC in handling investigations into late merger filing.",
        ],
      },
      {
        id: 2,
        number: "02",
        title: "Compliance Certification",
        list: [
          "Assisting clients in designing and implementing compliance policies.",
          "Assisting clients in applying to ICC to certify its competition compliance policy.",
        ],
      },
      {
        id: 3,
        number: "03",
        title: "Competition Investigations",
        list: [
          "Assisting and representing clients in reporting suspected violations of competition law to ICC.",
          "Representing clients in handling all stages of investigations of ICC as witness or accused party.",
          "Representing clients in concluding compliance and change of behavior agreements with ICC to avoid penalty.",
          "Representing clients before Courts to appeal ICC decisions, up to the Supreme Court level.",
          "Representing clients in handling ICC investigation into their partnership with small, micro and medium-sized businesses.",
        ],
      },
      {
        id: 4,
        number: "04",
        title: "Advisory Services",
        list: [
          "Drafting contracts and transaction documents to comply with competition law and minimize risk of challenge.",
          "Advising clients on competition compliance aspect of all commercial transactions and business planning, including licensing arrangements, ,distributorships, joint ventures, cooperation with competitors.",
        ],
      },
    ],
    notableCredentials: [
      {
        title: "Multinational Social Media Company",
        description:
          "Assisting client in handling an ICC investigation of alleged monopolistic practices in relation to its app store business.",
      },
      {
        title: "Multinational wireless telecommunication company",
        description:
          "Assisting clients on Indonesian competition law aspects of its acquisition of a major Indonesian cellular and internet services provider, including advising it on the application of Indonesian merger control regulations on this transaction.",
      },
      {
        title: "Japan-based multinational automotive parts supplier",
        description:
          "Assisting client in submitting a report of potential violation of competition law. Later  assisting client in handling an ICC investigation arising from this report and concluding a compliance pact and handling a compliance certification to avoid imposition of penalties.",
      },
      {
        title: "US-based private equity funds",
        description:
          "Representing client in handling an ICC investigation accusing it submitting merger filing late.",
      },
      {
        title: "Japan-based multinational in financing",
        description:
          "Representing client in handling an ICC investigation accusing it submitting merger filing late.",
      },
      {
        title: "France-based Multinational in Pharmacy",
        description:
          "Advising client on compliance of their distribution arrangements with Indonesian competition law.",
      },
      {
        title: "Multinational in Oil and Gas Services",
        description:
          "Representing client in handling ICC investigation alleging tender fixing in its procurement process.",
      },
    ],
  },
  {
    id: 4,
    title: "Corporate Commercial & Compliance",
    slug: "corporate-commercial-and-compliance",
    image: Practice2,
    ourPeople: [2, 3, 4],
    description: {
      first_line:
        "<p>Anagata’s Corporate Commercial & Compliance practice provides comprehensive legal services to businesses, ensuring they operate within the legal frameworks and adhere to regulatory standards.</p>",
      second_line:
        "<p>Our end-to-end services guide businesses through the complexities of regulations to ensure compliance with legal and regulatory requirements and mitigate potential legal and regulatory risks, helping businesses maintain operational integrity.</p>",
    },
    specialistServiceArea: [
      {
        id: 1,
        number: "01",
        title: "Foreign Investment and Business Incorporation",
        list: [
          "<b><u>Business Establishment:</u></b> Advising, Structuring and Establishing new business entities or vessels (e.g., like limited liability companies and representative offices). ",
          "<b><u>End-to-End Corporate Services:</u></b> Providing a full scope of corporate services, from establishment, structure changes to management, capital and business activities, including handling licensing applications, drafting, reviewing and negotiating operational contract, up to facilitate the company closure (revoking licenses and managing all necessary reporting).",
        ],
      },
      {
        id: 2,
        number: "02",
        title: "Regulatory Compliance and Corporate Governance",
        list: [
          "<b><u>Compliance Program Development:</u></b> Designing and implementing comprehensive compliance programs tailored to the specific needs of the organization, including policies, procedures, and training.",
          "<b><u>Regulatory Audits and Assessments:</u></b> Conducting thorough audits, assessments and internal investigation to ensure compliance with relevant laws and regulations, identifying potential risks, and recommending corrective actions.",
          "<b><u>Regulatory Reporting:</u></b> Assisting with the preparation and submission of required regulatory reports and filings to ensure timely and accurate compliance.",
          "<b><u>Data Protection Compliance:</u></b> Ensuring compliance with data protection laws and regulations, including GDPR and other relevant frameworks.",
        ],
      },
      {
        id: 3,
        number: "03",
        title: "Strategic Planning and Advisory",
        list: [
          "<b><u>Market Entry Strategy:</u></b> Developing strategies for entering new markets, including analysis of market conditions, competitive landscape, and regulatory environment.",
          "<b><u>Risk Assessments:</u></b> Identifying and assessing potential compliance risks and developing strategies to mitigate those risks.",
          "<b><u>Crisis Management:</u></b> Providing support and guidance during compliance crises, including developing response plans and managing communications with stakeholders.",
        ],
      },
      {
        id: 4,
        number: "04",
        title: "Training and Education",
        list: [
          "<b><u>Compliance Training Programs:</u></b> Developing and delivering training programs to educate employees on compliance requirements and best practices.",
          "<b><u>Workshops and Seminars:</u></b> Conducting workshops and seminars on specific compliance topics to enhance awareness and understanding within the organization.",
        ],
      },
    ],
    notableCredentials: [
      {
        title: "US based Electricity Company",
        description:
          "Advising and assisting client in multiple corporate matters in relation to its Joint Venture operation in Indonesia, including company compliances, GMS, company restructuring, supply chain, contract, and insurance. ",
      },
      {
        title: "Global Optical Manufacturer Company",
        description:
          "Advising the client in relation to the restructuring of its businesses in Indonesia. We provided assessments of the proposed alternatives and suggested solutions.",
      },
      {
        title: "Well-known Indonesian FMCG Company",
        description:
          "Assisting clients in multiple matters, including business expansion, set up it is trading business overseas (cross-border e-commerce).",
      },
      {
        title: "US based Transportation Company",
        description:
          "Assisting the Company in the process of obtaining business licenses to enable the Company to operate in Indonesia.",
      },
      {
        title: "Multinational Health and Lifestyle Products Companies",
        description:
          "Advising and assisting clients in setting up their operation in Indonesian, and others general corporate matters (e.g., E-commerce business set-up, business expansion.",
      },
      {
        title: "World Bank Group",
        description:
          "Advising the World Bank Group’s Business Ready (B-READY) project and assessing the business and investment climates.",
      },
      {
        title: "Cross Border E-Commerce",
        description:
          "Assisting Indonesian Prominent Cosmetic Group in relation to their business setup in overseas. Advising in their supply chain structure and export procedure.",
      },
    ],
  },
  {
    id: 5,
    title: "Corporate M&A (Merger & Acquisition)",
    slug: "corporate-ma-merger-acquisition",
    image: Practice4,
    ourPeople: [1, 2, 3, 4],
    description: {
      first_line:
        "<p>Anagata’s Corporate Mergers & Acquisitions (M&A) practice offers expert legal services to businesses navigating the complexities of mergers, acquisitions, and other commercial transactions. including industry-specific transactions.</p>",
      second_line:
        "<p>Our experienced lawyers provide strategic advice and exhaustive support throughout every stage of the transaction process, ensuring successful and compliant transactions to safeguard our clients’ interests.</p>",
    },
    specialistServiceArea: [
      {
        id: 1,
        number: "01",
        title: "Transaction Advisory and Implementation",
        list: [
          "<b>Due Diligence:</b> Conducting thorough investigations into the legal, and operational aspects of the target company to identify potential risks and opportunities.",
          "<b>Deal Structuring:</b> Advising on the optimal structure for the transaction, including tax implications and regulatory considerations.",
          "<b>JV Structuring:</b> Assisting in the structuring, negotiation, and documentation of joint ventures and strategic alliances.",
          "<b>Drafting and Execution of Transaction Documents:</b> Assisting in preparing the necessary transaction documents to implement the transaction.",
        ],
      },
      {
        id: 2,
        number: "02",
        title: "Industry-Specific Transaction & Cross Border M&A",
        list: [
          "<b>International Deal Advisory:</b> Providing expertise in navigating the legal, regulatory, of cross-border transactions.",
          "<b>Global Tax Planning:</b> Advising on tax-efficient structures for international deals to optimize the overall tax position of the transaction.",
          "<b>Industry-Specific M&A and Transaction:</b> Providing tailored M&A and transaction services across various industries, ensuring that each transaction is executed with precision, aligning with the unique needs and goals of our clients in these sectors.",
        ],
      },
    ],
    notableCredentials: [
      {
        title: "German based pet food and healthcare company",
        description:
          "Advising and assisting client in Acquisition and Merger transaction of its entities in Indonesia. Including general corporate matters, e.g., GMS, business expansion.",
      },
      {
        title: "US based Big CC Motorcycle",
        description:
          "Assisting the client in multiple matters, including, employment, supply chain structure, and company restructuring.",
      },
      {
        title: "Well-known Indonesian FMCG Company",
        description:
          "Assisting client in multiple matters, including business expansion, setup it is trading business overseas (cross-border e-commerce).",
      },
      {
        title: "Japanese based FMCG company",
        description:
          "Assisting client in multiple corporation matters, including Merger and Acquisition initiative of its JV in Indonesia",
      },
      {
        title: "US based Furniture Manufacturer",
        description:
          "Advising client in business restructuring of its manufacturing entity and how it will impact the operation.",
      },
      {
        title: "Global Medical Devices Company",
        description:
          "Assisting client in its global business spin-off. Advising on the impact of global restructuring in its business in Indonesia.",
      },
      {
        title: "Cross Border E-Commerce",
        description:
          "Assisting Indonesian Prominent Cosmetic Group in relation to their business setup in overseas. Advising in their supply chain structure and export procedure",
      },
    ],
  },
  {
    id: 6,
    title: "Intellectual Property",
    slug: "intellectual-property",
    image: Practice5,
    ourPeople: [5, 6],
    description: {
      first_line:
        "<p>Anagata’s Intellectual Property (IP) Practice is dedicated to protecting clients' intellectual property rights. We offer a range of services to help safeguard innovations, brands, and creative works.</p>",
      second_line:
        "<p>Our team secures and enforces trademark protection for brands, Trademark ownership transfer, advises on copyright registration, licensing, and enforcement for creative works, and develops policies and strategies to protect confidential business information.</p>",
    },
    specialistServiceArea: [
      {
        id: 1,
        number: "01",
        title: "Trademark",
        list: [
          "Assisting client in trademark registration matters",
          "Assisting client in trademark opposition against 3rd party trademark registration",
          "Assisting client in trademark rebuttal against the trademark opposition by 3rd party ",
          "Assisting client in response against trademark refusal by DGIP.",
          "Assisting client in trademark appeal process.",
          "Assisting client in trademark transfer process",
        ],
      },
      {
        id: 2,
        number: "02",
        title: "Design Industry",
        list: [
          "Assisting client in Design industrial registration matters",
          "Assisting client in design industrial appeal as response after the refusal by DGIP.",
          "Assisting client in design industry transfer process",
        ],
      },
      {
        id: 3,
        number: "03",
        title: "Copyright",
        list: [
          "Assisting client in copyright registration",
          "Assisting client in copyright transfer process",
        ],
      },
      {
        id: 4,
        number: "04",
        title: "Licensing",
        list: [
          "Assisting client in all IPR recordation matters",
          "Assisting client in drafting for IPR licensing agreement",
        ],
      },
    ],
    notableCredentials: [
      {
        title: "Poland based Air Balloon Producer",
        description:
          "Assisting clients in the process of filing the Trademark registration process.",
      },
      {
        title: "China Based Global Video Game Company",
        description:
          "Assisting clients in the process of Rebuttal for trademark opposition process by another video game company.",
      },
      {
        title: "Bali based resort",
        description:
          "Assisting clients in the process of handling the Trademark licensing process.",
      },
      {
        title: "France based company",
        description:
          "Assisting client in multiple corporation matters, including Merger and Acquisition initiative of its JV in Indonesia",
      },
      {
        title: "China global cosmetics company",
        description:
          "Assisting clients in registering licensing matters and trademark registration.",
      },
      {
        title: "Malaysia communication company",
        description: "Assisting clients in registering trademark",
      },
      {
        title: "US Global F&B Company",
        description: "Assisting clients in registering trademark",
      },
      {
        title: "Indonesian based international animator",
        description:
          "Assisting clients in registering trademark, copyright and drafting the client cooperation contract.",
      },
      {
        title: "Indonesian radio group",
        description: "Assisting clients in registering trademark.",
      },
    ],
  },
];
