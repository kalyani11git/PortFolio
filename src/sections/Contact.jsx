import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://portfolio-backend-u4fg.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const text = res.ok ? 'Message sent successfully!' : 'Failed to send message. Try again.';
      setStatus(text);
      if (res.ok) setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
      <motion.div
        className="w-full max-w-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="p-4 bg-gray-800 rounded" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required className="p-4 bg-gray-800 rounded" value={formData.email} onChange={handleChange} />
          <textarea name="message" rows="5" placeholder="Your Message" required className="p-4 bg-gray-800 rounded" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="p-4 bg-violet-500 hover:bg-violet-600 text-white rounded">Send Message</button>
        </form>
        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
