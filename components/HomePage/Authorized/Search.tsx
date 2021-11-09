import { useState } from "react";
type SearchProps = {
  setResult: (value: string) => void;
  result: string;
  setClickedSearch: (value: boolean) => void;
};

const values = [
  "Marketing",
  "Graphic_Design",
  "Programming",
  "Communication",
  "Charity",
];

const SearchComponent = (props: SearchProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-56">
      <div className="flex justify-items-start">
        <button
          className="text-white bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="text-blue-800">
            {" "}
            {props.result === "" ? "Choose a category" : props.result}
          </span>{" "}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            props.setClickedSearch(true);
          }}
        >
          <div className="ml-2 mt-2">
            <svg
              className="text-black h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </div>
        </button>
      </div>
      {/* Dropdown menu */}
      <div className={`${!open && "hidden"} pr-12`}>
        <div
          className="bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
          id="dropdown"
        >
          <ul className="py-1" aria-labelledby="dropdown">
            {values.map((value) => (
              <li key={value}>
                <button
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setResult(value);
                  }}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
