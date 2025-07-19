import TopicCreateform from "@/components/topics/topic-create-form";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="test-xl m-2">Top Post</h1>
      </div>
      <div>
        <TopicCreateform />
      </div>
    </div>
  );
}
