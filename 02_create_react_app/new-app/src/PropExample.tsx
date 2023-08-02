type propsInfo = { name: string, };

export default function PropExample(props: propsInfo):JSX.Element {
  return (
    <span>Have a good day {props.name}!</span>
  );
}