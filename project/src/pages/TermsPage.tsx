// project/src/pages/TermsPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms of Service - Mr. Banks Tips";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-blue-100 text-lg">
              Understanding your rights and responsibilities when using our service.
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Mr. Banks Tips ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this Service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this Service.
            </p>

            <h2>2. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an "as is" and "as available" basis. Mr. Banks Tips makes no representations or warranties of any kind, express or implied, as to the operation of their Service or the information, content or materials included therein. You expressly agree that your use of this Service is at your sole risk.
            </p>

            <h2>3. Limitation of Liability</h2>
            <p>
              Mr. Banks Tips will not be liable for any damages of any kind arising from the use of this Service, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. This includes, without limitation, direct loss, loss of business or profits (whether or not the loss of such profits was foreseeable, arose in the normal course of things or you have advised Mr. Banks Tips of the possibility of such potential loss), damage caused to your computer, computer software, systems and programs and the data thereon or any other direct or indirect, consequential and incidental damages.
            </p>

            <h2>4. Betting Disclamer</h2>
            <p>
              Mr. Banks Tips provides sports betting tips and analysis for informational purposes only. We do not provide gambling services. Users are responsible for complying with all applicable laws and regulations regarding online gambling in their respective jurisdictions. Betting involves risk, and past performance is not indicative of future results. We strongly advise responsible gambling.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
              Mr. Banks Tips reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms.
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

export default TermsPage;
