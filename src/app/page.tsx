import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ThemedImage } from "@/components/themed-image"
import { getBlogPosts } from "@/data/blog";
import { Card } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { MiniArtworkGallery } from "@/components/artwork-gallery";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="bg-muted flex-col min-h-[100dvh] space-y-10 py-6 sm:py-12 px-6" >
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Howdy,`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`I'm ${DATA.name.split(" ")[0]}! 🐉`}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="py-3">
              <ThemedImage />
            </BlurFade>
          </div>
            <div className="flex-col flex flex-1 space-y-2">
              <BlurFadeText
                className="max-w-[600px] sm:text-base md:text-xl "
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
            </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="artworks">
        <div className="space-y-12 w-full pt-12 pb-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Artworks
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Take a Peek 
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Concepts, Renders, and Animations. Made in Krita and Live2D. Here are some iconic ones. 
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
          <div className="pb-6">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <MiniArtworkGallery />
            </BlurFade>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <BlurFadeText
              className="max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
              delay={BLUR_FADE_DELAY * 7}
              text={"Looking for other pieces?"}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <Link href={"/artworks"}>
                <InteractiveHoverButton>Artworks</InteractiveHoverButton>
              </Link>
            </BlurFade>
          </div>
      </section>
      <section id="posts">
        <div className="space-y-12 w-full pt-12 pb-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Blog Posts
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Updated 
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Keep up with the things that interest me or I have developed. Written casually and informally. Here are the most recent ones.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .slice(0, 3)
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 9 + id * 0.05} key={post.slug}>
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
          <div className="flex flex-col items-center justify-center text-center">
            <BlurFadeText
              className="max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
              delay={BLUR_FADE_DELAY * 10}
              text={"Want more or can't find the right post?"}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <Link href={"/blog"}>
                <InteractiveHoverButton>Posts</InteractiveHoverButton>
              </Link>
            </BlurFade>
          </div>
          
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-3 pb-5">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Questions or business inquiries?{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  Just send me an email!
                </Link>{" "} I&apos;ll get to you as soon as I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
