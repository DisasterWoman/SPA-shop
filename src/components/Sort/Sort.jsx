import React, { useState } from "react";
import "./_sort.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

export const list = [
  { name: "orders(DESC)", sortProperty: "rating" },
  { name: "orders(ASC)", sortProperty: "-rating" },
  { name: "price(DESC)", sortProperty: "price" },
  { name: "price(ASC)", sortProperty: "-price" },
  { name: "name(DESK)", sortProperty: "title" },
  { name: "name(ASK)", sortProperty: "-title" },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterSlice.sort);
  const sortRef = React.useRef();

  const [isVisiblePop, setIsVisiblePop] = useState(false);
  const onSortClick = (obj) => {
    dispatch(setSort(obj));
    setIsVisiblePop(false);
  };

  React.useEffect(() => {
    let handler = (event) => {
      if (!sortRef.current.contains(event.target)) {
        setIsVisiblePop(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const onClickPop = () => {
    setIsVisiblePop(!isVisiblePop);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label" onClick={() => onClickPop()}>
        <div className="sort__triangleWrap">
          <img
            className="sort__triangle"
            src="/images/icons/triangle-top-icon.svg"
            alt="triangle"
            width="10"
            height="6"
          ></img>
        </div>
        <b>Sort by:</b>
        <span>{sort.name}</span>
      </div>
      {isVisiblePop && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => onSortClick(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
