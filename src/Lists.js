import { NavLink } from "react-router-dom"

const Lists = () => {
    return (
        <>
            <div>
                <NavLink to='useEffect'> useEffect</NavLink>
            </div>
            <div>
                <NavLink to='useRef'> useRef</NavLink>
            </div>
            <div>
                <NavLink to='useRefTimer'> useRefTimer</NavLink>
            </div>
            <div>
                <NavLink to='useMemo'> useMemo</NavLink>
            </div>
            <div>
                <NavLink to='useCallback'> useCallback</NavLink>
            </div>
            <div>
                <NavLink to='useCallbackCount'> useCallbackCount</NavLink>
            </div>

        </>
    )
}

export default Lists;