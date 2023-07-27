import { HOC } from "../Components/HOC"
import UserForm from "../Components/UserForm"
import UserTable from "../Components/UserTable"
let menu = <>
    <ul>
        <li>Home</li>
        <li>About</li>
    </ul>
</>
const Home = (props) => {

    console.log(props)
    return (
        <>
            <h2>Home</h2>
        </>
    )
}
export default HOC(Home , menu)