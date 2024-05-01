import { Administrative } from "./Administrative"
import { Baseball } from "./Baseball"
import { Building } from "./Building"
import { Coffee } from "./Coffee"
import { Explanade } from "./Explanade"
import { Gym } from "./Gym"
import { Soccer } from "./Soccer"
import { Soccer7 } from "./Soccer7"
import { Statue } from "./Statue"

export const Icon = ({ building, className, style }) => {
    return (
        <>
            {
                building?.type === 'building' && <Building content={building?.short} className={className} style={style} />
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
        </>

    )
}
