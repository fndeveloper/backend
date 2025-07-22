const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy T-shirt data (simulated in-memory "database")
const tshirts = [
  {
    id: 1,
    name: "Classic White Tee",
    size: "M",
    color: "White",
    price: 999,
    inStock: true
  },
  {
    id: 2,
    name: "Black V-Neck",
    size: "L",
    color: "Black",
    price: 1199,
    inStock: true
  },
  {
    id: 3,
    name: "Graphic Tee",
    size: "S",
    color: "Blue",
    price: 899,
    inStock: false
  }
];

// ✅ POST Route — Save new T-shirt
app.post('/tshirt', (req, res) => {
  try {
    const newTshirt = req.body;
    newTshirt.id = Date.now(); // simple unique ID
    tshirts.push(newTshirt);

    console.log('✅ New T-shirt added:', newTshirt);
    res.json({ message: '✅ T-shirt saved successfully!', data: newTshirt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET Route — Fetch all T-shirts
app.get('/tshirt', (req, res) => {
  try {
    res.json(tshirts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

//   <div class="accordion" id="grcAccordion">

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-1">
//               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
//                   ISO 31000: Risk Management
//               </button>
//           </h2>
//           <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> This standard provides guidelines for establishing a risk management framework and process for organizations.<br>
//                   <strong>Key Focus:</strong> Risk identification, assessment, treatment, and monitoring. It is applicable across all sectors and can be used by any organization.<br>
//                   <strong>Benefits:</strong> Helps organizations proactively identify and manage risks, improve decision-making, and integrate risk management into strategic and operational activities.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-2">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
//                   ISO 37001: Anti-Bribery Management Systems
//               </button>
//           </h2>
//           <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> ISO 37001 helps organizations prevent, detect, and address bribery. It provides a framework for implementing anti-bribery policies and procedures.<br>
//                   <strong>Key Focus:</strong> Compliance with anti-bribery laws, risk assessments, internal controls, and awareness training.<br>
//                   <strong>Benefits:</strong> Strengthens ethical practices, reduces exposure to bribery risks, and enhances corporate integrity.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-3">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
//                   ISO 27001: Information Security Management
//               </button>
//           </h2>
//           <div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> Focuses on the establishment, implementation, maintenance, and improvement of an Information Security Management System (ISMS).<br>
//                   <strong>Key Focus:</strong> Confidentiality, integrity, and availability of information through risk-based approaches, ensuring protection from security threats.<br>
//                   <strong>Benefits:</strong> Protects sensitive data, boosts customer confidence, ensures compliance with security regulations, and mitigates cyber threats.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-4">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
//                   ISO 37301: Compliance Management Systems
//               </button>
//           </h2>
//           <div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> Provides a framework for managing compliance risks, ensuring adherence to laws, regulations, and internal policies.<br>
//                   <strong>Key Focus:</strong> Establishing processes for monitoring, reporting, and reviewing compliance performance.<br>
//                   <strong>Benefits:</strong> Enables organizations to create a systematic approach to compliance, reducing the risk of legal penalties, fines, and reputational damage.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-5">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
//                   COSO ERM - Enterprise Risk Management
//               </button>
//           </h2>
//           <div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> A widely recognized standard for managing enterprise-wide risks, particularly in the context of governance and internal controls.<br>
//                   <strong>Key Focus:</strong> Strategy, governance, performance, risk assessment, and risk management across an organization’s operations.<br>
//                   <strong>Benefits:</strong> Supports organizations in achieving objectives, ensuring effective risk management, and enhancing stakeholder value.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-6">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
//                   NIST Frameworks (National Institute of Standards and Technology)
//               </button>
//           </h2>
//           <div id="collapse-6" class="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> NIST provides multiple frameworks, with the Cybersecurity Framework (CSF) being the most widely used.<br>
//                   <strong>Key Focus:</strong> Identify, Protect, Detect, Respond, Recover—strategic guidance for improving the security of IT systems and protecting critical infrastructure.<br>
//                   <strong>Benefits:</strong> Helps organizations implement cybersecurity best practices, comply with industry standards, and manage risks associated with IT infrastructure.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-7">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
//                   COBIT
//               </button>
//           </h2>
//           <div id="collapse-7" class="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> COBIT provides a comprehensive framework for IT governance and management.<br>
//                   <strong>Key Focus:</strong> Aligning IT objectives with business goals, ensuring value delivery, and managing risks.<br>
//                   <strong>Benefits:</strong> Enables IT departments to operate more efficiently, align technology with business objectives, and ensure compliance with regulatory and internal standards.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-8">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
//                   ITIL
//               </button>
//           </h2>
//           <div id="collapse-8" class="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> A framework for IT service management that focuses on aligning IT services with the needs of the business.<br>
//                   <strong>Key Focus:</strong> Service lifecycle, continuous improvement, and IT process management.<br>
//                   <strong>Benefits:</strong> Improves IT service delivery, reduces costs, enhances customer satisfaction, and ensures compliance with IT governance standards.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-9">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
//                   PCI DSS (Payment Card Industry Data Security Standard)
//               </button>
//           </h2>
//           <div id="collapse-9" class="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> Provides a set of security standards for handling payment card data to ensure secure transactions and protect customer information.<br>
//                   <strong>Key Focus:</strong> Data security, access control, encryption, and transaction monitoring.<br>
//                   <strong>Benefits:</strong> Helps organizations protect sensitive cardholder information, avoid penalties for non-compliance, and maintain trust with customers.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-10">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">
//                   HIPAA - Health Insurance Portability and Accountability Act
//               </button>
//           </h2>
//           <div id="collapse-10" class="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> Provides national standards for the protection of health information in the healthcare sector, ensuring privacy and security of patient data.<br>
//                   <strong>Key Focus:</strong> Data privacy, confidentiality, and secure sharing of health-related information.<br>
//                   <strong>Benefits:</strong> Ensures compliance with healthcare privacy laws, mitigates risk to patient data, and avoids costly penalties.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-11">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="false" aria-controls="collapse-11">
//                   GDPR - General Data Protection Regulation
//               </button>
//           </h2>
//           <div id="collapse-11" class="accordion-collapse collapse" aria-labelledby="heading-11" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> Comprehensive regulation that governs the collection, storage, and processing of personal data of individuals within the European Union.<br>
//                   <strong>Key Focus:</strong> Data privacy, consent, transparency, and breach notification.<br>
//                   <strong>Benefits:</strong> Ensures compliance with European data protection standards, avoids hefty fines, and fosters trust with customers regarding data handling.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-12">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-12" aria-expanded="false" aria-controls="collapse-12">
//                   TOGAF (The Open Group Architecture Framework)
//               </button>
//           </h2>
//           <div id="collapse-12" class="accordion-collapse collapse" aria-labelledby="heading-12" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> An enterprise architecture framework that assists in the design, planning, implementation, and governance of enterprise architecture.<br>
//                   <strong>Key Focus:</strong> Ensures that IT architecture supports business goals and objectives, and facilitates digital transformation.<br>
//                   <strong>Benefits:</strong> Enhances IT-business alignment, improves decision-making, and optimizes resource usage for long-term strategic goals.
//               </div>
//           </div>
//       </div>

//       <div class="accordion-item">
//           <h2 class="accordion-header" id="heading-13">
//               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-13" aria-expanded="false" aria-controls="collapse-13">
//                   CMMI (Capability Maturity Model Integration)
//               </button>
//           </h2>
//           <div id="collapse-13" class="accordion-collapse collapse" aria-labelledby="heading-13" data-bs-parent="#grcAccordion">
//               <div class="accordion-body">
//                   <strong>Purpose:</strong> CMMI is a framework designed for improving and optimizing processes in an organization, particularly in software development and service management.<br>
//                   <strong>Key Focus:</strong> Process maturity, continuous improvement, and optimizing performance across business units.<br>
//                   <strong>Benefits:</strong> Increases process efficiency, ensures consistent quality in service delivery, and provides a structured path for continuous improvement.
//               </div>
//           </div>
//       </div>

//   </div>

// '
// contact form 
// product update 
