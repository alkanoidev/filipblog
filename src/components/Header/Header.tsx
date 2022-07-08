import { FaLink, FaGithub } from "react-icons/fa";
import SocialLink from "../SocialLink";
import TopAppBar from "../TopAppBar";

export default function Header() {
  return (
    <div className=" flex flex-col gap-3">
      <TopAppBar />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, mauris,
        semper feugiat pellentesque velit aliquam. Egestas ut pellentesque in ut
        cras praesent. Mus ultrices at amet enim, scelerisque.
      </p>

      <div className="flex gap-3">
        <SocialLink
          icon={<FaLink className="fill-dark" />}
          title="Portfolio"
          url="https://filipivanovic.netlify.app"
        />
        <SocialLink
          icon={<FaGithub className="fill-dark" />}
          title="GitHub"
          url="https://github.com/alkanoidev"
        />
      </div>
    </div>
  );
}
