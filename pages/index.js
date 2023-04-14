import Navbar from "@/components/navbar";

export default function Home() {
  return (
      <div className="flex font-raleway flex-col min-h-screen overflow-x-hidden">
          <div className="fixed z-50 w-screen" id="home">
              <Navbar />
          </div>
      </div>

  )
}
