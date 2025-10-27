interface Project {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: "Sistema de Gestión",
    description: "App web para control administrativo con React y Node.js.",
    image: "https://via.placeholder.com/400x250",
    link: "#"
  },
  {
    title: "Landing Page Corporativa",
    description: "Diseño moderno con Tailwind y animaciones.",
    image: "https://via.placeholder.com/400x250",
    link: "#"
  },
  {
    title: "Dashboard Analítico",
    description: "Visualización de datos en tiempo real con API y Recharts.",
    image: "https://via.placeholder.com/400x250",
    link: "#"
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>
              <a href={p.link} className="text-indigo-600 hover:underline">Ver más →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
