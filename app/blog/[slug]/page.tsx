import { Metadata } from 'next';
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { sitotiskContent, dtfContent } from '@/lib/blog';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const blogContent = {
    'kaj-je-sitotisk': sitotiskContent,
    'dtf-tisk-nova-tehnologija': dtfContent,
    // Add other blog content mappings
  }[params.slug];

  if (!blogContent) {
    return {
      title: 'Članek ne obstaja | TiskNaMajice.com',
      description: 'Iskani članek ne obstaja.'
    };
  }

  return {
    title: blogContent.metaTitle,
    description: blogContent.metaDescription,
    keywords: blogContent.keywords,
    openGraph: {
      title: blogContent.metaTitle,
      description: blogContent.metaDescription,
      images: [blogContent.image],
      type: 'article',
      publishedTime: blogContent.date,
      authors: [blogContent.author]
    }
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Članek ne obstaja</h1>
          <p className="mb-8">Izbrani članek ne obstaja.</p>
          <Link href="/blog">
            <Button>Nazaj na blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get the structured content for the current post
  const blogContent = {
    'kaj-je-sitotisk': sitotiskContent,
    'dtf-tisk-nova-tehnologija': dtfContent,
    // Add other blog content mappings
  }[params.slug];

  return (
    <div className="min-h-screen bg-white py-12">
      <article className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Nazaj na blog
          </Link>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min branja</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {blogContent?.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === 'paragraph' && <p>{section.content}</p>}
                {section.type === 'heading' && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
                {section.type === 'list' && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'cta' && (
                  <div className="bg-blue-50 p-6 rounded-lg mt-8">
                    <p className="text-blue-800 font-medium">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {blogContent?.schema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(blogContent.schema) }}
            />
          )}
        </div>
      </article>
    </div>
  );
}