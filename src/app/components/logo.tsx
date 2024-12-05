import Image from "next/image"


const Logo = () =>{
return(
<div className="w-[90%]  h-full  md:h-[150px] flex justify-center  ">
     <div className="justify-center items-center ">
         <div className="flex justify-between sm:space-x-2 md:space-x-10  mr-4 "> 
         <Image src={"/images/Logo7.png"}  width={100} height={200} alt='L1'>
         </Image>
         <Image src={"/images/Logo2.png"}  width={100} height={200} alt='L2'>
         </Image>
         <Image src={"/images/Logo3.png"}  width={100} height={200} alt='L3'>
         </Image>
         <Image src={"/images/Logo4.png"}  width={100} height={200} alt='L4'>
         </Image>
         <Image src={"/images/Logo5.png"}  width={100} height={200} alt='L5'>
         </Image>
         <Image src={"/images/Logo6.png"}  width={100} height={200} alt='L6'>
         </Image>
         <Image src={"/images/logo1.png"}  width={100} height={200} alt='L7'>
         </Image>
                  </div>
    </div>
</div>



)


}
export default Logo
