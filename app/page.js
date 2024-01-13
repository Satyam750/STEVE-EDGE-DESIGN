'use client'
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Last from "./components/Last/Last";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Page_1 from "./components/Page_1/Page_1";
import Page_2 from "./components/Page_2/Page_2";
import Works from "./components/Works/Works";

export default function Home() {
  return (
      <main>
          <div><Nav/></div>
       <div className="bg-black">
       <Main/>
          <Page_1/>
          <Page_2/>
          <hr className="mb-[10vw] mt-[5vw]" />
          <Works/>
          <hr className="mb-[10vw] mt-[5vw]" />
          <Featured/>
          <Last/>
          <Footer/>
       </div>
      </main>

  )
}
