import { useRef } from "react"


export const HOC = (Component , menu) => {
    const NewComponent = () => {
        const h2Ref = useRef();
        return (
            <>
                <div className="row m-0">
                    <div className="col-2 sidebar">
                        <h4>Sidebar</h4>
                    </div>
                    <div className="col-10">
                        {menu}
                        <Component h2Ref={h2Ref} />
                    </div>
                </div>
            </>
        )
    }

    return NewComponent
} 