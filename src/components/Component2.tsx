import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteNameList, editNameList } from "../utils/store/nameSlice";

interface NameDetails {
    id: string,
    name: string
}

function Component2() {

    const [edit, setEdit] = useState("");
    const [details, setDetails] = useState<NameDetails[] | undefined>();
    const dispatch = useDispatch();

    const data = useSelector((store: any) => store.names.nameListsNew);

    useEffect(() => {
        setDetails(data);
    }, [data])

    const deleteName = (j: number) => {
        dispatch(deleteNameList(j))
    }

    const editName = () => {
        const ele = {
            id: (document.getElementById("idNew") as HTMLInputElement).innerText,
            name: (document.getElementById("nameNew") as HTMLInputElement).value,
        }
        dispatch(editNameList(ele))
    }

    return (<>
        <div className="w-full flex justify-center items-center mt-2">
            <div className="bg-red-300 border w-1/2 flex flex-col gap-1 justify-center items-center p-5">
                {details?.length == 0 ? <h1>No notes are present...</h1> : ""}
                <span>Component2</span>
                {details?.map((ele: any) => {
                    return (<>
                        <h1 className="border w-1/4 bg-white flex justify-center">{ele?.id}</h1>
                        <h1 className="border w-1/4 bg-white flex justify-center">{ele?.name}</h1>
                        <div className="flex w-full gap-5 justify-center">
                            <input type="submit" value="delete" onClick={() => deleteName(ele.id)} className="w-1/6 h-10 rounded-xl text-white font-bold bg-blue-600" />
                            <input type="submit" value="Edit" onClick={() => { setEdit(ele.id) }} className="w-1/6 h-10 mb-10 rounded-xl text-white font-bold bg-blue-600" />
                        </div>
                        {edit == ele.id ?
                            <div className="flex gap-2 w-1/2">
                                <h1 className="w-1/2 h-10 pl-3 rounded bg-white flex items-center" id="idNew">{ele?.id}</h1>
                                <input type="text" placeholder="Enter Name" id="nameNew" defaultValue={ele?.name} className="w-1/2 h-10 pl-3 rounded" />
                                <input type="submit" value="Save" onClick={() => { editName(); setEdit("") }} className="w-1/2 h-10 rounded-xl text-white font-bold bg-blue-600" />
                            </div>
                            :
                            ""
                        }
                    </>)
                })}
            </div>
        </div>
    </>)
}

export default Component2