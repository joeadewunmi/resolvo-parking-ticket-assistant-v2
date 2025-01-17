import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Resolvo</h3>
            <p className="text-sm">
              Fighting parking tickets with AI-powered appeals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-accent">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm">
              Questions? Reach out to us at<br />
              support@resolvo.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Resolvo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;