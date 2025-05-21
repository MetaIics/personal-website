import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { DATA } from "@/data/resume";
import { ImageGallery } from "react-image-grid-gallery";
import Link from "next/link";
import ArtworkGallery from "@/components/artwork-gallery";

export const metadata = {
  title: "Artworks",
  description: "Artwork I have created for friends, stream, or games.",
};



const BLUR_FADE_DELAY = 0.04;

export default async function ArtworksPage() {
  return (
    <main className="bg-muted flex-col min-h-[100dvh] space-y-10 py-6 sm:py-12 px-6">
      <section id="Header">
        <div className="flex-row flex flex-1 space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={'Artworks'}
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
            text={`/'a:t.wɜ:ks/`}
          />
          <BlurFadeText
            className="max-w-[600px] sm:text-base md:text-xl "
            delay={BLUR_FADE_DELAY * 2}
            text={`Concepts, Full-renders, and Sketches all in one place. Sorted by year.  \n\nCurrently no plans for commissions.`}
          />
        </div>
      </section>
      <section id="Pieces">
        <ArtworkGallery />
      </section>
    </main>
  );
}
