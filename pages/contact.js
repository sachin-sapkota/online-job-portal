import Image from 'next/image';

const contact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <div className="md:pt-[150px] pt-[100px]  grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-600"></div>
          </div>
          <Image
            className="object-contain w-full h-full"
            src={require('../images/contact.png')}
            alt="contact"
          />
        </div>
        <form
          onSubmit={handlesubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label
              htmlFor="name"
              className="text-sm text-black dark:text-white"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm  text-black dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm  text-black dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-600 text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
