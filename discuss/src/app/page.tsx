import { Divider } from "@nextui-org/react";
import TopicCreateform from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/post";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="test-xl m-2">Top Post</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow px-2 py-3 text-center">
        <TopicCreateform />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
