import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchRankMathSEO } from "../stores/mainAction";

const RankMathSEO = () => {
  const { pathname } = useLocation();
  const pageUrl = `${window.location.origin}${pathname}`;

  const { data } = useFetchRankMathSEO(pageUrl);

  useEffect(() => {
    if (!data?.head) return;

    document.querySelectorAll("[data-rankmath]").forEach((el) => el.remove());

    const temp = document.createElement("div");
    temp.innerHTML = data.head;

    Array.from(temp.childNodes).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(true);
        clone.setAttribute("data-rankmath", "true");
        document.head.appendChild(clone);
      }
    });

    return () => {
      document.querySelectorAll("[data-rankmath]").forEach((el) => el.remove());
    };
  }, [data]);

  return null;
};

export default RankMathSEO;
