'use client';

const skillCategories = [
  { category: "Web Development", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend & Databases", skills: ["Node.js", "MongoDB", "SQL", "NoSQL", "GraphQL", "REST APIs"] },
  { category: "DevOps & Tools", skills: ["Docker", "Jenkins", "Git", "CI/CD", "Postman", "Apollo Server"] },
  { category: "Testing & Others", skills: ["Jest", "Playwright", "Webpack", "Redux", "Storybook", "Material UI"] }
];

export default function Skills() {
  return (
    <section className="mt-10 text-left w-full max-w-6xl">
      <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">{category.category}</h3>
          <div className="flex flex-wrap gap-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg text-center font-semibold hover:bg-gray-300 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
