// project/src/pages/PrivacyPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Mr. Banks Tips";
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-100 text-lg">
              How we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg text-gray-700 mx-auto"
          >
            <h2>1. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users. We collect information in two ways:
            </p>
            <ul>
              <li>
                **Information you give us:** For example, our services require you to sign up for an account. When you do, we’ll ask for personal information, like your name, email address, or telephone number.
              </li>
              <li>
                **Information we get from your use of our services:** We collect information about the services that you use and how you use them, like when you visit a website that uses our advertising services, or you visit our site.
              </li>
            </ul>

            <h2>2. How We Use Information We Collect</h2>
            <p>
              We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Mr. Banks Tips and our users. We also use this information to offer you tailored content – like giving you more relevant betting tips.
            </p>

            <h2>3. Information We Share</h2>
            <p>
              We do not share personal information with companies, organizations, or individuals outside of Mr. Banks Tips unless one of the following circumstances applies:
            </p>
            <ul>
              <li>
                **With your consent:** We will share personal information with companies, organizations or individuals outside of Mr. Banks Tips when we have your consent to do so.
              </li>
              <li>
                **For external processing:** We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.
              </li>
              <li>
                **For legal reasons:** We will share personal information with companies, organizations or individuals outside of Mr. Banks Tips if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.
              </li>
            </ul>

            <h2>4. Security</h2>
            <p>
              We work hard to protect Mr. Banks Tips and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:
            </p>
            <ul>
              <li>We encrypt many of our services using SSL.</li>
              <li>We offer you a two-step verification process when you access your Mr. Banks Tips Account.</li>
              <li>We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.</li>
              <li>We restrict access to personal information to Mr. Banks Tips employees, contractors and agents who need to know that information in order to process it for us, and who are subject to strict contractual confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations.</li>
            </ul>

            <h2>5. Changes to this Privacy Policy</h2>
            <p>
              Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes).
            </p>

            <div className="mt-10 text-center">
              <Link to="/" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPage;
