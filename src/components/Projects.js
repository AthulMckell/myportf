import { link } from "fs";

export default function Projects() {
    const projects = [
      { id: 1, title: 'House 3d printer', description: 'A large scale 3d printer designed to print houses.Worked as an intern for this project in Minvayu fablab under Center of Scientific Reasearch,Auroville', link: 'https://www.fablabs.io/labs/minvayu' },
      { id: 2, title: 'React Project ', description: 'An exploration of react and its enhancements in web development.Built using typescript' ,link:"https://my-dashboard-five-theta.vercel.app/"},
      { id: 3, title: 'Next js Project', description: 'A simple dashboard made using next js and tailwind css', link:"https://vasitum-n1ky.vercel.app/" },
    ];
  
    return (
      <section id="projects" className="py-20 bg-violet-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-pink-500 mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 p-6 rounded-lg border border-pink-500 hover:border-pink-400 transition-colors transform hover:scale-105 duration-300">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">{project.title}</h3>
                <p className="text-violet-200 mb-4">{project.description}</p>
                <a href={project.link} className="text-pink-500 hover:text-pink-400 transition-colors">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }