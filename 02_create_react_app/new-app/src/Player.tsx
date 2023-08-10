type playerInfo = {
  name: string;
  titles: number;
};

type playerType = {
  player: playerInfo;
};

export default function Player(props: playerType): JSX.Element {
  const { titles, name } = props.player;
  const overall: string =
    titles > 40 ? "You're a maestro!" : 'You can do better';
  return (
    <span>
      Wow {name}! You won {titles} titles! {overall}
    </span>
  );
}
