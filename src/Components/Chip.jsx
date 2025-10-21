const Chip = ({ badgeText }) => {
  return (
    <span className="mb-4 inline-flex items-center justify-center rounded-full border-1 border-black/20 bg-white px-3 py-1 text-xs">
      {badgeText}
    </span>
  );
};

export default Chip;