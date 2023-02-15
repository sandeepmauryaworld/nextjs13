import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchPosts = async () => {
  const res = await fetch(
    `https://qyydnh2xz9.execute-api.us-west-1.amazonaws.com/prod/products`
  );
  const posts = await res.json();
  return posts;
};

const card = async () => {
  const posts = await fetchPosts();
  console.log( posts.products );

  return (
   



<div className="flex d-flex w-full">
{posts.products.map((post) => {
  return (
    <div  className="w-full" key={post.fid}>
      <section className=" flex d-flex  text-gray-600 body-font  ">
        <div className=" container px-5 py-24 mx-auto ">
          <div className="">
            <div className="">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden grid-cols-3 cardcss">
             <Link href={`/posts/${post.lid}`}> <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  width={550}
                  height={337}
                  src={post.logo}
                  alt="posts"
                />
                </Link>  
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Country {post.location_name}
                  </h2>
                  <Link href={`/posts/${post.lid}`}>
                    {" "}
                    <h1 className="title-font text-lg w-full font-medium text-gray-900 mb-3">
                      {post.lid}{" "}
                    </h1>
                  </Link>
                  <p className="leading-relaxed mb-3">
                    {post.address_1}
                  </p>
                  <div className="flex items-center flex-wrap ">
                 <Link href={`/posts/${post.lid}`} >  <p className="	text-decoration-line underline text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More {post.address_1}..
                      
                    </p>
                    </Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
})}
</div>
  );
};

export default card;
