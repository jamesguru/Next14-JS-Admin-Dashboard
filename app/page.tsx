import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex items-center fixed top-0 justify-between bg-indigo-500 h-28 w-full">
        <h1 className="text-white pl-[10%] text-2xl">V8 TechWorks</h1>

        <div className="pr-[10%]">
          <button className="bg-white p-2 w-20 mr-2">Login</button>
        </div>
      </header>

      <section className="flex items-center bg-indigo-500 h-[100vh] w-full mb-5">
        <div className="flex-1 p-[10%]">
        <h2 className="text-5xl text-white">Find the right freelance service, right away</h2>
        <input type="text" placeholder="Search" className="w-full p-5  mt-10 border-none outline-none" />
        </div>
        <div className=" flex-1">
        <Image src="/adult.png" alt="" objectFit="cover" height={700} width={700} className="h-[100%] w-[100%]"/>
        </div>
      </section>

      <section className="flex items-center justify-evenly flex-wrap">
        <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 shadow-xl cursor-pointer">
          <Image src="/code.jpg" alt="none" width={200} height={200} />
          <h3 className="text-[20px] font-semibold mt-2 mb-2">
            React job | Singapore
          </h3>
          <span>
            Originally from Latin, Lorem ipsum has no intelligible meaning. It
            is simply a display of letters to be viewed as a sample with given
            graphical elements in a fil
          </span>
        </div>

        <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2  shadow-xl cursor-pointer">
          <Image src="/code.jpg" alt="none" width={200} height={200} />
          <h3 className="text-[20px] font-semibold mt-2 mb-2">
            React job | Singapore
          </h3>
          <span>
            Originally from Latin, Lorem ipsum has no intelligible meaning. It
            is simply a display of letters to be viewed as a sample with given
            graphical elements in a fil
          </span>
        </div>
        <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 shadow-xl cursor-pointer">
          <Image src="/code.jpg" alt="none" width={200} height={200} />
          <h3 className="text-[20px] font-semibold mt-2 mb-2">
            React job | Singapore
          </h3>
          <span>
            Originally from Latin, Lorem ipsum has no intelligible meaning. It
            is simply a display of letters to be viewed as a sample with given
            graphical elements in a fil
          </span>
        </div>

        <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 rounded-md shadow-xl cursor-pointer">
          <Image src="/code.jpg" alt="none" width={200} height={200} />
          <h3 className="text-[20px] font-semibold mt-2 mb-2">
            React job | Singapore
          </h3>
          <span>
            Originally from Latin, Lorem ipsum has no intelligible meaning. It
            is simply a display of letters to be viewed as a sample with given
            graphical elements in a fil
          </span>
        </div>
        <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 rounded-md shadow-xl cursor-pointer">
          <Image src="/code.jpg" alt="none" width={200} height={200} />
          <h3 className="text-[20px] font-semibold mt-2 mb-2">
            React job | Singapore
          </h3>
          <span>
            Originally from Latin, Lorem ipsum has no intelligible meaning. It
            is simply a display of letters to be viewed as a sample with given
            graphical elements in a fil
          </span>
        </div>
        <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 rounded-md shadow-xl cursor-pointer">
          <Image src="/code.jpg" alt="none" width={200} height={200} />
          <h3 className="text-[20px] font-semibold mt-2 mb-2">
            React job | Singapore
          </h3>
          <span>
            Originally from Latin, Lorem ipsum has no intelligible meaning. It
            is simply a display of letters to be viewed as a sample with given
            graphical elements in a fil
          </span>
        </div>
      </section>

      <section className="flex items-center justify-between bg-indigo-100 h-[200px] w-full mt-10">
        <h3 className="text-xl ml-[20px] font-semibold">V8 TechWorks</h3>

        <div className="flex flex-col mr-[20px]">
          <span>Lightsview SA 5085</span>
          <span>+61 491 678 996</span>
          <span>info@attunedpathways.com.au</span>
        </div>
      </section>
    </main>
  );
}
