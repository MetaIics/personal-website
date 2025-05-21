import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PaletteIcon } from "lucide-react";

export const DATA = {
  name: "Metalics",
  url: "https://github.com/MetaIics/personal-website",
  description:
    "Streamer, Texas A&M Alumni, Artist, Game Developer, and Video Gamer.  \nAlso known as Mialstec or Allen.",
  summary:
    "Computer Science Major on the streets, [Twitch streamer](https://twitch.tv/MetaIics) in the sheets. I am looking for ways to improve my skills in digital art, storytelling, game development, and everything in between. \n\nYou might catch me developing games such as [MusiTALITY]() and Project: τ (Tentative Title) or working on improving my stream!\n\nFeel free to take a look at [some artworks I've made](/artworks) or follow me through [write ups on my blog](/blog)! You can also use the Navigation Bar to go to my socials and contacts.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/artworks", icon: PaletteIcon, label: "Artworks" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      Twitch: {
        name: "Twitch",
        url: "https://twitch.tv/MetaIics",
        icon: Icons.twitch,

        navbar: true,
      },
      X: {
        name: "Twitter/X",
        url: "https://x.com/MetaIics",
        icon: Icons.x,

        navbar: true,
      },
      Bluesky: {
        name: "Bluesky",
        url: "https://bsky.app/profile/metalics.bsky.social",
        icon: Icons.bluesky,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Metalics",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:realmetalics@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  }
} as const;
