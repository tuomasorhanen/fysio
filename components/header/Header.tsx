import chroma from 'chroma-js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IMenuItem, ISiteSettings } from '../../_lib/types';
import Image from 'next/image';

type IMenuProps = {
  items: IMenuItem[];
  _key?: string;
  heroBgColor?: string;
};

const Header = (props: IMenuProps & { settings: ISiteSettings }) => {
  const { items, settings, heroBgColor } = props;

  const [navBackground, setNavBackground] = useState('bg-transparent');
  const [navOpen, setNavOpen] = useState(false);
  const [lineColors, setLineColors] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavBackground('bg-bg shadow-lg');
      } else {
        const bgColor = heroBgColor || settings.bgColor.hex;
        if (chroma.contrast(settings.textColor.hex, bgColor) < 5.0) {
          setNavBackground('bg-transparent text-white');
          setLineColors('bg-white');
        } else {
          setNavBackground('bg-transparent text-white');
          setLineColors('bg-white');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroBgColor, settings.bgColor.hex, settings.textColor.hex]);

  const renderDesktopNav = () => (
    <nav
  key={props._key}
  className={`fixed top-0 z-40 hidden w-full md:block ${navBackground} duration-800 transition delay-300 ease-in-out`}>
  <div className="flex justify-between py-2">
    <Link href="/" className="z-40 flex items-center">
      <Image src={settings.logo.asset.url} width={50} alt={settings.logo.alt} quality={90} placeholder='blur' loading='lazy' blurDataURL={settings.logo.asset.url} height={50} className="mx-10 rounded-full object-contain hover:scale-105" />
      <span className='-ml-6 text-xl'>Fysiosarianne</span>
    </Link>
    <div className="z-40 hidden md:block" id="navbar-default">
      <ul className="mx-10 my-2 flex">
        {items.map(item => {
          return (
            <li key={item.slug.current}>
            <Link href={'/' + item.slug.current} aria-current="page">
              <span className="block font-extralight px-4 py-2 hover:opacity-50 transition-opacity">
              {item.name.toUpperCase()}
              </span>
            </Link>
          </li>
          );
        })}
      </ul>
    </div>
  </div>
</nav>

  );

  const renderMobileNav = () => (
    <div className="nav z-40 md:hidden">
      <div className="nav-container">
        <div className="navbar absolute z-50">
          <Link href="/" className="z-40 flex items-center">
          <Image src={settings.logo.asset.url} width={50} height={50} alt={settings.logo.alt} quality={90} placeholder='blur' loading='lazy' blurDataURL={settings.logo.asset.url} className="rounded-full object-contain hover:scale-105" />
          </Link>{' '}
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
              <span className={navOpen ? `lineTop spin ${lineColors}` : `lineTop ${lineColors}`}></span>
              <span className={navOpen ? `lineBottom spin ${lineColors}` : `lineBottom ${lineColors}`}></span>
            </div>
          </div>
        </div>

        <div
          className="nav-overlay absolute z-40 h-full w-full"
          style={{
            top: navOpen ? '0' : '-100%',
            transitionDelay: navOpen ? '0s' : '0s',
          }}>
          <ul className="nav-links">
            {items.map((item, index) => (
              <li className="nav-item" key={item.slug.current}>
                <Link
                  href={'/' + item.slug.current}
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? `${0.3 + index * 0.1}s` : '0s',
                  }}>
                  {item.name}
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderDesktopNav()}
      {renderMobileNav()}
    </>
  );
};

export default Header;
