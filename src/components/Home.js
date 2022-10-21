import { Link } from "react-router-dom";
export default function Home({ userName, setUserName }) {
  return (
    <div>
      <div className="bg-gray-100 w-screen h-screen text-4xl flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          <div className="mt-2 flex flex-col relative">
            <input
              placeholder="Please Input Login Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="p-2 text-base"
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
