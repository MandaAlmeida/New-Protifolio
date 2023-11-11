import clsx from "clsx";
import { Link, LinkProps } from "react-router-dom";

interface LinksProps {
  text: string;
  link: LinkProps["to"];
  className?: string;
  onClick: React.MouseEventHandler;
}

function LinkHeader(props: LinksProps) {
  const { link, className, text, onClick } = props;
  return (
    <li>
      <Link
        onClick={onClick}
        to={link}
        className={clsx(
          "font-bold text-gray1 uppercase cursor-pointer",
          className
        )}
      >
        {text}
      </Link>
    </li>
  );
}

export default LinkHeader;
