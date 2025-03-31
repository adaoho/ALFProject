import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";

export function Pagination({ active, setActive, totalPages }) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <Button
        variant="text"
        className="flex items-center gap-2 capitalize text-[14px]"
        onClick={prev}
        disabled={active === 1}
      >
        <BiLeftArrowAlt /> <span className="lg:block hidden">Previous</span>
      </Button>

      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <IconButton key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2 capitalize text-[14px]"
        onClick={next}
        disabled={active === totalPages}
      >
        <span className="lg:block hidden">Next</span>
        <BiRightArrowAlt />
      </Button>
    </div>
  );
}
