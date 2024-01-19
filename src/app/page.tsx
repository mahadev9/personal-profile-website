
import DetailResume from "./ui/detailResume"
import Introduction from "./ui/introduction"

export default function Home() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-80 p-4">
        <Introduction />
      </div>
      <div className="flex-grow p-4">
        <DetailResume />
      </div>
    </div>
  )
}
