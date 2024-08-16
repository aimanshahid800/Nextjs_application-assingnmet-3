import Link from "next/link";
import React from "react";
import { blogs } from "@/contants";

function BlogPage() {

  const gradients = [
    "bg-gradient-to-r from-blue-500 via-purple-500 to-red-500",
    "bg-gradient-to-r from-green-400 via-yellow-400 to-red-400",
    "bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500",
    "bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400",
    "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700"
  ];
  return (
    <div className="flex flex-wrap gap-5  p-20  bg-black text-black text-center justify-evenly">
      {blogs.map((item, index) => (
        <Link className={`lex gap-5 ${gradients[index % gradients.length]} bg-amber-400 text-black text-center  h-30 w-80 rounded-lg shadow-lg`} key={item.id} href={`/blog/${item.id}`}>
          {item.title}
        </Link>
      ))}

    </div>
  );
}

export default BlogPage;