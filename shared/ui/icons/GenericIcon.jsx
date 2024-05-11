import { Generic } from "./Generic"
import { Warning } from "./Warning"

export const GenericIcon = ({ id }) => {
    return (
        <>
            {id == 1 && <Generic className="w-12 m-2 fill-yellow" />}
            {id == 2 && <Generic className="w-12 m-2 fill-green" />}
            {id == 3 && <Generic className="w-12 m-2 fill-purple" />}
            {id == 4 && <Generic className="w-12 m-2 fill-red" />}
            {id == 5 && <Generic className="w-12 m-2 fill-white" />}
            {id == 6 && <Warning />}
        </>
    )
}
