import React from 'react';

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-10 md:space-y-12">
          
          {/* 1. Introduction */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">1. Introduction</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              Welcome to DUBAI COLLECTION, a leading perfume brand in India. These Terms and Conditions (“Terms”) govern your use of our website, products, services, and any related platforms. By using our website, you agree to comply with these Terms and our Privacy Policy.
            </p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">2. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              <li><strong>“We,” “Our,” “Us”</strong> refers to Dubai Collection, the entity providing the products and services.</li>
              <li><strong>“You,” “Your”</strong> refers to the user of the website and purchaser of products.</li>
            </ul>
          </section>

          {/* 3. Acceptance of Terms */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">3. Acceptance of Terms</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              By accessing or using our website and services, you agree to abide by these Terms and any additional policies posted on the site. If you do not agree, you should not use our website or purchase our products.
            </p>
          </section>

          {/* 4. Products and Pricing */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">4. Products and Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              <li>All products are subject to availability and may be discontinued at any time.</li>
              <li>Prices listed on the website are in Indian Rupees (INR) and are subject to change without prior notice.</li>
              <li>Product images, descriptions, and prices are for reference purposes only and may vary slightly from the actual product.</li>
            </ul>
          </section>

          {/* 5. Order Process */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">5. Order Process</h2>
            <ul className="list-disc pl-5 space-y-2 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              <li>Once an order is placed, you will receive an email or message confirming receipt of the order.</li>
              <li>We reserve the right to cancel or refuse any order due to pricing errors, stock unavailability, suspected fraud, or any other issue that may arise during processing.</li>
            </ul>
          </section>

          {/* 6. Payment Methods */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">6. Payment Methods</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              We accept payments through secure payment gateways, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>UPI</li>
              <li>Net Banking</li>
              <li>Other payment methods available at checkout</li>
            </ul>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              All transactions are processed using secure encryption technology.
            </p>
          </section>

          {/* 7. Delivery and Shipping */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">7. Delivery and Shipping</h2>
            <ul className="list-disc pl-5 space-y-2 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              <li>We currently deliver across India.</li>
              <li>International shipping may be available for selected products.</li>
              <li>Shipping charges and estimated delivery timelines will be displayed during checkout.</li>
              <li>Delivery times may vary due to location, courier delays, weather conditions, public holidays, or other unforeseen circumstances.</li>
            </ul>
          </section>

          {/* 8. Returns and Refunds */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">8. Returns and Refunds</h2>
            <ul className="list-disc pl-5 space-y-2 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              <li>Due to the personal nature of perfumes and fragrance products, opened or used products are not eligible for return or exchange.</li>
              <li>If you receive a damaged, defective, or incorrect product, please contact us within 48 hours of delivery with supporting photographs.</li>
              <li>Approved refunds will be processed to the original payment method within 7–10 business days.</li>
            </ul>
          </section>

          {/* 9. Privacy Policy */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">9. Privacy Policy</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              Your use of our website is subject to our Privacy Policy, which explains how we collect, store, and use your personal information. We handle customer data in accordance with applicable Indian laws.
            </p>
          </section>

          {/* 10. User Responsibilities */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">10. User Responsibilities</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8] mb-2">
              You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              <li>Provide accurate and complete information while placing orders.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Not use the website for any unlawful, fraudulent, or unauthorized purpose.</li>
            </ul>
          </section>

          {/* 11. Intellectual Property */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">11. Intellectual Property</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              All content on this website, including but not limited to logos, trademarks, product images, graphics, text, and designs, is the property of Dubai Collection and is protected by applicable intellectual property laws. Unauthorized use is strictly prohibited.
            </p>
          </section>

          {/* 12. Limitation of Liability */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">12. Limitation of Liability</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              Dubai Collection shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products, website, or services. We do not warrant that the website will always be uninterrupted, secure, or error-free.
            </p>
          </section>

          {/* 13. Governing Law and Dispute Resolution */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">13. Governing Law and Dispute Resolution</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, Delhi.
            </p>
          </section>

          {/* 14. Amendments to Terms */}
          <section>
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">14. Amendments to Terms</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              Dubai Collection reserves the right to modify these Terms at any time. Updated versions will be posted on the website and shall become effective immediately upon publication.
            </p>
          </section>

          {/* 15. Contact Us */}
          <section className="bg-[#fcfbfc] p-6 rounded-md border border-[#f0f0f0] mt-8">
            <h2 className="font-cormorant text-xl md:text-2xl text-[#1a1a1a] mb-3">15. Contact Us</h2>
            <p className="font-inter text-[13px] md:text-[14px] text-[#666] leading-[1.8]">
              For any questions regarding these Terms and Conditions, please contact us:
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