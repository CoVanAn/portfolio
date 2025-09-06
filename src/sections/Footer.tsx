import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";

const footerLinks = [
  { name: "GitHub", url: "https://github.com/CoVanAn" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/CoVanAn" },
  { name: "Facebook", url: "https://www.facebook.com/an.covan.9" },
  { name: "Zalo", url: "https://zalo.me/CoVanAn" },
];

export const Footer = () => {
  return (
  <footer className="mx-auto p-6 space-y-4 shadow-lg bg-gradient-to-b from-gray-900 to-emerald-300/20">
    <hr className="container border-1 mt-6" />
    <div className="6 md:flex md:flex-row container md:justify-between md:items-center">
      <p className="text-center text-sm text-gray-200">© 2024. All rights reserved.</p>
      <div className="flex flex-col gap-4 text-center items-center space-x-0 space-y-2 md:space-x-4 md:space-y-0 md:flex-row justify-center py-6">
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white text-sm hover:underline flex items-center justify-center font-bold hover:none"
          >
            {link.name}
            <ArrowUpRightIcon className="inline-block ml-1 size-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
  )
};
