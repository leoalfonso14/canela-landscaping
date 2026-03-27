import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  LOCATION_TEXT,
} from "../config/constants";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 lg:gap-x-16">
        <div className="col-span-2 lg:col-span-2 space-y-6">
            <img 
              src="/logo.png" 
              alt="Canela Landscaping & Snow Plow" 
              className="h-16 w-auto object-contain"
            />
          <p className="text-sm leading-relaxed md:max-w-xs">
            Premium landscaping and outdoor services. We transform ordinary
            spaces into extraordinary natural masterpieces.
          </p>
          <div className="flex space-x-4 text-emerald-500">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/services"
                className="hover:text-emerald-500 transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-emerald-500 transition-colors"
              >
                Project Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-emerald-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-emerald-500 transition-colors"
              >
                Free Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/services"
                className="hover:text-emerald-500 transition-colors"
              >
                Lawn Maintenance
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-emerald-500 transition-colors"
              >
                Garden Cleanup
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-emerald-500 transition-colors"
              >
                Patio Repair
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-emerald-500 transition-colors"
              >
                Snow Removal
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Phone size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{PHONE_NUMBER}</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span className="break-all">{EMAIL_ADDRESS}</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{LOCATION_TEXT}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-slate-900 text-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} Canela Landscaping & Snow Plow. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
