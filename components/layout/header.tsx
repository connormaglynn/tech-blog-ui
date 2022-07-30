import Link from 'next/link'

const Header = () => {
  return (
    <div className="fixed top-0 w-full p-6 drop-shadow-md bg-white">
      <Link href="/" className="cursor-pointer">
        <a >
          <img src="/assets/logo.png" alt="Blog Logo" className="h-12 drop-shadow-md inline" />
          <h1 className="inline text-3xl align-middle pl-4">Connor Glynn</h1>
        </a>

      </Link>
    </div>

    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/Users/connor.glynn/git/tech-blog-ui/pages">
    //     <a className="hover:underline">Connor Glynn</a>
    //   </Link>
    //   .
    // </h2>
  )
}

export default Header
