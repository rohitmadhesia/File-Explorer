import { useState } from "react";

const Folder = ({ dummy }) => {
  const [showFolder, setShowFolder] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handlerNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowFolder(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const onAddFolder = (e) => {
    console.log(e);
    if (e.keyCode === 13 && e.target.value) {
      dummy.items.push({
        id: new Date().getTime(),
        name: e.target.value,
        isFolder: showInput.isFolder,
        items: []
      });
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (dummy.isFolder) {
    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          onClick={() => {
            setShowFolder(!showFolder);
          }}
        >
          <span>📁{dummy.name}</span>
          <div style={{ marginLeft: "5px", marginTop: "5px" }}>
            <button onClick={(e) => handlerNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handlerNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div
          style={{
            display: showFolder ? "block" : "none",
            paddingLeft: "20px"
          }}
        >
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {dummy.items.map((exp) => (
            // <span>{exp.name}</span>
            <Folder dummy={exp} key={exp.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span
        style={{ display: "flex", flexDirection: "column", marginTop: "8px" }}
      >
        {dummy.name}
      </span>
    );
  }
};

export default Folder;
