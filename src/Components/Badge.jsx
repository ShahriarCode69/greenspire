const Badge = ({badgeText}) => {
	return (
    <span className="mb-4 inline-flex text-xs py-1 items-center justify-center rounded-full border-1 border-black/20 bg-white px-3">
      {badgeText}
    </span>
  );
}

export default Badge