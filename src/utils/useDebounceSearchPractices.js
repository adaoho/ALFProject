import { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";

const useDebounceSearchPractices = (data, query, delay = 300) => {
  const [filteredData, setFilteredData] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery) => {
        if (searchQuery?.trim()?.length < 3) {
          setFilteredData([]);
          return;
        }

        const lowerQuery = searchQuery?.toLowerCase();

        const result = data
          .map((item) => {
            const titleMatch = item?.title?.toLowerCase()?.includes(lowerQuery);
            const matchedServices = item?.specialistServiceArea?.filter(
              (service) => service?.title?.toLowerCase()?.includes(lowerQuery)
            );

            if (titleMatch || matchedServices?.length > 0) {
              return {
                ...item,
                specialistServiceArea:
                  matchedServices?.length > 0
                    ? matchedServices
                    : item?.specialistServiceArea,
              };
            }

            return null;
          })
          .filter(Boolean);

        setFilteredData(result);
      }, delay),
    [data, delay]
  );

  useEffect(() => {
    debouncedSearch(query);

    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  return filteredData;
};

export default useDebounceSearchPractices;
