import { Link } from "react-router-dom";

export default function Home({ userName, setUserName }) {
  const userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100"
      height="100"
      className="p-4 bg-gray-400 rounded-full fill-gray-50"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
    </svg>
  );
  return (
    <div>
      <div className="bg-gray-100 w-screen h-screen text-4xl flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          {userIcon}
          <div className="mt-2 flex flex-col relative">
            <input
              placeholder="Please Input Login Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="p-2 text-base rounded border"
            ></input>
            <button
              className="w-full absolute -bottom-10"
              onClick={() => {
                if (!userName) return;
              }}
            >
              {userName && (
                <Link
                  to={"/chat"}
                  onClick={() => {
                    if (!userName) return;
                    localStorage.setItem(
                      "currentUser",
                      JSON.stringify(userName)
                    );
                  }}
                  className="text-base p-2 rounded bg-green-400 text-white"
                >
                  Login
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
