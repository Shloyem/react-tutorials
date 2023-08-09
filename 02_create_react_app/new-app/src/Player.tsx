type playerInfo = {
  name: string;
  titles: number;
};

type playerType = {
  player: playerInfo;
};

export default function Player(props: playerType): JSX.Element {
  const { titles, name } = props.player;
  return (
    <span>
      Wow {name}! You won {titles} titles!
    </span>
  );
}
