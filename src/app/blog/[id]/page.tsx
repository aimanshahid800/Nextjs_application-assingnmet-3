import React from "react";
import { blogs } from "@/contants";

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

const findBlogDetail = (id: number) => {
  console.log("🚀 ~ findBlogDetail ~ id:", id);
  const blog = blogs.find((item) => {
    return item.id === id;
  });

  return blog;
};

function BlogDetail({ params }: BlogDetailPageProps) {
  const blog = findBlogDetail(Number(params.id));

  return (
    <div className="">
      Blog Details
      <div className="py-5">
        <h1 className="font-bold">{blog?.title}</h1>
        <p>{blog?.content}</p>
        <p className="font-semibold">Author: {blog?.author}</p>
      </div>
    </div>
  );
}

export default BlogDetail;