import clsx from "clsx";

interface LinkProps {
  link: string;
  className?: string;
}

function LinkHeader(props: LinkProps) {
  const { link, className } = props;
  return (
    <li>
      <a
        className={clsx(
          "font-bold text-gray1 uppercase cursor-pointer",
          className
        )}
      >
        {link}
      </a>
    </li>
  );
}

export default LinkHeader;
