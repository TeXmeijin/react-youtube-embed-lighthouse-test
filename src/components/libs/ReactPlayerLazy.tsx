'use client'
import YouTube from "react-player/lazy";

export const ReactPlayerLazy = (props: { url: string }) => {
  return (
    <div>
      <div className="w-full h-screen bg-black">hoge</div>
      <YouTube url={props.url} controls></YouTube>
    </div>
  );
}
