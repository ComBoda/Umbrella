import Placeholder1 from "@/assets/placeholders/TheEconomics_Umbrella_kh_01.jpg";
import Placeholder2 from "@/assets/placeholders/TheEconomics_Umbrella_kh_02.jpg";
import Placeholder3 from "@/assets/placeholders/TheEconomics_Umbrella_kh_03.jpg";
import Placeholder4 from "@/assets/placeholders/TheEconomics_Umbrella_kh_04.jpg";
import Placeholder5 from "@/assets/placeholders/TheEconomics_Umbrella_kh_05.jpg";
import Placeholder6 from "@/assets/placeholders/TheEconomics_Umbrella_kh_06.jpg";
import Placeholder7 from "@/assets/placeholders/TheEconomics_Umbrella_kh_07.jpg";
import Placeholder8 from "@/assets/placeholders/TheEconomics_Umbrella_kh_08.jpg";
import Placeholder9 from "@/assets/placeholders/TheEconomics_Umbrella_kh_09.jpg";
import Placeholder10 from "@/assets/placeholders/TheEconomics_Umbrella_kh_10.jpg";
import Placeholder11 from "@/assets/placeholders/TheEconomics_Umbrella_kh_11.jpg";
import Placeholder12 from "@/assets/placeholders/TheEconomics_Umbrella_kh_12.jpg";

import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Umdr#01",
    description: "Cambodia ltd Mint umbrella the Economics #KH #AIRDROP",
    image: Placeholder1,
  },

  ourStory: {
    title: "Umbrella",
    subTitle: "Proin lorem",
    description:
      "Cambodia ltd Mint umbrella the Economics #KH #AIRDROP",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7],
  },

  ourTeam: {
    title: "Umbrella",
    members: [
      {
        name: "Umbr#1",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
      {
        name: "Umbr#2",
        role: "Aliquip Esse",
        img: Placeholder2,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "Umbr#3",
        role: "Aliquip Esse",
        img: Placeholder3,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "Umbr#4",
        role: "Aliquip Esse",
        img: Placeholder4,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "Umbr#5",
        role: "Aliquip Esse",
        img: Placeholder5,
        socials: {
          twitter: "https://twitter.com",
        },
      },
      {
        name: "Umbr#6",
        role: "Aliquip Esse",
        img: Placeholder6,
        socials: {
          twitter: "https://twitter.com",
        },
      },
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "TheEconomics Umbrella",
        description:
          "Cambodia ltd Mint umbrella the Economics #KH #AIRDROP #TheEconomics Umbrella",
      },
     
     
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
