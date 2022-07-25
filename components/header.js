import Link from 'next/link'

function Header({title, blurb}) {
    return (
        <div className="container mx-auto max-w-4xl p-5 sm:p-6 md:p-10">
          <div className="flex align-center justify-between items-center text-gray-700">
            <Link href="/"><p className="text-2xl p-0 cursor-pointer">Dian Xiao</p></Link>
            <span>
              <Link href="/stuff"><a className="font-sans text-vermillion-500 text-xl pr-5 no-underline">Stuff</a></Link>
              <Link href="/about"><a className="font-sans text-vermillion-500 text-xl no-underline">About</a></Link>
            </span>
          </div>
        </div>)
}
  
export default Header
