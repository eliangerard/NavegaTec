/* eslint-disable react/prop-types */
import { Administrative } from "./Administrative"
import { Baseball } from "./Baseball"
import { Building } from "./Building"
import { Coffee } from "./Coffee"
import { Dome } from "./Dome"
import { Explanade } from "./Explanade"
import { Generic } from "./Generic"
import { Gym } from "./Gym"
import { Soccer } from "./Soccer"
import { Soccer7 } from "./Soccer7"
import { Statue } from "./Statue"
import { Warning } from "./Warning"

export const Icon = ({ building, className, style, fontSize }) => {
    return (
        <>
            {
                typeof building !== "object" ?
                    (<>
                        {building == 1 && <Generic className={className} color="fill-yellow" />}
                        {building == 2 && <Generic className={className} color="fill-green" />}
                        {building == 3 && <Generic className={className} color="fill-purple" />}
                        {building == 4 && <Generic className={className} color="fill-red" />}
                        {building == 5 && <Generic className={className} color="fill-white" />}
                        {building == 6 && <Warning className={className} />}
                    </>)
                    :
                    <>
                        {
                            building?.type === 'building' && <Building content={building?.short} className={className} style={style} fontSize={fontSize} />
                        }
                        {
                            building?.type === 'gym' && <Gym className={className} style={style} />
                        }
                        {
                            building?.type === 'soccer' && <Soccer className={className} style={style} />
                        }
                        {
                            building?.type === 'soccer-7' && <Soccer7 className={className} style={style} />
                        }
                        {
                            building?.type === 'baseball' && <Baseball className={className} style={style} />
                        }
                        {
                            building?.type === 'administrative' && <Administrative className={className} style={style} />
                        }
                        {
                            building?.type === 'coffee' && <Coffee className={className} style={style} />
                        }
                        {
                            building?.type === 'explanade' && <Explanade className={className} style={style} />
                        }
                        {
                            building?.type === 'statue' && <Statue className={className} style={style} />
                        }
                        {
                            building?.type === 'dome' && <Dome className={className} style={style} />
                        }
                    </>
            }
        </>

    )
}
