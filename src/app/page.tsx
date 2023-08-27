import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className={'font-bold text-lg'}>React製アプリにYouTube埋め込むとLighthouseスコア低下する問題</h1>
      <div className="mt-4 flex items-center flex-col gap-y-2">
        <Link className={'hover:text-blue-600'} href={'/blank'}>何もないページ。理論上100点</Link>
        <Link className={'hover:text-blue-600'} href={'/normal-youtube'}>普通にYouTubeを埋め込んだだけ。Lighthouse大幅減点</Link>
        <Link className={'hover:text-blue-600'} href={'/react-lazyload-youtube'}>react-lazyload-youtubeを利用</Link>
        <Link className={'hover:text-blue-600'} href={'/react-lite-youtube-embed'}>react-lite-youtube-embed を利用</Link>
        <Link className={'hover:text-blue-600'} href={'/init-image'}>react-lite-youtube-embedを利用かつ、即クリック</Link>
        <Link className={'hover:text-blue-600'} href={'/react-player'}>react-playerを利用</Link>
        <Link className={'hover:text-blue-600'} href={'/react-player-lazy'}>react-player/lazyを利用</Link>
        <Link className={'hover:text-blue-600'} href={'/react-player-light'}>react-playerでlightオプションを利用</Link>
        <Link className={'hover:text-blue-600'} href={'/player-api'}>YouTube Iframe APIを利用</Link>
        <Link className={'hover:text-blue-600'} href={'/player-api-mute'}>YouTube Iframe APIを利用かつ、muteで自動再生</Link>
        <Link className={'hover:text-blue-600'} href={'/player-api-mute-unmute'}>YouTube Iframe APIを利用かつ、muteで自動再生し、N秒後にunmuteする</Link>
      </div>
    </main>
  )
}
