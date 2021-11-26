// import { useState } from "react";
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

const Search = (props: SearchProps) => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-full bg-gray-50">
        <div className="m-auto">
          <h1 className="text-4xl pb-2 font-fancy m-auto text-center">
            Search For Jobs
          </h1>
          <div className="pl-4 mx-auto">
            <div className="justify-items-start flex justify-around">
              {values.map((value) => (
                <button
                  key={value}
                  className="bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mx-2"
                  type="button"
                  onClick={() => {
                    props.setResult(value);
                  }}
                >
                  <span className="text-blue-800">
                    {value.replace("_", " ")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
