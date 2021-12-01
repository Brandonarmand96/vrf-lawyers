import Image from "next/dist/client/image";
import logo from '../public/vrf logo.png';


function Header() {
    return (
        <div>
            <div>
                <center className="mb-4"><Image src= {logo}/></center>
                
            </div>
        </div>
    )
}

export default Header
