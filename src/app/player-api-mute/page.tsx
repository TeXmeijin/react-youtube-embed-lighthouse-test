import Script from "next/script";
import {Metadata} from "next";

type Props = {}

export default function page(props: Props) {
  return (
    <div>
      <div id="player"></div>
      <button id="play-button">Start Video</button>
      <Script strategy={'afterInteractive'}>
        {
          `
            // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
      }
      
      const playButton = document.getElementById('play-button');
      playButton.addEventListener('click', () => {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
          },
    playerVars: {
      'playsinline': 1,
    }
        });
        console.log('player', player);
      });

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        console.log('onPlayerReady', event.target, player);
        player.mute();
        player.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
      }
      function stopVideo() {
        player.stopVideo();
      }
            `
        }
      </Script>
    </div>
  )
};
