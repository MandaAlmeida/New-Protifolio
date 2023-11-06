interface LinkProps {
  link: string;
}

function LinkHeader(props: LinkProps) {
  const { link } = props;
  return (
    <li>
      <a className="text-xs font-bold text-gray1 uppercase hover:text-primary cursor-pointer">
        {link}
      </a>
    </li>
  );
}

export default LinkHeader;
