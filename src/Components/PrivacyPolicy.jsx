 
import React from 'react';
import Navbar_policy from './Navbar_policy';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar_policy />
      
      <br /><br />
      <hr />
      <br />
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-sm text-center mb-4"><strong>Last Updated: 10/05/2025</strong></p>

      <p className="mb-6">
        Welcome to my portfolio website <a className='text-blue-300' href="https://rohit-raj.netlify.app/">Portfolio</a>. Your privacy is of utmost importance to me. This Privacy Policy aims to inform you about how I collect, use, protect, and disclose information obtained from visitors to my Website.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information Collection</h2>
        <p>I collect personal and non-personal data to improve website functionality and enhance user experience. The information collected includes:</p>
        <ul className="list-disc pl-6">
          <li>Personal details such as name, email, phone number (if provided)</li>
          <li>Technical data like IP address, browser type, and device details</li>
          <li>Browsing behavior including pages visited, time spent, and referral sources</li>
          <li>Cookies and tracking technologies for analytics and performance optimization</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
        <p>The collected information is used for:</p>
        <ul className="list-disc pl-6">
          <li>Communicating with users regarding inquiries and feedback</li>
          <li>Enhancing website performance and user experience</li>
          <li>Ensuring security and preventing fraudulent activities</li>
          <li>Complying with legal requirements</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
        <p>To ensure the security of your data, I implement industry-standard security measures, including:</p>
        <ul className="list-disc pl-6">
          <li>SSL encryption for data transmission</li>
          <li>Access control mechanisms for stored data</li>
          <li>Regular security audits and monitoring</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
        <p>I may use third-party services such as analytics providers, hosting services, and security solutions. These providers have their own privacy policies governing the use of data.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of inaccurate data</li>
          <li>Opt-out of data tracking and certain processing activities</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Cookies and Tracking</h2>
        <p>Cookies are used to improve website performance and user experience. You can manage cookie preferences through your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
        <p>Personal data is retained only as long as necessary for the intended purposes. Once no longer required, data is securely deleted.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Legal Compliance</h2>
        <p>Data may be disclosed if required by law or in response to legal processes to protect my rights and ensure security.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. International Data Transfers</h2>
        <p>If you are accessing this Website from outside India, your data may be transferred and processed internationally in compliance with relevant data protection laws.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Updates & Contact</h2>
        <p>This Privacy Policy may be updated periodically. For any inquiries, please contact me at <strong>rohit.raj.career@gmail.com</strong> or visit <a href="https://rohit-raj.netlify.app/" target="_blank" rel="noopener noreferrer">my portfolio</a>.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
