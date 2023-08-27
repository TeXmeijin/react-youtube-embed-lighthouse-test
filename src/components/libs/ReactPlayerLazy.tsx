"use client";
import YouTube from "react-player/lazy";

export const ReactPlayerLazy = (props: { url: string }) => {
  return <YouTube url={props.url} controls></YouTube>;
};
