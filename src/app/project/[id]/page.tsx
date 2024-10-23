"use client";
import { IoLogoGithub } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { projects } from "../data/projects";
import Image from "next/image";

const ProjectDetailPage = () => {
  const pathName = usePathname();
  const projectId = pathName.split("-").pop();
  const id = parseInt(projectId || "0");
  const project = projects[id - 1];

  return (
    <div className="bg-customBlue">
      <div className="max-w-5xl  mx-auto rounded-2xl flex flex-col min-h-screen px-8 lg:px-0  ">
        <div className=" ">
          <p className="text-2xl font-bold text-gray-300 mt-10 mb-2 ">
            {project.title}
          </p>
          <p className="text-base text-gray-300 font-semibold mb-3">
            {project.description}
          </p>
        </div>
        <div className="flex  py-6 border-b-2 border-gray-600 ">
          <div className="  w-1/2 hidden lg:block ">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="rounded-3xl border-2 border-black "
            />
          </div>
          <div className=" flex flex-wrap ml-0 lg:ml-10   ">
            <div className="flex flex-col w-full lg:w-1/2 ">
              <p className="text-sm text-gray-300 font-bold mb-3">
                프로젝트 기간
              </p>
              <div className="mb-3">
                <p className=" inline-block text-sm font-bold text-gray-300 bg-customAboutBg rounded-3xl px-2 py-1  ">
                  {project.period}
                </p>
              </div>
            </div>

            <div className="flex flex-col mr-5 ">
              <p className="text-sm text-gray-300 font-bold pb-3">사용스킬</p>
              <div className="mb-3">
                <p className=" inline-block text-sm font-bold text-gray-300 bg-customAboutBg rounded-3xl px-2 py-1 ">
                  {project.language}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <p className="text-sm text-gray-300 font-bold pb-3">
                사용 라이브러리
              </p>
              <div className="mb-3">
                <p className=" inline-block text-sm font-bold text-gray-300 bg-customAboutBg rounded-3xl px-2 py-1">
                  {project.library}
                </p>
              </div>
            </div>
            <div className="flex w-full  my-6">
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex mr-3"
              >
                <FaRegFilePdf className=" w-8 h-full hover:text-blue-400 hover:border-blue-400" />
              </a>

              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex mr-3"
              >
                <IoLogoGithub className=" w-8 h-full hover:text-blue-400 hover:border-blue-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={800}
            className="rounded-3xl border-2 border-black max-w-full h-auto  "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
