import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);

  // console.log({ data });
  // console.log(dataType);

  // Write code here.
  //
  useEffect(() => {
    fetch(`http://localhost:4000/${dataType}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data} />}
    </div>
  );
}
