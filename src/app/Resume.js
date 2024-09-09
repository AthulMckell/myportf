import Layout from '../components/Layout';

export default function Resume() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-pink-500 mb-10">Resume</h1>
        <div className="bg-gray-800 p-6 rounded-lg border border-pink-500">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">NeoDevReplicant</h2>
          <p className="text-violet-200 mb-4">Full-Stack Replicant Developer</p>
          
          <h3 className="text-xl font-bold text-pink-400 mt-6 mb-2">Skills</h3>
          <ul className="list-disc list-inside text-violet-200">
            <li>AI-Human Collaboration</li>
            <li>Cybernetic Web Development</li>
            <li>Virtual Reality Integration</li>
            <li>Quantum Computing Applications</li>
          </ul>
          
          <h3 className="text-xl font-bold text-pink-400 mt-6 mb-2">Experience</h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-pink-300">Senior Replicant Developer | TechNoir Industries</h4>
            <p className="text-violet-200">2045 - Present</p>
            <p className="text-violet-200">Developing cutting-edge applications that seamlessly integrate AI and human capabilities.</p>
          </div>
          
          <h3 className="text-xl font-bold text-pink-400 mt-6 mb-2">Education</h3>
          <div>
            <h4 className="text-lg font-semibold text-pink-300">BS in Artificial Intelligence | Neo Tokyo University</h4>
            <p className="text-violet-200">2041 - 2045</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}