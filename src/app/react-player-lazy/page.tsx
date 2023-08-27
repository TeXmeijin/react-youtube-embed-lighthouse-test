import {ReactPlayerLazy} from "@/components/libs/ReactPlayerLazy";
export default function page() {
  return (
    <div>
      <div className="w-full mt-24 h-screen bg-black">スクロールして確認してね</div>
      <ReactPlayerLazy url={'https://www.youtube.com/watch?v=M7lc1UVf-VE'}></ReactPlayerLazy>
    </div>
  )
}
