export default function header(){
    return(
        <div className="md:w-[100px] lg:w-[1400px] m-auto flex  pt-[3rem] ">
            <div className="flex flex-row   ">
                <div className="flex flex-row  ">
                   <div >
                    <img src="/logo.jpg" width="40" height="40"></img>
                   </div>
                </div>
                
            </div>

            <div className="md:w-[100px] lg:w-[1400px] m-auto flex justify-end text-[18px]">
               <div className=" flex flex-row ">
                СOХРАНИТЬ И ВЫЙТИ
               </div>
            </div>
            

        </div>
    )
}