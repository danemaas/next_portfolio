import Link from "next/link";

type Props = {
  link: string;
  title: string;
};

const NavLink = ({ link, title }: Props) => {
  return <Link href={link}>{title}</Link>;
};

export default NavLink;
