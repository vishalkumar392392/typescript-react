import { useEffect, useState } from "react";
import { get } from "./components/util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";

type RawData = {
  id: number;
  title: string;
  body: string;
  userId: number;
}[];

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawData;

      const blogPosts: BlogPost[] = data.map((post) => {
        return {
          id: post.id,
          title: post.title,
          text: post.body,
        };
      });
      setPosts(blogPosts);
    };
    fetchPosts();
  }, []);
  return (
    <main>
      <img src={fetchingImg} alt="img" />
      <BlogPosts posts={posts} />
    </main>
  );
}

export default App;
