import React from "react";
import { GoDotFill } from "react-icons/go";

const Blog = () => {
  const buttonsText = ["All", "Design", "Tech & AI", "Account"];
  const blogImgs = [
    {
      image: "blogImg1",
      date: "October 3 2025",
      text: "Écrire un article sur l’écriture d’un article avec ChatGPT : plongée dans la mise en abyme",
      category: ["Design", "Tech & AI"],
    },
    {
      image: "blogImg2",
      date: "May 9 2025",
      text: "Pub prédictive: L’IA révolutionne le ciblage",
      category: ["Tech & AI"],
    },
  ];

  const blogGif = [
    {
      gif: "blogGif",
      date: "May 9 2025",
      text: "Conseil & relation client: un duo qui ne se briefe pas, qui se construit",
      category: ["Account"],
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen font-lausanne-500">
      <ul className="flex items-center gap-1 mx-auto py-20 1080:py-50 720:py-30 w-[80vw] text-[20px]">
        <div>
          <GoDotFill className="scale-[1.2]" />
        </div>
        <li>Blog</li>
      </ul>
      <div className="flex justify-end items-center gap-1 px-2 pb-2 border-black border-b w-full text-[0.95rem] 500:text-lg">
        <div>Categories:</div>
        <div className="flex gap-0.5">
          {buttonsText.map((item, i) => (
            <button
              className={` px-2 py-0.5 ${i === 0 ? "bg-black text-white" : "bg-gray-200"
                }`}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="min-h-screen">
        <div className="flex 720:flex-row flex-col gap-2 px-2 py-2 w-full">
          {blogImgs.map((item, i) => (
            <div className="flex flex-col gap-2 pb-10 720:pb-20 w-full 720:w-[50%]" key={i}>
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  src={`/images/blogImg/${item.image}.jpg`}
                  alt={`blogImg${i + 1}`}
                  className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-1 mt-3 text-xl">
                <GoDotFill className="scale-[1.2]" />
                <span>{item.date}</span>
              </div>
              <div className="px-2 w-[90%] font-bold text-xl 720:text-3xl hover:underline uppercase leading-tight cursor-pointer">
                <p>{item.text}</p>
              </div>
              <div className="flex gap-2">
                {item.category.map((currCategory, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-3 py-1 text-xl cursor-pointer"
                  >
                    {currCategory}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-2 pb-10 w-full">
          <div className="w-full 720:w-[33%]">
            {blogGif.map((item, i) => {
              const { gif, date, text, category } = item;
              return (
                <div className="flex flex-col gap-2">
                  <div className="rounded-[2.5rem] h-[300px] overflow-hidden">
                    <img
                      src={`/images/blogImg/${gif}.gif`}
                      alt={`blogImg${i + 1}`}
                      className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center gap-1 mt-3 text-xl">
                    <GoDotFill className="scale-[1.2]" />
                    <span>{date}</span>
                  </div>
                  <div className="px-2 w-[90%] font-bold text-xl hover:underline uppercase leading-[0.98] cursor-pointer">
                    <p>{text}</p>
                  </div>
                  <div className="flex gap-2 px-2">
                    {category.map((currCategory, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 px-3 py-1 text-xl cursor-pointer"
                      >
                        {currCategory}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
