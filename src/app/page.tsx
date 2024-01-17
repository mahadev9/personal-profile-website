
import { dancingScript } from "./fonts"

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 px-8 py-8">
        <div className="flex items-center space-x-4">
          <h1 className={`text-3xl ${dancingScript.className} antialiased`}>Mahadev Maitri's Portfolio</h1>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center p-32">
        <div className="relative flex place-items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-6xl text-center antialised">Coming Soon!</h1>
        </div>
      </main>
    </>
  )
}
