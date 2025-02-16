import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Robo Lab Section */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg">ROBO LAB</h3>
          <div className="flex items-center space-x-4 mt-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg">CONTACT</h3>
          <p className="mt-4">P.O.BOX 8000 FI-9001</p>
          <p>ROBOTICS LAB</p>
          <p>OULU</p>
          <p className="mt-4">TEL: +358 123 45678</p>
          <p>university.of.robo(at)robo.com</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg">QUICK LINKS</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">
              PRESS AND MEDIA
            </li>
            <li className="hover:text-gray-300 cursor-pointer">CAREER SITE</li>
            <li className="hover:text-gray-300 cursor-pointer">NEWSLETTER</li>
            <li className="hover:text-gray-300 cursor-pointer">
              GIVE FEEDBACK
            </li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="font-bold text-lg">GET HELP</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">
              ACCESSIBILITY
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              PRIVATE POLICY
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              EMERGENCY & SAFETY
            </li>
            <li className="hover:text-gray-300 cursor-pointer">CAMPUSES</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-400 pt-4">
        <p>© 2025 Copyright: Robolend</p>
      </div>
    </footer>
  );
};

export default Footer;
