import { promises as fs } from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';

async function getProjects() {
  const filePath = path.join(process.cwd(), 'content', 'projects.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

async function getInsights() {
  const insightsDir = path.join(process.cwd(), 'content', 'insights');
  const files = await fs.readdir(insightsDir);
  return files.filter(file => file.endsWith('.md'));
}

export default async function Home() {
  const projects = await getProjects();
  const insights = await getInsights();

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 font-sans">
      <Navbar />

      {/* --- BIO SECTION (Text Heavy) --- */}
      <section id="bio" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-4">
           {/* Placeholder for a photo if you want one, or leave empty for whitespace */}
           <div className="w-full aspect-[3/4] bg-gray-100 rounded-sm"></div>
        </div>
        <div className="md:col-span-8 flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Quế Phan Building digital experiences that bridge <span className="italic text-gray-500">art</span> and <span className="italic text-gray-500">code</span>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Born and raised in Vietnam, I am a software engineer interested in the interactions between data and design. 
            Currently exploring Next.js, Cloudflare, and Building LLMs.
          </p>
        </div>
      </section>

      {/* --- WORK SECTION (Gallery Grid) --- */}
      <section id="projects" className="mb-24">
        <div className="flex items-baseline justify-between mb-8 border-b pb-2">
          <h2 className="font-serif text-2xl">Selected Work</h2>
          <span className="text-sm text-gray-400">{projects.length} Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project: any) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Replace the gray div with this: */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover mb-4 grayscale hover:grayscale-0"
                />
              ) : (
                <div className="w-full aspect-video bg-gray-100 mb-4" />
              )}
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                </div>
                <span className="text-xs font-mono text-gray-400 border px-2 py-0.5 rounded-full">
                  2024
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INSIGHTS SECTION (Simple List) --- */}
      <section id="insights" className="mb-24 max-w-2xl">
        <h2 className="font-serif text-2xl mb-8 border-b pb-2">Writing</h2>
        <ul className="space-y-6">
          {insights.map((filename: string) => (
            <li key={filename} className="group flex justify-between items-baseline cursor-pointer">
              <span className="text-lg group-hover:text-blue-600 transition">
                {filename.replace('.md', '').replace(/-/g, ' ')}
              </span>
              <span className="text-sm font-mono text-gray-400">Jan 29</span>
            </li>
          ))}
        </ul>
      </section>
      
      <footer className="py-12 text-center text-sm text-gray-400 font-mono">
        © 2026 Laura Phan. Built with Next.js & Vercel.
      </footer>
    </main>
  );
}