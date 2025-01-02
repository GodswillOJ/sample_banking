import React from "react";

const ContactUs = () => {
  return (
    <div className="about_container container mx-auto p-8">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-gray-600 mb-6">
        <span className="font-bold">Home</span> &gt; <span>Contact Us</span>
      </div>

      {/* Contact Us Content with Background Image */}
      <div 
        className="bg-cover bg-center rounded-lg shadow-lg p-8 mb-6"
        style={{ backgroundImage: 'url(/icons/others_.jpg)' }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
        <p className="mb-4 text-white">
          <strong>Help and customer support</strong><br />
          Got a question? View our FAQs or get in touch with us by phone, email, or social media.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Customer Service</h3>
          <p>We’re here to help. Contact us online or speak to your local team.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">FAQ</h3>
          <p>
            View our frequently asked questions which cover information about us, how to apply for a job,
            as well as shareholder information.
          </p>
          <a href="#" className="text-blue-600">Read our FAQs</a>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
          <p>
            Got an account question or something not mentioned in our FAQs? Message us, just please don’t share
            your account details via X (formerly Twitter).
          </p>
          <a href="#" className="text-blue-600">Message us</a>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Video Banking</h3>
          <p>
            We offer video banking in certain countries, allowing you to speak to us over a secure connection from
            wherever you are.
          </p>
          <a href="#" className="text-blue-600">Learn more</a>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Find Local Experts to Help You</h3>
          <p>
            Visit your local website to find contact details of your customer care team, who can help with any
            specific account issues or questions.
          </p>
        </div>

        {/* Global HQ Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Global HQ</h3>
          <address>
            <p>Standard Chartered Bank United Kingdom</p>
            <p>1 Basinghall Avenue, London, EC2V 5DD</p>
            <p>+44 (0)20 7885 8888</p>
            <p><a href="https://sc.com/uk" className="text-blue-600">sc.com/uk</a></p>
          </address>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Interested in Joining Us?</h3>
          <p>Recent graduate? Looking for your next opportunity? Start a career with us.</p>
          <a href="#" className="text-blue-600">Start a career with us</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
