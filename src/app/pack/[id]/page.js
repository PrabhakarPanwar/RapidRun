import { packs } from "@/data/packs";

function getPost(id) {
  return packs.find((item) => item.id == id) || null;
}

export default async function Page({ params }) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) return <div>Post not found</div>;
  return (
    <div className="flex flex-col gap-3">
      <p>{post.title}</p>
      <p>{post.tag}</p>
      <img src={post.img} alt={post.title} />
      <p>{post.desc}</p>
      <p>{post.about}</p>
    </div>
  );
}
