import Link from "next/link";
import Image from "next/image";
import { projects } from "./data/projects";

const ProjectsPage = () => {
  return (
    <div className="bg-customBlue">
      <div className="max-w-5xl  mx-auto px-8 lg:px-0 ">
        <h1 className="text-white text-4xl font-bold py-10">
          My Portfolio List
        </h1>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3 ">
          {projects.map((project, index) => (
            <div key={index}>
              <Link href={`/project/${project.link}`} className="group">
                {/* <div className=" bg-white h-atuo lg:h-44 flex justify-center items-center rounded-lg overflow-hidden"> */}

                <div className="bg-white h-auto lg:h-44 flex justify-center items-center rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105  ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover max-w-full h-auto  " //
                    width={500}
                    height={300}
                  />
                </div>
                <div className="pt-3 pointer-events-none">
                  <h2 className="text-lg font-bold  text-gray-300">
                    {project.title}
                  </h2>
                  <p className="text-sm mt-2 text-gray-300">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
