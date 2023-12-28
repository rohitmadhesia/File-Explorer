import { useState } from "react";
import Folder from "./components/Folder";
import Data from "./data/Data";
export default function App() {
  const [data, setData] = useState(Data);

  console.log(Data);

  return (
    <div>
      <Folder dummy={data} />
    </div>
  );
}
