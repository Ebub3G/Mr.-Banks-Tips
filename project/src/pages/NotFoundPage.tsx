import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  React.useEffect(() => {
    document.title = "Page Not Found - Mr. Banks Tips";
  }, []);

  return (
    <Container className="flex items-center justify-center py-20 min-h-[70vh]">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button size="lg">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;