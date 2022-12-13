import React from 'react'
import S1Repair from './S1Repair/S1Repair'
import S2Repair from './S2Repair/S2Repair'
import StageWork from '../../components/StageWork/StageWork'
import SliderComment from '../../components/SliderComment/SliderComment'
export default function Repaire() {
  return (
<>
<S1Repair/>
<S2Repair/>
<div className="repair-3">
<StageWork/>
</div>
<SliderComment/>
</>
  )
}
