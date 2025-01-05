import ReactLenis from "lenis/dist/lenis-react.mjs";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import { lazy, Suspense } from "react";
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const HomePage = lazy(() => import("./components/HomePage"));
const Error = lazy(() => import("./components/Error"));
import { SyncLoader } from "react-spinners";

function App() {


  return (
    <>
      <ReactLenis root>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={
            <Suspense fallback={
              <div className="h-screen w-screen bg-gradient-to-br from-slate-800 to-zinc-800 text-[#758694] flex gap-2 items-center justify-center">
                <SyncLoader size={8} color="#758694" />
                <p className="font-semibold">Loading...</p>
              </div>
            }>
              <HomePage />
            </Suspense>
          } />
          <Route path='/project' element={
            <Suspense fallback={
              <div className="h-screen w-screen bg-gradient-to-br from-slate-800 to-zinc-800 text-[#758694] flex gap-2 items-center justify-center">
                <SyncLoader size={8} color="#758694" />
                <p className="font-semibold">Loading...</p>
              </div>
            }>
              <ProjectDetails />
            </Suspense>
          } />
          <Route path='/:Error' element={
            <Suspense fallback={
              <div className="h-screen w-screen bg-gradient-to-br from-slate-800 to-zinc-800 text-[#758694] flex gap-2 items-center justify-center">
                <SyncLoader size={8} color="#758694" />
                <p className="font-semibold">Loading...</p>
              </div>
            }>
              <Error />
            </Suspense>
          } />
        </Routes>
      </ReactLenis>
    </>
  )
}

export default App


// const HomePage = () => {
//   const [activeComponent, setActiveComponent] = useState('');
//   return (
//     <>
//       <Navbar setActiveComponent={setActiveComponent} />
//       <Element name='Home'>
//         <Home />
//       </Element>
//       <Element name='Projects'>
//         <Projects />
//       </Element>
//       <Element name='About'>
//         <About2 />
//       </Element>
//       <TechStack />
//       <Element name='Contact'>
//         <Contact />
//       </Element>
//     </>
//   )
// }
