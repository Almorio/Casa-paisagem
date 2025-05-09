
import type { person } from "../type"
export const Header = ({name}:person) => {
    return(
    <header>
            <h1>LOGO.COM</h1>
            <h1>{name}</h1>
            <div>
                <a href="Home">Home</a> <br />
                <a href="About me">About me</a> <br />
                <a href="Contact"> Contact</a>
            </div>
    </header>
       
    )

}