'use client';

export default function Experience() {
    return (
        <section className="mt-10 text-left w-full max-w-6xl">
            <h2 className="text-3xl font-semibold text-gray-800">Professional Experience</h2>

            <div className="mt-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-semibold">Software Engineer II - EPAM Systems</h3>
                <p className="text-gray-700">July 2022 – Present</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Architected and developed a private npm React Component Library using Material UI and Storybook, reducing development time by 25%.</li>
                    <li>Engineered a production-ready React TypeScript application from scratch using Webpack.</li>
                    <li>Implemented and optimized Redux state management with middleware, Internationalization (I18n), and CI/CD pipelines on Azure GitLab.</li>
                    <li>Collaborated with backend engineers to integrate APIs and ensure seamless frontend-backend communication.</li>
                    <li>Optimized application performance, reducing bundle size by 60% and initial load time by 40%, significantly enhancing user experience.</li>
                    <li>Developed and maintained comprehensive unit tests, achieving 85%+ code coverage and ensuring application stability.</li>
                </ul>

                <h4 className="text-xl font-semibold mt-4">Finance/Investment Banking Domain - Codebook</h4>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Developed 5+ custom extensions for Jupyter Notebook, increasing user productivity.</li>
                    <li>Managed a library of 30+ reusable React widgets for Jupyter Notebook.</li>
                    <li>Designed and maintained a Python library for rendering React widgets, streamlining version releases.</li>
                    <li>Collaborated with backend, cloud, and DevOps teams to resolve critical bugs and troubleshoot complex issues.</li>
                    <li>Produced and maintained technical documentation on Confluence, improving team knowledge sharing by 40%.</li>
                    <li>Conducted thorough code reviews, reducing code defects by 25% and ensuring adherence to best practices.</li>
                </ul>
            </div>

            <div className="mt-6 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-semibold">Associate - Cognizant</h3>
                <p className="text-gray-700">January 2020 – June 2022</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Developed robust applications for banking card members.</li>
                    <li>Migrated an application from class-based to functional components as per React 16.8 best practices.</li>
                    <li>Optimized applications using React Hooks and implemented Web Accessibility improvements.</li>
                </ul>
            </div>
        </section>
    );
}