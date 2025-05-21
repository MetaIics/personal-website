import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Card } from "@/components/ui/card";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Write ups, info dumps, and other stuff I've logged.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="bg-muted flex-col min-h-[100dvh] space-y-10 py-6 sm:py-12 px-6">
      <section id="Header">
        <div className="flex-row flex flex-1 space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={'Blog'}
          />
          <BlurFade delay={BLUR_FADE_DELAY} className="ml-auto">
            <Link className="pb-4" href={"/"}>
              <InteractiveHoverButton>Home</InteractiveHoverButton>
            </Link>
          </BlurFade>
        </div>
        <div className="flex-col flex flex-1 space-y-2">
          <BlurFadeText
            className="max-w-[600px] sm:text-base md:text-xl text-muted-foreground"
            delay={BLUR_FADE_DELAY}
            text={`/bläg/`}
          />
          <BlurFadeText
            className="max-w-[600px] sm:text-base md:text-xl "
            delay={BLUR_FADE_DELAY * 2}
            text={`Write ups, info dumps, and other stuff I might be interested in and want to yap about. Written casually and informally.`}
          />
        </div>
      </section>
      <section id="Posts">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
              <Card className="p-2 mb-4">
                <Link
                  className="flex flex-col space-y-1"
                  href={`/blog/${post.slug}`}
                >
                  <div className="w-full flex flex-col">
                    <p className="tracking-tight">{post.metadata.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.metadata.publishedAt}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.metadata.type}
                    </p>
                  </div>
                  <div className="w-full flex flex-col">
                    <p className="text-xs italic text-muted-foreground text-right">
                      {post.metadata.description}
                    </p>
                  </div>
                </Link>
              </Card>
            </BlurFade>
          ))}
      </section>
    </main>
  );
}
