const Categories = () => {
  const list = [
    "All",
    "Music",
    "News",
    "Gaming",
    "Monetization",
    "Podcasts",
    "Lo-fi",
    "Mixes",
    "Live",
    "Tripods",
    "Indian pop music",
    "Recruitment",
  ];

  return (
    <div className="flex space-x-3 overflow-x-auto no-scrollbar bg-[#0F0F0F] text-white py-3 px-6 mt-16">
      {list.map((item) => (
        <button
          key={item}
          className="px-4 py-1.5 bg-gray-800 rounded-full text-sm whitespace-nowrap hover:bg-gray-700"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
