type propsInfo = {
  name: string;
  streetName: string;
};

// type is important, if there are 2 props and I pass just 1 it would error:
// Property 'streetName' is missing in type '{ name: string; }' but required in type 'propsInfo'.ts(2741)

export default function PropExample(props: propsInfo): JSX.Element {
  const name: string = props.name;
  const streetName: string = props.streetName;
  return (
    <span>
      Have a good day {name} a.k.a {streetName}
    </span>
  );
}
