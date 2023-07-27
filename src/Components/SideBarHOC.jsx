import Sidebar from "./Sidebar"


export const SideBarHOC = (Component) => {
    const NewComponent = () => {
        return <>
            <div className='row m-0'>
                <div className='col-2 p-0'>
                    <Sidebar />
                </div>
                <div className='col-10 p-0'>
                <div className='p-3 shadow'></div>
                    <Component />
                </div>
            </div>
        </>
    }

    return NewComponent
}