import React from 'react'
import S2About from '../About/S2About/S2About'
import S1ServiceSingle from './S1ServiceSingle/S1ServiceSingle'
import StageWork from '../../components/StageWork/StageWork'
import SliderComment from '../../components/SliderComment/SliderComment'
export default function ServiceSingle() {
  return (
<>
<S1ServiceSingle/>
<S2About/>
<StageWork/>
<SliderComment/>
</>
  )
}
