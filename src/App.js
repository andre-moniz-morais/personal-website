import './styles/App.css';
import PersonalDetails from './components/PersonalDetails';
import HorizontalList from './components/HorizontalList';
import skillskope_img from "./assets/skillskope.png";
import synertics_img from "./assets/synertics.png";
import unlsolu_img from "./assets/unlimited_solutions.png";
import codepen1 from "./assets/codepen1.png";
import cardano_fields from "./assets/cardano_fields.png";
import death_escape from "./assets/death_escape.png";
import youtube_automator from "./assets/youtube_automator.png";
import kodart_website from "./assets/kodart_website.png";
import walkers_raffles from "./assets/walkers_raffles.png";
import walkers_website from "./assets/walkers_website.png";

function App() {
  const PROFESSIONAL_WORK = [
    {
      name: "Skillskope",
      image: skillskope_img,
      description: "Co-Founder & Lead Developer. Led the creation of a platform to help students discover career paths. Managed development and strategy. The company has since closed, but valuable lessons were learned.",
    },
    {
      name: "Synertics",
      image: synertics_img,
      description: "Full-Stack Software Engineer. Sole developer at Synertics, building and maintaining software for the renewable energy PPA market. Responsible for the entire tech stack, ensuring scalability and performance.",
    },
    {
      name: "Unlimited Solutions",
      image: unlsolu_img,
      description: "Co-Founder. Currently building a software development company with two partners. Focused on delivering custom software solutions to businesses, handling both technical and strategic aspects of the startup.",
    }
  ];

  const PERSONAL_PROJECTS = [
    {
      name: "Codepen slider",
      image: codepen1,
      description: "It was a 3-hour challenge I took after seeing a tiktok short videos joking about the designer expectations VS developer reality.",
      external_link: {
        name: "Pen",
        link: "https://codepen.io/Andre-Morais-the-encoder/pen/vYoQXmd"
      }
    },
    {
      name: "Cardano fields",
      image: cardano_fields,
      description: "A cardano play-2-earn browser game that, although having some players, didn't have enough traction to start selling the NFT collection. The game was fully working. It's currently deactivated.",
      external_link: {
        name: "X (former Twitter)",
        link: "https://x.com/CardanoFields"
      }
    },
    {
      name: "Death escape",
      image: death_escape,
      description: "A Cardano-powered play-2-earn game with a post apocalyptic style. It was developed in Next.js with connection with Cardano blockchain.",
      external_link: {
        name: "Game",
        link: "http://death-escape.vercel.app"
      }
    },
    {
      name: "Youtube automator",
      image: youtube_automator,
      description: "(under construction) A way of create youtube videos effortlessly."
    }
  ];
  
  const OUTSOURCING_PROJECTS = [
    {
      name: "Kodart's website",
      image: kodart_website,
      description: "A Cardano-powered markerplace to sell NFTs and physical artworks. Developed in React (frontend) and Python with Django (backend)."
    },
    {
      name: "Walkers raffles website",
      image: walkers_raffles,
      description: "A Cardano-powered raffles website. Developed in Next.js with connection with Cardano blockchain. Developed for WalkersCNFT.",
      external_link: {
        name: "Website",
        link: "https://www.walkersraffles.xyz"
      }
    },
    {
      name: "Walkers website",
      image: walkers_website,
      description: "A Cardano-powered landing page with wallet connection. Developed in Next.js with connection with Cardano blockchain. Developed for WalkersCNFT.",
      external_link: {
        name: "Website",
        link: "http://walkerscardano.xyz"
      }
    }
  ];

  return (
    <div className="App">
      <PersonalDetails />
      <HorizontalList list_projects={PROFESSIONAL_WORK} title="Professional Work"/>
      <HorizontalList list_projects={PERSONAL_PROJECTS} title="Personal Projects"/>
      <HorizontalList list_projects={OUTSOURCING_PROJECTS} title="Outsourcing Projects"/>
    </div>
  );
}

export default App;
