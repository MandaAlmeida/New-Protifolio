import clsx from "clsx";
import { Link, LinkProps } from "react-router-dom";

interface LinksProps {
  text: string;
  link: LinkProps["to"];
  className?: string;
}

function LinkHeader(props: LinksProps) {
  const { link, className, text } = props;
  return (
    <li>
      <Link
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
