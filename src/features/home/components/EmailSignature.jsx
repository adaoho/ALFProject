import React from "react";

const EmailSignature = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-14 h-fit">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col">
            <h1 className="text-[#18418A] font-bold text-[25px]">
              Riza Buditomo
            </h1>
            <h1 className="font-bold">Managing Partner</h1>
          </div>

          <div className="flex flex-col">
            <a
              href="https://wa.me/628159110720"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all"
            >
              +62 815 9110 720
            </a>
            <a
              className="hover:underline transition-all"
              href="mailto:riza.buditomo@anagatalaw.com"
            >
              riza.buditomo@anagatalaw.com
            </a>
          </div>

          <div className="flex flex-col hover:underline transition-all">
            <a href="https://maps.app.goo.gl/7wAmQCdRBpBned4X7" target="_blank">
              <h1>Wisma Nugra Santana, 16th Floor</h1>
              <h1>Jl. Jendral Sudirman Kav 7-8 Jakarta 10220</h1>
            </a>
          </div>

          <a href="https://www.anagatalaw.com" target="_blank">
            <h1 className="font-bold mt-2 hover:underline transition-all">
              www.anagatalaw.com
            </h1>
          </a>
        </div>

        <div className="w-[3px] h-full">
          <img
            src="https://ik.imagekit.io/od7hmpxwx/Line.png?updatedAt=1731389720912"
            alt=""
            className="h-full"
          />
        </div>

        <div className="flex flex-col gap-y-8 w-fit">
          <img
            src="https://ik.imagekit.io/od7hmpxwx/Logo%20Anagata.png?updatedAt=1731389686820"
            alt=""
            className="max-h-[4.4rem]"
          />
          <div className="flex gap-x-8 justify-center">
            <img
              src="https://ik.imagekit.io/od7hmpxwx/Award%201.png?updatedAt=1731389686973"
              alt=""
              className="max-h-[4rem]"
            />
            <img
              src="https://ik.imagekit.io/od7hmpxwx/Award%202.png?updatedAt=1731389686703"
              alt=""
              className="max-h-[4rem]"
            />
            <img
              src="https://ik.imagekit.io/od7hmpxwx/Award%203.png?updatedAt=1731389686633"
              alt=""
              className="max-h-[4rem]"
            />
          </div>
          <div className="flex gap-x-8 justify-center">
            <img
              src="https://ik.imagekit.io/od7hmpxwx/Award%204.png?updatedAt=1731389686310"
              alt=""
              className="max-h-[4rem]"
            />
            <img
              src="https://ik.imagekit.io/od7hmpxwx/Award%205.png?updatedAt=1731389686526"
              alt=""
              className="max-h-[4rem]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col py-4 border-t-[1px] border-gray-200 mt-8">
        <ul className="text-[12px] list-disc ml-4 text-gray-500">
          <li>
            If you need further information about us, please feel free to reach
            us at <b>contact.us@anagatalaw.com</b>
          </li>
          <li>
            Please don't print unless it's necessary. Environment friendly
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmailSignature;
