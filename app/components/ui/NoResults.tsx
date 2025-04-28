// components/talent/NoResults.tsx
export const NoResults = () => (
  <div className="animate-fadeIn flex flex-col items-center justify-center py-8 text-center">
    <img src="/search.png" alt="No results" className="mb-3 h-8 w-8 opacity-30" />
    <p className="text-sm text-[#665F5F]">No matching talents found</p>
    <p className="mt-1 text-xs text-[#665F5F]">Try a different search term or category</p>
  </div>
);
