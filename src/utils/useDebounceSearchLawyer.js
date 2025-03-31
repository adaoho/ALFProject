import { useState, useEffect, useCallback } from "react";

const useDebouncedSearchLawyers = (data, query, delay = 0) => {
  const [filteredResults, setFilteredResults] = useState([]);

  const searchLawyers = useCallback(() => {
    const lowerQuery = query?.toLowerCase();

    const results = data
      .map((lawyer) => {
        const nameMatch = lawyer?.name?.toLowerCase()?.includes(lowerQuery);
        const matchedPractices = lawyer?.keyPractices?.filter((practice) =>
          practice?.toLowerCase()?.includes(lowerQuery)
        );

        if (nameMatch || matchedPractices?.length > 0) {
          return {
            ...lawyer,
            keyPractices:
              matchedPractices?.length > 0
                ? matchedPractices?.slice(0, 4)
                : lawyer?.keyPractices,
          };
        }
        return null;
      })
      .filter(Boolean);

    setFilteredResults(results);
  }, [data, query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchLawyers();
    }, delay);

    return () => clearTimeout(timer);
  }, [query, searchLawyers, delay]);

  return filteredResults;
};

export default useDebouncedSearchLawyers;
