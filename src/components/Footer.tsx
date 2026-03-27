import { Leaf, Phone, Mail, MapPin, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_TEXT } from "../config/constants";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-x-24">
        <div className="col-span-2 lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-2 text-white">
            <Leaf className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold tracking-tight">Canela</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium landscaping and outdoor design services. We transform
            ordinary spaces into extraordinary natural masterpieces.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Share2 size={20} />
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              <Share2 size={20} />
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
              <span>{EMAIL_ADDRESS}</span>
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
          &copy; {new Date().getFullYear()} Canela Landscaping & Design. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
