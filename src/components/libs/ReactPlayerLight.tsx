'use client'
import YouTube from "react-player/lazy";
import {useEffect, useState} from "react";

export const ReactPlayerLight = (props: { url: string }) => {
  // show flag
  const [show, setShow] = useState(false);

  // true when loaded
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      {
        show && (
          <YouTube ref={element => {
            if (element) {
              element.showPreview();
            }
          }} light url={props.url} controls></YouTube>
        )
      }
    </div>
  );
}
