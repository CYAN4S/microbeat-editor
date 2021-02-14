import React, { useEffect, useState } from "react";

function PatternEditor() {
  const [mousePos, setMousePos] = useState<{x: number, y: number}>({x: 0, y: 0})

  const onMouseMove = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

  }

  return (
    <div className="pattern-editor" >
      <div className="pattern-scrollview" onMouseMove={onMouseMove}>
        <div className="pattern-timestamp">

        </div>
        <div className="pattern-notes">

        </div>
      </div>
    </div>
  );
}

export default PatternEditor;
