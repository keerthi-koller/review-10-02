import { useDispatch, useSelector } from "react-redux";
import { addNameList } from "../utils/store/nameSlice";
import { useNavigate } from "react-router-dom";

function Component1() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addDataToRedux = () => {
        const nameObj = {
            id: (document.getElementById("id") as HTMLInputElement).value,
            name: (document.getElementById("name") as HTMLInputElement).value,
        }
        dispatch(addNameList(nameObj));
    }

    const setDefault = () => {
        (document.getElementById("id") as HTMLInputElement).value = "";
        (document.getElementById("name") as HTMLInputElement).value = "";
    }

    const seeNotes = () => {
        navigate("/editOrdelete");
    }

    return (<>
        <div className="w-full flex justify-center items-center">
            <div className="bg-red-300 border w-1/2 flex flex-col gap-1 justify-center items-center p-5">
                <input type="text" placeholder="Enter id" id="id" className="w-1/2 h-10 pl-3 rounded" />
                <input type="text" placeholder="Enter Name" id="name" className="w-1/2 h-10 pl-3 rounded" />
                <input type="submit" onClick={() => { addDataToRedux(); setDefault() }} className="w-1/6 h-10 rounded-xl text-white font-bold bg-blue-600" />
            </div>
        </div>
        <div className="flex flex-col bg-blue-400 w-1/12 h-10 items-center justify-center m-auto mt-5">
            <input type="submit" value="See Notes" onClick={seeNotes} />
        </div>
    </>)
}

export default Component1;