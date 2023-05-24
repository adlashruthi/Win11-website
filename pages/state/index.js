import { useSelector } from "react-redux";

export default function State() {
  const data = useSelector((state) => state.family.data);

  console.log("data", data);
  return (
    <div>
      {data.map((i) => (
        <>
          <GrandParent name={i?.grandParent} />
          <Father name={i?.parent} />
        </>
      ))}
    </div>
  );
}

function GrandParent(props) {
  const { name } = props;
  return <div>My GrandFather Name is {name}</div>;
}

function Father(props) {
  const { name } = props;
  return <div>My Father Name is {name}</div>;
}

function Children(props) {
  const { name } = props;
  return <div>My Name is {name}</div>;
}
