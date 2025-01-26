import { Cta } from "./components/Cta"
import { Header } from "./components/Header"
import { IconsContainer } from "./components/IconsContainer"
import DiscordLogo from "./assets/discord_logo.webp"
import AmazonLogo from "./assets/amazon_logo.webp"
import TwitchLogo from "./assets/twitch_logo.webp"
import YoutubeLogo from "./assets/youtube_logo.webp"
import InstagramLogo from "./assets/instagram_logo.webp"
import EmailLogo from "./assets/email_logo.webp"
import './styles/index.scss'

const data = [
  {
    file: YoutubeLogo,
    onClick: () => window.open(
      "https://www.youtube.com/c/PabloPaschoalin?sub_confirmation=1",
      "_blank"
    ),
    label: "Youtube"
  },
  {
    file: TwitchLogo,
    onClick: () => window.open(
      "https://www.twitch.tv/paschoalin",
      "_blank"
    ),
    label: "Twitch"
  },
  {
    file: AmazonLogo,
    onClick: () => window.open(
      "https://amzn.to/33Uawnp",
      "_blank"
    ),
    label: "Amazon"
  },
  {
    file: DiscordLogo,
    onClick: () => window.open(
      "https://discord.gg/tGZT6yJnNc",
      "_blank"
    ),
    label: "Discord"
  },
  {
    file: InstagramLogo,
    onClick: () => window.open(
      "https://instagram.com/PabloPaschoalin",
      "_blank"
    ),
    label: "Instagram"
  },
  {
    file: EmailLogo,
    onClick: () => window.open(
      "mailto:contatopablopaschoalin@gmail.com",
      "_blank"
    ),
    label: "Envie um email"
  },
]

function App() {

  return (
    <>
      <Header />
      <IconsContainer data={data} />
      <Cta />
    </>
  )
}

export default App
