const Search = ({ query, setQuery, onSearch }) => {
  return (
    <form
      className="flex items-center max-w-sm mx-auto space-x-2 bg-gray-100 rounded-full"
      onSubmit={onSearch}
    >
      <div className="relative w-full">
        <input
          type="text"
          className="px-3 py-3 font-Manrope rounded-full bg-gray-100 border border-default-medium text-black focus:ring-brand focus:border-brand w-full outline-none placeholder:text-body"
          placeholder="Article name, tag, category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center shrink-0 text-black bg-brand rounded-full w-10 h-10 focus:outline-none"
      >
        🔍
      </button>
    </form>
  );
};

export default Search;
