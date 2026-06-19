import { PhoneIcon } from '../icons/UIIcons';
import { contactInfo } from '../../data/footerLinks';

const FooterContact = () => (
  <div className="lg:col-span-3">
    <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-sm">Connect</h4>
    <ul className="space-y-4 font-medium text-white/60">
      <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><PhoneIcon /> {contactInfo.phone}</li>
      {contactInfo.emails.map((email) => (
        <li key={email} className="hover:text-white transition-colors cursor-pointer">{email}</li>
      ))}
    </ul>
  </div>
);

export default FooterContact;
