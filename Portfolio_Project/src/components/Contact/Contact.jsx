function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
