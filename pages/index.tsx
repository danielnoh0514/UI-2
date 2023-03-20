export default function Home() {
  return (
    <div className="bg-pink-100 w-screen h-screen">
      <div className="grid grid-cols-3 justify-between p-10 gap-5 h-96 ">
        <div className="bg-white rounded-md p-4 pt-7  ">
          <div>
            <span className="font-extrabold text-3xl">Weather</span>

            <div className="mt-5 flex flex-col gap-5 ">
              <div className="shadow-black shadow-md rounded-md flex items-center justify-between p-3 border-2 border-solid border-black-400 ">
                <div className="flex flex-col">
                  <span className="font-extrabold text-md mb-1">Casius</span>
                  <span className="text-[10px] font-semibold">Mars, 12AM</span>
                </div>
                <div></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                <span className="text-3xl font-extrabold">85°</span>
              </div>

              <div className="shadow-black shadow-md  bg-[#FFBD11] rounded-md flex items-center justify-between p-3 border-2 border-solid border-black-400 ">
                <div className="flex flex-col">
                  <span className="font-extrabold text-md mb-1">Dlacria</span>
                  <span className="text-[10px] font-semibold">Mars, 12AM</span>
                </div>
                <div></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                <span className="text-3xl font-extrabold">85°</span>
              </div>

              <div className="shadow-black shadow-md  bg-[#00C6AD] rounded-md flex items-center justify-between p-3 border-2 border-solid border-black-400 ">
                <div className="flex flex-col">
                  <span className="font-extrabold text-md mb-1">New York</span>
                  <span className="text-[10px] font-semibold">USA, 12AM</span>
                </div>
                <div></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>

                <span className="text-3xl font-extrabold">85°</span>
              </div>

              <div className="shadow-black shadow-md  bg-[#F85A2B] rounded-md flex items-center justify-between p-3 border-2 border-solid border-black-400 ">
                <div className="flex flex-col text-white">
                  <span className="font-extrabold text-md mb-1">Zomato</span>
                  <span className="text-[10px] font-semibold">India, 12AM</span>
                </div>
                <div></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <span className=" text-white text-3xl font-extrabold">20°</span>
              </div>
              <div></div>
            </div>
          </div>
          <div className=" flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor "
              className="w-16 h-16  drop-shadow-xl shadow-black filter   "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 pt-7 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col mt-5 text-center gap-5">
            <span className="font-bold text-slate-600 text-md">SIMPLE TAG</span>
            <span className="font-extrabold  text-2xl">
              Work With best designers
            </span>
            <div className="grid grid-flow-row grid-rows-2 grid-cols-2 gap-2 h-56  ">
              <div className=" bg-[#FFBD11]  rounded-xl flex justify-center items-center border-2 border-black border-solid ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="w-full bg-[#00C6AD] h-full rounded-xl flex justify-center items-center border-2 border-black border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="w-full bg-[#FE89BA] h-full rounded-xl flex justify-center items-center border-2 border-black border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="w-full bg-orange-500 h-full rounded-xl flex justify-center items-center border-2 border-black border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <button className="bg-blue-600 p-3 px-10 rounded-md w-full text-white font-bold">
                Let's get it done
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#FFBD11] rounded-md p-4 pt-7   ">
          <div className="flex items-center justify-between ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className=" font-bold text-2xl">Friends</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="flex items-center mt-2 w-full bg-white p-2 rounded-xl border-2 border-solid border-black  ">
            <span>Search with love ...</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 relative left-14 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between w-full bg-white mt-5 h-14 rounded-md border-2 border-solid border-black  px-2 py-8 ">
            <img
              className="w-14 h-14 rounded-full"
              src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/20b154467cbdfe3868d8f8a09a6bdec8.jpeg?x-expires=1679374800&x-signature=18Av%2Fx59mljPjCbUtUDJ8OjIbP8%3D"
            />

            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">청명</span>
              <span className="text-gray-600">매화검수</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFBD11] border-2 border-black border-solid px-4">
              <button>Invite</button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full bg-white mt-5 h-14 rounded-md border-2 border-solid border-black  px-2 py-8 ">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://pbs.twimg.com/media/FJBw5i3VEAMTHFx?format=jpg&name=large"
            />

            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">백천</span>
              <span className="text-gray-600">매화검수</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFBD11] border-2 border-black border-solid px-4">
              <button>Invite</button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full bg-white mt-5 h-14 rounded-md border-2 border-solid border-black  px-2 py-8 ">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://m.chuing.net/mai/img_character_main/18/402490669254.jpg"
            />

            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">조걸</span>
              <span className="text-gray-600">매화검수</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFBD11] border-2 border-black border-solid px-4">
              <button>Invite</button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full bg-white mt-5 h-14 rounded-md border-2 border-solid border-black  px-2 py-8 ">
            <img
              className="w-14 h-14 rounded-full"
              src="https://pbs.twimg.com/profile_images/1402312160370331648/R-R09Sg3_400x400.jpg"
            />

            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">당소소</span>
              <span className="text-gray-600">매화검수</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFBD11] border-2 border-black border-solid px-4">
              <button>Invite</button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full bg-white mt-5 h-14 rounded-md border-2 border-solid border-black  px-2 py-8 ">
            <img
              className="w-14 h-14 rounded-full object-fill"
              src="https://pbs.twimg.com/media/FnTx7WBacAE1-ks.jpg:small"
            />

            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">유이설</span>
              <span className="text-gray-600">매화검수</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFBD11] border-2 border-black border-solid px-4">
              <button>Invite</button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full bg-white mt-5 h-14 rounded-md border-2 border-solid border-black  px-2 py-8 ">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://pbs.twimg.com/media/FW6LwdVaMAA8Jte.jpg:large"
            />

            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">청명</span>
              <span className="text-gray-600">매화검존</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFBD11] border-2 border-black border-solid px-4">
              <button>Invite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
