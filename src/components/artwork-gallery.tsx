"use client";

import { ImageGallery } from "react-image-grid-gallery";
import BlurFade from "./magicui/blur-fade";
import { useEffect, useState } from "react";
import { Toggle } from '@base-ui-components/react/toggle';
import { ToggleGroup } from '@base-ui-components/react/toggle-group';

const imagePrefix = process.env.NODE_ENV === "production" ? "/personal-website" : "";

const BLUR_FADE_DELAY = 0.04;

const mini_gallery = [
  {
    id: "1",
    alt: "Home - The Human looks back, reminiscing a forgotten past.",
    caption: "Home",
    src: imagePrefix + "/artworks/2025/metalics-home.jpg",
  },
  {
    id: "2",
    alt: "Stinger Animation - Each person shares the same fate. It's just the way they express it that differs.",
    caption: "Stinger Animation",
    src: imagePrefix + "/artworks/2025/metalics-transition.gif",
  },
  {
    id: "3",
    alt: "Mala - Small ferret-like, draconic animal.",
    caption: "Mala, the Ferret-Dragon",
    src: imagePrefix + "/artworks/2024/mala.gif",
  },
  {
    id: "4",
    alt: "Logica - Key art for the song. The Human loses sight of the meaning of life.",
    caption: "Logica - Song Cover",
    src: imagePrefix + "/artworks/2023/human-logica.jpg",
  }
];

const images_2025 = [
  {
    id: "2025_4",
    alt: "Mialstec (Computer) - Key art for the website. My \"Fursona\".",
    caption: "Mialstec (Computer)",
    src: imagePrefix + "/artworks/2025/mialstec-comp.png",
  },
  {
    id: "2025_3",
    alt: "Riri (Doro) - Gift art for YuureiRiri's New Model and Birthday!",
    caption: "Riri (Doro)",
    src: imagePrefix + "/artworks/2025/riri-doro.jpg",
  },
  {
    id: "2025_2",
    alt: "Dragon Profile Picture (Animated) - Test animation and design for the Dragon.",
    caption: "Dragon Profile Picture (Animated)",
    src: imagePrefix + "/artworks/2025/dragon-profile-animated.gif",
  },
  {
    id: "2025_1",
    alt: "Home - The Human looks back, reminiscing a forgotten past.",
    caption: "Home",
    src: imagePrefix + "/artworks/2025/metalics-home.jpg",
  },
  {
    id: "2025_0",
    alt: "Stinger Animation - Each person shares the same fate. It's just the way they express it that differs.",
    caption: "Stinger Animation",
    src: imagePrefix + "/artworks/2025/metalics-transition.gif",
  }
]

const images_2024 = [
  {
    id: "2024_0",
    alt: "Karwoo | Magician - Secret Santa for Karwoo. Despite his appearence, this Shiba contains more magic than normal.",
    caption: "Karwoo | Magician",
    src: imagePrefix + "/artworks/2024/karwoo-tarot.jpg",
  },
  {
    id: "2024_1",
    alt: "Human (Keychain) - Side: Human for a keychain concept.",
    caption: "Human (Keychain)",
    src: imagePrefix + "/artworks/2024/human-charm.png",
  },
  {
    id: "2024_2",
    alt: "Dragon (Keychain) - Side: Dragon for a keychain concept.",
    caption: "Dragon (Keychain)",
    src: imagePrefix + "/artworks/2024/dragon-charm.png",
  },
  {
    id: "2024_3",
    alt: "Santa Cosplay (999) - Costume art for the 999 stream with fallinotes.",
    caption: "Santa Cosplay (999)",
    src: imagePrefix + "/artworks/2024/human-santa.png",
  },
  {
    id: "2024_4",
    alt: "Mala, the Dragon-Ferret - Literally the cutest thing.",
    caption: "Mala, the Dragon-Ferret",
    src: imagePrefix + "/artworks/2024/mala.gif",
  },
  {
    id: "2024_5",
    alt: "Dragon VTuber (Revamp) - Complete Redesign of the Human and Dragon pair.",
    caption: "Dragon VTuber (Revamp)",
    src: imagePrefix + "/artworks/2024/metalics-revamp.jpg",
  },
  {
    id: "2024_6",
    alt: "Hua Sheng (DnD) - Silver Dragonborn Paladin. Always hungry for more.",
    caption: "Hua Sheng (DnD)",
    src: imagePrefix + "/artworks/2024/dnd-hua.png",
  },
  {
    id: "2024_7",
    alt: "Metalics (Arknight) - Self-insert in the world of Arknights. Works at the Lungmen Guard Department.",
    caption: "Metalics (Arknight)",
    src: imagePrefix + "/artworks/2024/human-arknight.png",
  },
  {
    id: "2024_8",
    alt: "Falli (ArtFight) - Attack on fallinotes for ArtFight 2024!",
    caption: "Falli (ArtFight)",
    src: imagePrefix + "/artworks/2024/falli-morning.jpg",
  },
  {
    id: "2024_9",
    alt: "Kloud (ArtFight) - Attack on KloudKyu for ArtFight 2024!",
    caption: "Kloud (ArtFight)",
    src: imagePrefix + "/artworks/2024/kloud-headshot.jpg",
  },
  {
    id: "2024_10",
    alt: "Kana (On-stage) - Gift art for sSakanaSushi for her new model!",
    caption: "Kana (On-stage)",
    src: imagePrefix + "/artworks/2024/kana-reveal.jpg",
  },
  {
    id: "2024_11",
    alt: "Starting... (Dragon) - Starting scene for stream. The Dragon holds a Jade Bagua",
    caption: "Starting... (Dragon)",
    src: imagePrefix + "/artworks/2024/dragon-starting.jpg",
  },
  {
    id: "2024_12",
    alt: "Starting... (Human) - Starting scene for stream. The Human holds a Tarot Card",
    caption: "Starting... (Human)",
    src: imagePrefix + "/artworks/2024/human-starting.jpg",
  },
  {
    id: "2024_13",
    alt: "Visual Novel Test - Attempted to try VN models. Includes Moth.",
    caption: "Visual Novel Test",
    src: imagePrefix + "/artworks/2024/metalics-lineup.jpg",
  },
  {
    id: "2024_14",
    alt: "Dragon VTuber (2nd Edition) - Reworked Model with a different style.",
    caption: "Dragon VTuber (2nd Edition)",
    src: imagePrefix + "/artworks/2024/metalics-ref-old.jpg",
  }
];

const images_2023 = [
  {
    id: "2023_0",
    alt: "Stinger Animation (Old) - Each person shares the same fate. It's just the way they express it that differs.",
    caption: "Stinger Animation (Old)",
    src: imagePrefix + "/artworks/2023/metalics-transition-old.gif",
  },
  {
    id: "2023_01",
    alt: "Plushie (Dragon) - Plushie form of the dragon.",
    caption: "Plushie (Dragon)",
    src: imagePrefix + "/artworks/2023/dragon-plush.png",
  },
  {
    id: "2023_1",
    alt: "Dragon (Sitting) - THe dragon is sitting.",
    caption: "Dragon (Sitting)",
    src: imagePrefix + "/artworks/2023/dragon-sit.png",
  },
  {
    id: "2023_2",
    alt: "Happy 2023! - Celebration of all the friends I've made this year.",
    caption: "Happy 2023!",
    src: imagePrefix + "/artworks/2023/2023.jpg",
  },
  {
    id: "2023_3",
    alt: "Happy 2023! (Process) - Drawing process of the Dragon and Human.",
    caption: "Happy 2023! (Process)",
    src: imagePrefix + "/artworks/2023/2023-process.gif",
  },
  {
    id: "2023_4",
    alt: "Logica - Key art for the song. The Human loses sight of the meaning of life.",
    caption: "Logica - Song Cover",
    src: imagePrefix + "/artworks/2023/human-logica.jpg",
  },
  {
    id: "2023_5",
    alt: "Connection - A key link lies between the Human and the Dragon.",
    caption: "Connection",
    src: imagePrefix + "/artworks/2023/metalics-connection.jpg",
  },
  {
    id: "2023_6",
    alt: "Streetwear - Concept art for streetwear costume.",
    caption: "Streetwear (Concept)",
    src: imagePrefix + "/artworks/2023/metalics-streetwear.jpg",
  },
  {
    id: "2023_7",
    alt: "Nohr - For NohrAndTea. Posing in front of Ivan's Grave.",
    caption: "Nohr Commission 1",
    src: imagePrefix + "/artworks/2023/nohr-comm.jpg",
  },
  {
    id: "2023_8",
    alt: "Nohr - For NohrAndTea. Prepping a gun.",
    caption: "Nohr Commission 2",
    src: imagePrefix + "/artworks/2023/nohr-comm-2.png",
  },
  {
    id: "2023_9",
    alt: "Kragono (Spooky Month) - For Kragono. Look at him go!",
    caption: "Kragono (Spooky Month)",
    src: imagePrefix + "/artworks/2023/krag-spooky.gif",
  },
  {
    id: "2023_10",
    alt: "Wisteria (Human) - Key art for Model Reveal. Relish in the flowers of the Wisteria tree.",
    caption: "Wisteria (Human)",
    src: imagePrefix + "/artworks/2023/human-wisteria.jpg",
  },
  {
    id: "2023_11",
    alt: "Wisteria (Dragon) - Key art for Model Reveal. Ponder on the life the Wisteria tree brings.",
    caption: "Wisteria (Dragon)",
    src: imagePrefix + "/artworks/2023/dragon-wisteria.jpg",
  },
  {
    id: "2023_12",
    alt: "Zither - Key art for Model Reveal. Listen to his song.",
    caption: "Zither",
    src: imagePrefix + "/artworks/2023/dragon-zither.jpg",
  },
  {
    id: "2023_13",
    alt: "Metalics - VTuber reveal art. Split between a human and draconic form.",
    caption: "Metalics (Old Dragon VTuber Model)",
    src: imagePrefix + "/artworks/2023/metalics-model-old.jpg",
  },
  {
    id: "2023_14",
    alt: "Lee (Arknights) - Lee killing Kristen with ball.",
    caption: "Lee (Arknights)",
    src: imagePrefix + "/artworks/2023/lee-gaming.jpg",
  },
  {
    id: "2023_15",
    alt: "Kloud - Halloween Speedrun Model. I hate this, by the way.",
    caption: "Kloud (Halloween)",
    src: imagePrefix + "/artworks/2023/kloud-cursed.gif",
  },
  {
    id: "2023_16",
    alt: "Tarot Cards - Old Tarot representation of multiple VTubers.",
    caption: "Tarot Cards (Old Set)",
    src: imagePrefix + "/artworks/2023/metalics-tarot-old.jpg",
  },
  {
    id: "2023_17",
    alt: "sSakanaSushi - Art for her birthday!",
    caption: "sSakanaSushi (Birthday)",
    src: imagePrefix + "/artworks/2023/kana-bday.jpg",
  },
  {
    id: "2023_18",
    alt: "YuureiRiri - Art for her birthday!",
    caption: "YuureiRiri (Birthday)",
    src: imagePrefix + "/artworks/2023/riri-bday.jpg",
  },
  {
    id: "2023_19",
    alt: "Von Lycaon - Character from Zenless Zone Zero drawn as Cheems, a Shiba Inu.",
    caption: "Von Lycaon (Cheems)",
    src: imagePrefix + "/artworks/2023/vonlycaon.png",
  },
  {
    id: "2023_20",
    alt: "HechaWeeWow - Art for his birthday!",
    caption: "HechaWeeWow (Birthday)",
    src: imagePrefix + "/artworks/2023/hecha-bulba.jpg",
  },
  {
    id: "2023_21",
    alt: "Flowers - Animation for stream. A dream, never-ending.",
    caption: "Flowers",
    src: imagePrefix + "/artworks/2023/moth-cover.gif",
  },
  {
    id: "2023_22",
    alt: "My Sadness is Liquid-Formed - Key art for the song. POV: Minor inconveniences = Sad.",
    caption: "My Sadness is Liquid-Formed - Song Cover",
    src: imagePrefix + "/artworks/2023/moth-cover.jpg",
  },
  {
    id: "2023_23",
    alt: "Mialstec (Self Portrait) - Attempt to make a generalized \"persona\" for non-streaming purposes.",
    caption: "Mialstec (Self Portrait)",
    src: imagePrefix + "/artworks/2023/mialstec-headshot.jpg",
  },
  {
    id: "2023_24",
    alt: "Moth - VTuber reveal art. Stuck in a void.",
    caption: "Moth (VTuber Model)",
    src: imagePrefix + "/artworks/2023/moth-reveal.jpg",
  }
];

const images_2022 = [
  {
    id: "2022_0",
    alt: "Records - Key art for model reveal. Record the words and its emotion.",
    caption: "Records",
    src: imagePrefix + "/artworks/2022/moth-record.gif",
  },
  {
    id: "2022_1",
    alt: "Emotes (Set 1) - Emotes for model reveal.",
    caption: "Emotes (Set 1)",
    src: imagePrefix + "/artworks/2022/metalics-emotes.jpg",
  },
  {
    id: "2022_2",
    alt: "Pummel Party Aftermath - A group of VTubers absolutely messed up after a game of Pummel Party.",
    caption: "Pummel Party Aftermath",
    src: imagePrefix + "/artworks/2022/peak.jpg",
  },
  {
    id: "2022_3",
    alt: "Plushies - Plushies of Nagi, Tappy, and Old Moth Model.",
    caption: "Plushies",
    src: imagePrefix + "/artworks/2022/moth-plushies.png",
  },
  {
    id: "2022_4",
    alt: "New Moth (Human) - Human Form Test.",
    caption: "New Moth (Human)",
    src: imagePrefix + "/artworks/2022/moth-human.png",
  },
  {
    id: "2022_5",
    alt: "New Moth (Bust) - Updated Bust of the Moth.",
    caption: "New Moth (Bust)",
    src: imagePrefix + "/artworks/2022/moth-bust.png",
  },
  {
    id: "2022_6",
    alt: "Moth (Bust) - Simple Bust of the Moth.",
    caption: "Moth (Bust)",
    src: imagePrefix + "/artworks/2022/moth-old.jpg",
  },
  {
    id: "2022_7",
    alt: "Moth (Version 2) - Redesign of the Moth.",
    caption: "Moth (Version 2)",
    src: imagePrefix + "/artworks/2022/moth-head.png",
  },
  {
    id: "2022_8",
    alt: "Notu (Model) - Full model for iamprobablynotu.",
    caption: "Notu (Model)",
    src: imagePrefix + "/artworks/2022/notu.png",
  },
  {
    id: "2022_9",
    alt: "Cringe Nae Nae Baby - Draw over of a meme.",
    caption: "Cringe Nae Nae Baby",
    src: imagePrefix + "/artworks/2022/moth-cringe.jpg",
  },
  {
    id: "2022_10",
    alt: "Gremlin - Sketch of my VTuber and AL.",
    caption: "Gremlin",
    src: imagePrefix + "/artworks/2022/moth-gremlin.jpg",
  },
  {
    id: "2022_11",
    alt: "AL (Chilling) - Original Character. Chilling Animation",
    caption: "AL (Chilling)",
    src: imagePrefix + "/artworks/2022/al-chilling.gif",
  },
  {
    id: "2022_12",
    alt: "AL (Cleaning) - Original Character. Cleaning Animation",
    caption: "AL (Cleaning)",
    src: imagePrefix + "/artworks/2022/al-cleaning.gif",
  },
  {
    id: "2022_13",
    alt: "Moth (First Edition) - First ever model of my VTuber.",
    caption: "Moth (First Edition)",
    src: imagePrefix + "/artworks/2022/moth-legacy.png",
  }
];


const selections = {
  year: [2025, 2024, 2023, 2022]
}


export default function ArtworkGallery() {
    const [image_array, setGallery] = useState(images_2025);
    const [imageYear, setYear] = useState(2025);

    useEffect(() => {

      switch(imageYear){
        case 2025:
          setGallery(images_2025);
          break;
        case 2024:
          setGallery(images_2024);
          break;
        case 2023:
          setGallery(images_2023);
          break;
        case 2022:
          setGallery(images_2022);
          break;
      }

    }, [imageYear]);

    if(image_array === null)
      return;
     
    return (
      <div>
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="flex-col flex flex-auto pb-3 items-center justify-center">
          <ToggleGroup defaultValue={["2025"]} className="flex gap-1 rounded-md border bg-card p-0.5">
            <Toggle 
              value='2025' 
              onClick={() => setYear(2025)} 
              className="flex size-15 px-2 py-1 items-center justify-center rounded-sm text-muted-foreground select-none hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1 active:bg-accent data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"
            >
              2025
            </Toggle>
            <Toggle 
              value="2024" 
              onClick={() => setYear(2024)} 
              className="flex size-15 px-2 py-1 items-center justify-center rounded-sm text-muted-foreground select-none hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1 active:bg-accent data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"
            >
              2024
            </Toggle>
            <Toggle 
              value="2023" 
              onClick={() => setYear(2023)} 
              className="flex size-15 px-2 py-1 items-center justify-center rounded-sm text-muted-foreground select-none hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1 active:bg-accent data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"
            >
              2023
            </Toggle>
            <Toggle 
              value="2022" 
              onClick={() => setYear(2022)} 
              className="flex size-15 px-2 py-1 items-center justify-center rounded-sm text-muted-foreground select-none hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1 active:bg-accent data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"
            >
              2022
            </Toggle>
          </ToggleGroup>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3} className="py-1">
          <ImageGallery imagesInfoArray={image_array || images_2025} gapSize={12} />
        </BlurFade>
      </div>
    )
}

export function MiniArtworkGallery() {
    return <ImageGallery imagesInfoArray={mini_gallery} gapSize={12} />
}