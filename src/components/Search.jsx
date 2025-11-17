import React from "react";

function Search() {
  return (
    <form>
      <div className=" bg-white max-w-3xl sm:max-w-5xl flex mx-auto px-9 py-3 rounded-lg">
        <input
          type="search"
          placeholder="Search for news, topics..."
          className="w-3xl border-0 outline-0 "
        />
      </div>
    </form>
  );
}

export default Search;
