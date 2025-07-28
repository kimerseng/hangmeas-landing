import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            © 2025 Hang Mean Mobile. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-[#F59B1D] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-[#F59B1D] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;