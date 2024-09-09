 "use client"
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-pink-500 mb-10">Contact</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-violet-900 text-pink-300 border border-pink-500 rounded-md px-4 py-2 focus:outline-none focus:border-pink-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-violet-900 text-pink-300 border border-pink-500 rounded-md px-4 py-2 focus:outline-none focus:border-pink-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-violet-900 text-pink-300 border border-pink-500 rounded-md px-4 py-2 focus:outline-none focus:border-pink-400"
              required
            ></textarea>
            <button type="submit" className="w-full bg-pink-500 text-gray-900 py-2 rounded-md hover:bg-pink-400 transition-colors">
              Send Transmission
            </button>
          </form>
          {submitStatus && <p className="mt-4 text-center text-pink-400">{submitStatus}</p>}
        </div>
      </div>
    </section>
  );
}