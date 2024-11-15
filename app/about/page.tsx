import { title } from "@/components/primitives";

export default function AboutPage() {

   
   

  return (
    <div>
      <h1 className={title()}>About <span className=" bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 inline-block text-transparent bg-clip-text">SisLine</span></h1>
      <p className="mt-10 mb-12 text-justify text-xl"><span className="font-bold">SisLine</span> is a system focused to help stores to manage their stock and products. With our system, you can easily manage your inventory, sales, and customers.
        Our system is designed to be easy to use and intuitive, so you can focus on what matters most to your business! 
      </p>
   <button className="scale-150 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-20 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Try It!</span>
</button>
      </div>
  );
}
