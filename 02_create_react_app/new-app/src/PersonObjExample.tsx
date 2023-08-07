type personObj = {
  name: string;
  streetName: string;
};

type personCompleteObj = {
  personObj: personObj;
};
export default function PersonObjExample(props: personCompleteObj): JSX.Element {
  const { name, streetName } = props.personObj;
  return (
    <span>
      Have a good day {name} a.k.a {streetName}
    </span>
  );
}
