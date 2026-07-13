import React from "react";

const Contact = () => {
  return (
    <section className="bg-slate-900 py-20" id="/Contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="rounded-xl overflow-hidden shadow-2xl mb-12 border-4 border-slate-800">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28288.41767567655!2d68.59933010844618!3d27.59191091502971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935ceb55ed8d07d%3A0x41cb7e93ac4e2bfe!2sP%C4%ABrjo%20Goth%2C%20Khairpur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709973556826!5m2!1sen!2s"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <h1
            className="text-4xl font-bold text-white mb-4 italic"
            data-aos="fade-up"
          >
            Contact Us
          </h1>
          <p
            className="max-w-2xl mx-auto text-slate-400 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's get in touch! If you have any questions or need to contact us
            for a project, please use the form below. We will respond as soon as possible!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
          <form
            action="https://formspree.io/f/xkndzvro"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300 ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300 ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
