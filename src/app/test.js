/* eslint-disable @next/next/no-img-element */
const Logo = () => {
    return (
      <div>
        <div className="left-0 z-50 w-full h-20 border-t border-b bg-[#21646F] border-[#21646F] shadow shadow-[#21646F]">
          
            <div className="grid h-full max-w-64 items-center grid-rows-2 grid-flow-col mx-auto font-medium">
              <img
                className="row-span-2 w-14 h-14 rounded-full"
                src="/img/GSI2.png"
                alt="Rounded avatar"
              />
              <h1 className="row-span-2 text-base font-semibold sm:text-[1.6rem] min-[320px]:text-[1.6rem] md:text-[1.6rem] text-[#FBFAFA]">
                GSI Channel
              </h1>
            </div>
        
        </div>
      </div>
    );
  };
  
  export default Logo;