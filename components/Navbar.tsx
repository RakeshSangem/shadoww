import Github from './icons/Github';
import Logo from './icons/Logo';

export default function Navbar(): JSX.Element {
  return (
    <nav
      className="flex justify-between items-center h-16 px-8 border-b border-gray-300 text-black relative font-mono"
      role="navigation"
    >
      <div className="px-4 cursor-pointer">
        <a className="flex items-center gap-x-2 font-bold text-lg" href="/">
          <Logo />
          <span>Shadow Gen </span>
        </a>
      </div>
      <a
        href="https://github.com/RakeshSangem/shadoww"
        target="_blank"
        className="duration-300 p-1 rounded-lg hover:bg-gray-300 "
      >
        <Github />
      </a>
    </nav>
  );
}
