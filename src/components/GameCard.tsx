import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game  from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import PlatformIconList from "./PlatformIconList";
import CriticStore from "./CriticScore";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            plaforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name} </Link>{" "}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
