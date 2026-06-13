import img1 from '../../assets/1.jpg'
import { FcElectronics } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";

function Second(){
    return(
        <div className="text-center">
            <h1 className="display-1 text-info ">Second component</h1><br />
            <button className="btn btn-warning"><CiLogin className='text-white fs-2 me-2' />Signup</button><br />
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20210922/pngtree-abstract-nature-green-and-sunny-defocused-light-background-image_906725.png" width="400px" alt="" /><br />
            <img src={img1} width="140px" alt="" /><br />
            
            <FcElectronics className='display-1' />

        </div>
    )
}

export default Second;