'use client'
import YouTube from "react-player";
import {useEffect, useState} from "react";

export const ReactPlayer = (props: { url: string }) => {
  // show flag
  const [show, setShow] = useState(false);

  // true when loaded
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      {
        show && <YouTube url={props.url}></YouTube>
      }
    </div>
  );
}
