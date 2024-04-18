import React, { Suspense } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import Scene from './components/Scene.jsx';
import LoadingMesh from './components/LoadingMesh.jsx';


function App() {
  return (
    <div className=' h-screen w-screen'>
      <Canvas className='touch-none' linear flat>
        {/*performance monitoring*/}
        {/* <Stats /> */}
        {/*loading mesh*/}
        <Suspense fallback={<LoadingMesh />}>
          <Scene/>
        </Suspense>
      </Canvas>
      <SpeedInsights />
      <Analytics/>
  </div>
  )
}

export default App
