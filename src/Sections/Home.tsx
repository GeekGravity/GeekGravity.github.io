import profilePic from "../Pictures/profilePic.jpg";

function Home() {
  return (
    <>
      <div id="home" className="grid grid-cols-3 gap-4 mx-auto mb-[13%]">
        <h1 className="col-span-2 mt-[55vh] ml-10 text-8xl  text-white leading-tight font-lexend">
          <span className="text-orange-400">&lt; </span> WELCOME
          <br />
          &nbsp;TO MY SPACE! <span className="text-orange-400"> / &gt;</span>
        </h1>
        <img
          src={profilePic}
          alt="Photo of Mathews on a hike"
          className="w-[70%] mt-[35%] ml-5 border-5 rounded-md border-white shadow-lg shadow-cyan-500"
        ></img>
      </div>
    </>
  );
}

export default Home;
