import React from 'react'
import { missionVisionData } from '../../../assets/assets'
import { Eye, Sparkles, Target, TrendingUp } from 'lucide-react'
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn'


const MissionAndVision = () => {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <h1 className="font-bold text-center text-2xl md:text-4xl">Our Mission & Vision</h1>
                <p className="text-center px-4">Driving simplicity, transparency, and innovation in modern microloan management</p>
            </div>
            <div className="p-4 grid md:grid-cols-2 gap-2 md:gap-5">
                {
                    missionVisionData.map((m, index) => (
                        m.id % 2 !== 0 ?
                            <FadeIn key={index} duration={0.4}>
                                <div className="h-full p-4 border border-base-300 bg-base-100 rounded-xl space-y-2">
                                    <div className="flex gap-2 items-center font-bold text-xl">
                                        {index === 0 ? <Target size={30} /> : <TrendingUp size={30} />}
                                        <h1>{m.title}</h1>
                                        {console.log(index)}
                                    </div>
                                    <div>
                                        <p>{m.detail}</p>
                                    </div>
                                </div>
                            </FadeIn>
                            :
                            <FadeIn key={index} duration={0.4}>
                                <div className="h-full p-4 border border-base-300 bg-base-100 auto-rows-fr rounded-xl space-y-2">
                                    <div className="flex gap-2 items-center font-bold text-xl">
                                        {index === 1 ? <Eye size={30} /> : <Sparkles size={30} />}
                                        <h1>{m.title}</h1>
                                        {console.log(index)}
                                    </div>
                                    <div>
                                        <p>{m.detail}</p>
                                    </div>
                                </div>
                            </FadeIn>
                    ))
                }
            </div>
        </div>
    )
}

export default MissionAndVision
