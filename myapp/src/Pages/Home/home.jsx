import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="text-center font-semibold text-5xl">Welcome to MyHome website</h1>
   
      <p className="text-[30px] font-normal text-center pt-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam ipsam saepe, expedita deserunt excepturi illum eum nobis non labore molestias molestiae ex. Iure itaque optio suscipit, perferendis mollitia nesciunt!</p>
      <p className="text-[30px] font-normal text-center pb-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, natus! Nobis praesentium et rem eveniet fuga soluta, qui ipsam illo veritatis ad. Quia architecto fuga exercitationem possimus reiciendis ullam laboriosam?</p>
      <h2 className="text-center font-semibold text-5xl pb-[30px]">Wanna order right now? Order right now:</h2>
      <button className="bg-blue-400 p-4 rounded-xl text-white font-medium ml-[800px]"><Link to='/house'>Order</Link></button>

      <h1 className="text-center font-semibold text-5xl pt-[30px]">Our Organizers:</h1>

      <div className="flex ml-[400px]">
        <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[40px]"></i>
          <h3 className="font-semibold text-3xl">Ilham Sh</h3>
          <p className="font-medium text-xl ml-[20px]">Founder</p>
        </div>

         <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[30px]"></i>
          <h3 className="font-semibold text-3xl">Lale A.</h3>
          <p className="font-medium text-xl ml-[10px]">Founder</p>
        </div>

         <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[50px]"></i>
          <h3 className="font-semibold text-3xl ml-[10px]">Ayxan A.</h3>
          <p className="font-medium text-xl ml-[10px]">SMM worker</p>
        </div>

         <div className="m-[30px] border-[1px] border-gray-300 p-[20px] rounded-xl">
          <i className="fa-solid fa-user text-3xl ml-[30px]"></i>
          <h3 className="font-semibold text-3xl ml-[5px]">Indji A.</h3>
          <p className="font-medium text-xl ml-[10px] ">Assistant</p>
        </div>
      </div>
   
    
    <h1 className="text-center font-semibold text-5xl pt-[20px] gap-[20px]">Our Sponsor:</h1>

    <div className="flex justify-center items-center pt-[30px]">
      <div>
        <img className="w-[100px] h-[100px] rounded-full ml-[20px]" src="https://epointbucket.s3.eu-central-1.amazonaws.com/images/users/big/65b0ce35ca349.png" alt="" />
        <h1 className="text-xl mr-[20px] font-medium pt-[15px]">Ev10 kiraye evleri</h1>
        <a className="ml-[30px] text-blue-500" href="https://ev10.az/en/kiraye">Learn More</a>
      </div>

      <div>
        <img className="w-[100px] h-[100px] rounded-full ml-[20px]" src="https://metro.gov.az/storage/app/v41fgugAKVQrEc7BxHPIv98NQyBJn5fqYE1kzvlW.svg" alt="" />
        <h1 className="text-xl mr-[20px] font-medium pt-[15px]">Metro Politen</h1>
        <a className="ml-[30px] text-blue-500" href="https://www.metro.gov.az/az">Learn more</a>
      </div>
    </div>
   
    </div>
  )
}

export default Home