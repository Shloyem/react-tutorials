type person = {
  name: string;
  streetName: string;
  };

type personInfo = {
  person: person;
};

// type is important, if there are 2 props and I pass just 1 it would error:
// Property 'streetName' is missing in type '{ name: string; }' but required in type 'propsInfo'.ts(2741)

export default function PersonProp(props: personInfo): JSX.Element {
  const name: string = props.person.name;
  const streetName: string = props.person.streetName;
  // const {streetName, name} = props.person; // same
  return (
    <span>
      Have a good day {name} a.k.a {streetName}
    </span>
  );
}
