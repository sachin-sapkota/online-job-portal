const Overview = () => {
  return (
    <div className="flex-col flex px-9 gap-4 divide-y-2 ">
      <div className="flex flex-col mt-8">
        <div className="text-xl font-sans font-semibold border-b-2 w-[50px] border-indigo-600 ">
          Skills
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          <div className="flex border-[1px] border-indigo-500 rounded-md px-1 text-sm font-serif  ">
            PHP
          </div>
          <div className="flex border-[1px] border-indigo-500 rounded-md px-1 text-sm font-serif  ">
            Responsive Design
          </div>
          <div className="flex border-[1px] border-indigo-500 rounded-md px-1 text-sm font-serif  ">
            JavaScript
          </div>
          <div className="flex border-[1px] border-indigo-500 rounded-md px-1 text-sm font-serif  ">
            web Development
          </div>
          <div className="flex border-[1px] border-indigo-500 rounded-md px-1 text-sm font-serif  ">
            Website development
          </div>
          <div className="flex border-[1px] border-indigo-500 rounded-md px-1 text-sm font-serif  ">
            c++
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-3">
        {' '}
        <div className="text-xl font-sans font-semibold border-b-2 w-[110px] border-indigo-600 ">
          Description
        </div>
        <div className="text-sm py-2 px-3 text-justify ">
          About End-to-end software development and digital marketing services!
          Scopic is a U.S. based company specializing in the creation of custom
          IT solutions for web, mobile, and desktop. We offer visually engaging
          and user-centric interactive solutions tailored to your business
          needs. At Scopic, we unify software development with digital marketing
          to transform the traditional into industry-changing solutions. We
          combine creative digital marketing with tailor-made software
          development and unique web design, to become the one-stop-shop for
          industry innovation. • 1,000+ projects delivered • 14+ years of
          experience transforming ideas into reality • 280+ highly talented
          developers, designers, and marketers from around the world. Your
          digital originality. Crafted, coded and spread with passion. At Scopic
          our core services include: • Advanced Manufacturing Application
          Development • FDA Compliant Scientific and Medical App Development •
          Audio/Video App Development • Financial App Development •
          Communication and Collaboration App Development • Crypto Currencies
          and Blockchain Development Services • Machine Learning Solutions •
          Conversational AI and Intelligent Assistance • E-commerce Software
          Development • SaaS Development
        </div>
      </div>
    </div>
  );
};

export default Overview;
