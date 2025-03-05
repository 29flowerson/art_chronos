import Header from "../components/header";
import Title from "./components/title";
import Pictures from "./components/pictures";
import Pictures2 from "./components/pictures2";
import CursorFollow from "../components/CursorFollow";
export default function Right(){
    return(
        <div className="md:w-[100px] lg:w-[1400px]  m-auto flex flex-col gap-[2rem]">
            <Header></Header>
            <Title></Title>
            <div className="flex justify-end">
                <Pictures></Pictures>

            </div>

            <div className="flex justify-center">
                <Pictures2></Pictures2>

            </div>

            <CursorFollow></CursorFollow>


            
        </div>
    )
}