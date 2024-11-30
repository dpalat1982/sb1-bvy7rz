import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogHeader } from "@/components/blog/blog-header";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <BlogGrid />
    </div>
  );
}