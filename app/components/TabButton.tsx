type Props = {
  active: boolean;
  selectTab: () => void;
  children: string;
};

const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-cyan-500"
    : "text-slate-300";

  return (
    <button
      onClick={selectTab}
      className={`cursor-pointer hover:text-white capitalize ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
