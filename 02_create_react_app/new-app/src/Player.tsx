type playerProp = {
  name: string;
  titles: number;
};

export default function Player(props: playerProp): JSX.Element {
  const { titles, name } = props;
  return (
    <span>
      Wow {name}! You won {titles} titles!
    </span>
  );
}
