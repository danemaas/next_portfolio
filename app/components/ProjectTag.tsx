type Props = {
  name: string;
  onClick: () => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const buttonStyle = isSelected
    ? "border-cyan-300 text-white"
    : "border-white text-slate-300";

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 capitalize border-2 rounded-full hover:border-cyan-300 ${buttonStyle}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
