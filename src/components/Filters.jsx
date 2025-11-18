const filters = [
  "All",
  "Music",
  "Gaming",
  "Movies",
  "Tech",
  "React",
  "Education",
];

const Filters = ({ setFilter }) => {
  return (
   <div className="flex gap-3 overflow-x-auto bg-white sticky top-16 z-40 px-3 py-2">
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => applyFilter(filter)}
      className={`px-4 py-2 rounded-full border ${
        selectedFilter === filter
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {filter}
    </button>
  ))}
</div>

  );
};

export default Filters;
