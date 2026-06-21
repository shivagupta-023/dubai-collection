import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fcfbfc] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Page Container */}
      <div className="max-w-[800px] mx-auto bg-white p-8 md:p-14 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-xl border border-[#f0f0f0]">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 border-b border-[#eaeaea] pb-10">
          <p className="font-inter text-[11px] md:text-[12px] text-[#888] tracking-[0.2em] uppercase mb-4">
            Legal Information
          </p>
          <h1 className="font-cormorant text-3xl md:text-5xl text-[#1a1a1a] font-medium tracking-wide">
            Privacy Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-10 md:space-y-12">
          
          {/* Intro */}
          <section>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              At Dubai Collection, we value your privacy and are committed to protecting the personal information you provide to us. This Privacy Policy outlines the types of personal data we collect, how we use it, and the measures we take to ensure that your information is protected.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-4">1. Information We Collect</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-4">
              We collect various types of information when you use our website or interact with our services, including:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold mb-2">Personal Information</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
                  When you make a purchase, sign up for an account, subscribe to our newsletter, or contact customer service, we may collect personal details such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Shipping and Billing Address</li>
                  <li>Phone Number</li>
                  <li>Payment Information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold mb-2">Non-Personal Information</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
                  We may collect information such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Website Usage Data</li>
                  <li>Browsing Patterns</li>
                </ul>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
                  This information helps us improve our website functionality and user experience.
                </p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-4">2. How We Use Your Information</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-4">
              The information we collect is used for the following purposes:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Order Processing</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">To process and fulfill your orders, including payment processing, shipping, and delivery.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Customer Service</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">To respond to your inquiries, provide support, and improve our customer experience.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Personalization</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">To provide personalized recommendations and improve your shopping experience.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Marketing Communications</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">To send promotional emails, newsletters, special offers, and updates regarding our products and services. You may opt out of marketing communications at any time.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Website Improvement</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">To analyze website traffic and user behavior to improve our website’s functionality, design, and performance.</p>
              </div>
            </div>
          </section>

          {/* 3. Sharing Your Information */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-4">3. Sharing Your Information</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-4">
              We do not sell, rent, or trade your personal information to third parties. We may share your information in the following situations:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold mb-1">Service Providers</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-1">With trusted third-party service providers who assist us with:</p>
                <ul className="list-disc pl-5 space-y-1 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
                  <li>Payment Processing</li>
                  <li>Shipping and Logistics</li>
                  <li>Website Operations</li>
                  <li>Customer Support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold mb-1">Legal Compliance</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">If required by law, regulation, legal process, or governmental request, we may disclose your information to comply with legal obligations or protect our rights.</p>
              </div>
            </div>
          </section>

          {/* 4. Data Security */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">4. Data Security</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              We implement appropriate technical and organizational security measures to protect your personal information. This includes secure payment gateways, encrypted transactions, and restricted access to customer data.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              While we strive to protect your information, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 5. Cookies and Tracking Technologies */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">5. Cookies and Tracking Technologies</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              You may choose to disable cookies through your browser settings; however, doing so may affect certain website functionalities.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-4">6. Your Rights</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-4">
              You have the following rights regarding your personal information:
            </p>
            <div className="space-y-4 mb-4">
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Access</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">Request a copy of the personal information we hold about you.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Correction</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">Request correction of inaccurate or incomplete information.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Deletion</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">Request deletion of your personal data, subject to applicable legal requirements.</p>
              </div>
              <div>
                <h3 className="font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-semibold">Marketing Opt-Out</h3>
                <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">Unsubscribe from promotional emails and marketing communications at any time.</p>
              </div>
            </div>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              To exercise these rights, please contact us at <a href="mailto:dubaicollection.in@gmail.com" className="text-black underline hover:text-[#888] transition-colors">dubaicollection.in@gmail.com</a>.
            </p>
          </section>

          {/* 7. Retention of Data */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">7. Retention of Data</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy and to comply with legal obligations.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              When the information is no longer required, it will be securely deleted or anonymized.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">8. Third-Party Links</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              Our website may contain links to third-party websites. These websites operate independently and have their own privacy policies.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              Dubai Collection is not responsible for the privacy practices or content of such third-party websites.
            </p>
          </section>

          {/* 9. Children’s Privacy */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">9. Children’s Privacy</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              Our website and services are not intended for individuals under the age of 18.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              We do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take appropriate steps to delete it.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">10. Changes to This Privacy Policy</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              We reserve the right to update or modify this Privacy Policy at any time.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              Any changes will be posted on this page along with the updated revision date. Continued use of our website following any changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="bg-[#fcfbfc] p-6 rounded-md border border-[#f0f0f0] mt-8">
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">11. Contact Us</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 font-inter text-[13px] md:text-[14px] text-[#1a1a1a] font-medium">
              <p>Dubai Collection</p>
              <p className="mt-1">
                Email:{' '}
                <a href="mailto:dubaicollection.in@gmail.com" className="text-black underline hover:text-[#666] transition-colors">
                  dubaicollection.in@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}