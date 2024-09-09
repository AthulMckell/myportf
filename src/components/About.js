import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-violet-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-pink-500 mb-10">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-violet-200 mb-6">
            I'm a Software developer, passionate and coding. With a keen eye for detail and a passion for pushing technological boundaries, I create digital experiences that challenge perceptions and redefine reality.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AthulMckell" className="text-pink-500 hover:text-pink-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https:www.linkedin.com/in/athul-raj-m-46337b187" className="text-pink-500 hover:text-pink-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:athulraj786@gmail.com" className="text-pink-500 hover:text-pink-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}