"use client";
import YouTube from "react-lazyload-youtube";
import "react-lazyload-youtube/dist/index.css";
export default function page() {
  return (
    <div>
      <div className="w-full mt-24 h-screen bg-black">
        スクロールして確認してね
      </div>
      <YouTube width="640px" height="480px" videoId={"wm5gMKuwSYk"}></YouTube>
    </div>
  );
}
