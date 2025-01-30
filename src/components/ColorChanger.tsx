import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  changeColorToBlue,
  changeColorToInput,
} from "../state/color/colorChangeSlice";
import { useState } from "react";

const ColorChanger = () => {
  const colorVar = useSelector((state: RootState) => state.colorChanger.value);
  const disptach = useDispatch<AppDispatch>();
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 100,
        }}
      >
        <h2>The colour below can be changed</h2>
        <div
          style={{
            backgroundColor: colorVar,
            height: 50,
            width: 50,
            alignSelf: "center",
            marginBottom: 30,
          }}
        ></div>
        <button onClick={() => disptach(changeColorToBlue())}>
          Change to blue
        </button>
        <div style={{ marginTop: 20 }}>
          <button
            disabled={selectedColor === ""}
            onClick={() => disptach(changeColorToInput(selectedColor))}
          >
            Change to selected color
          </button>
          <select
            className="select-for-color-change"
            value={selectedColor}
            onChange={(event) => setSelectedColor(event.target.value)}
          >
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ColorChanger;
