import Link from "next/link";
import { EyeIcon, LucideCode2 } from "lucide-react";

type Props = {
  projectLink: string;
  gitLink: string;
  imgUrl: string;
  title: string;
  description: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  projectLink,
  gitLink,
}: Props) => {
  const divStyle: React.CSSProperties = {
    background: `url(${imgUrl})`,
    backgroundSize: "cover",
  };

  return (
    <div className="">
      <div
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden group "
        style={divStyle}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-500/0 group-hover:bg-slate-500/60 flex items-center justify-center gap-5 transition-all duration-200 ">
          <Link
            href={projectLink}
            target="_blank"
            className="border-2 p-1 rounded-full opacity-0 group-hover:opacity-100 hover:text-cyan-300 hover:border-cyan-300 transition-all duration-200"
          >
            <EyeIcon className="w-8 h-8" />
          </Link>
          <Link
            href={gitLink}
            target="_blank"
            className="border-2 p-1 rounded-full opacity-0 group-hover:opacity-100 hover:text-cyan-300 hover:border-cyan-300 transition-all duration-200"
          >
            <LucideCode2 className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-slate-800 p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
