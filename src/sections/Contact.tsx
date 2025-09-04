import ArrowUpRight from "../assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="container py-10">
      <div className=" mx-auto text-center p-8 bg-gradient-to-r  from-emerald-300 to-sky-400 text-gray-950 rounded-3xl shadow-lg
        md:flex md:justify-around md:items-center md:space-x-10
      ">
        <div className="md:w-3/5 md:flex md:flex-col md:items-start md:text-left">
          <h2 className="font-serif text-xl mb-2 md:text-3xl">Let's create something amazing together</h2>
          <p>Whether you have a project in mind, need assistance with web development,
             or just want to say hello, feel free to reach out!
             </p>
        </div>
        <button className="mt-4 px-6 py-3 bg-gray-950 text-white font-semibold rounded-xl shadow-md hover:bg-gray-100 transition capitalize md:mt-0">
          <a href="mailto:your-email@example.com">Contact me <ArrowUpRight className="inline-block ml-2" /></a>
        </button>
      </div>
    </div>
  )
};
