import Link from 'next/link'

function Header({title, blurb}) {
    return (
      <div className="flex justify-between items-center text-gray-700">
        <Link href="/"><p className="text-2xl pb-10 cursor-pointer">Dian Xiao</p></Link>
        <Link href="/about"><a className="font-sans text-vermillion-500 text-xl pb-10 no-underline">About</a></Link>
      </div>)
}
  
export default Header
