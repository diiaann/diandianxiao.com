import Link from 'next/link'

function Header({title, blurb}) {
    return (
        <div className="container mx-auto max-w-4xl p-5 sm:p-6 md:p-10 font-sans">
          <div className="flex align-center justify-between items-center text-gray-700">
            <Link href="/"><p className="text-2xl p-0 cursor-pointer">Dian Xiao</p></Link>
            <span>
              <Link className="font-sans text-xl pr-5 no-underline" href="/stuff">Stuff</Link>
              <Link className="font-sans text-xl pr-5 no-underline" href="/about">About</Link>
            </span>
          </div>
        </div>)
}
  
export default Header
