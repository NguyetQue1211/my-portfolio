import { promises as fs } from 'fs';
import path from 'path';

// 1. Function to read your Projects
async function getProjects() {
  const filePath = path.join(process.cwd(), 'content/projects.json');
  const file = await fs.readFile(filePath, 'utf8');
  return JSON.parse(file);
}

// 2. Function to read your Insights (Blog)
async function getInsights() {
  const insightsDir = path.join(process.cwd(), 'content/insights');
  const filenames = await fs.readdir(insightsDir);
  return filenames.filter((file) => file.endsWith('.md'));
}

export default async function Home() {
  const projects = await getProjects();
  const insights = await getInsights();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto font-sans">
      {/* --- PROFILE SECTION --- */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Laura Phan</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Software Engineer & Full Stack Learner.
        </p>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any) => (
            <div key={project.id} className="border p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex gap-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INSIGHTS SECTION --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Insights</h2>
        <ul className="space-y-4">
          {insights.map((filename: string) => (
            <li key={filename} className="p-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-900">
              <p className="font-medium text-lg capitalize">
                {filename.replace('.md', '').replace(/-/g, ' ')}
              </p>
              <p className="text-sm text-gray-500">Read more →</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}