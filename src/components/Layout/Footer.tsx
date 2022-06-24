/**
 * Footer function
 * @returns Footer component
 */
const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-white p-4 font-semibold">
      ©{new Date().getFullYear()} HRnet. All rights reserved.
    </footer>
  );
};

export default Footer;
