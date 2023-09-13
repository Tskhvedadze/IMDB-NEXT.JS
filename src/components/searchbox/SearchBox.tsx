"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  }

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5 "
      onSubmit={submitHandler}
    >
      <input
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="Search Keywords..."
        className=" w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1 "
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400 "
      >
        Search
      </button>
    </form>
  );
};
