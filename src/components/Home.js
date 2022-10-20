import { useState } from "react";
import {
  Link,
  RedirectFunction,
  HistoryRouterProps,
  redirect,
} from "react-router-dom";
export default function Home() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <div className="bg-gray-100 w-screen h-screen text-4xl flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          <div className="mt-2">
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
            <button
              className="border"
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
