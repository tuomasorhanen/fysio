import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IMenuProps, ISiteSettings } from '../../_lib/types';
import Image from 'next/image';

const Header = ({ items, settings }: IMenuProps & { settings: ISiteSettings }) => {
  const [navBackground, setNavBackground] = useState('bg-transparent text-bg');
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY > 0;
    setNavBackground(scrollPosition ? 'bg-bg shadow-lg text-text' : 'bg-transparent text-bg');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const renderDesktopNav = () => (
    <nav
      key={settings._id}
      className={`fixed top-0 z-40 hidden w-full md:block ${navBackground} duration-800 transition delay-300 ease-in-out`}>
      <div className="flex justify-between py-2">
        <Link href="/" className="z-40 flex items-center">
          <Image
            src={settings.logo.asset.url}
            width={50}
            alt={settings.logo.alt}
            quality={90}
            placeholder="empty"
            height={50}
            className="mx-10 rounded-full object-contain hover:scale-105"
          />
          <span className="-ml-6 text-xl">Fysiosarianne</span>
        </Link>
        <div className="z-40 hidden md:block" id="navbar-default">
          <ul className="mx-10 my-2 flex">
            {items.map(item => {
              return (
                <li key={item.slug.current}>
                  <Link href={'/' + item.slug.current} aria-current="page">
                    <span className="block px-4 py-2 font-extralight transition-opacity hover:opacity-50">
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
            <Image
              src={settings.logo.asset.url}
              width={50}
              height={50}
              alt={settings.logo.alt}
              quality={90}
              placeholder="empty"
              loading="lazy"
              className="rounded-full object-contain hover:scale-105"
            />
          </Link>{' '}
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
            <span className={navOpen ? 'lineTop spin bg-bg' : 'lineTop bg-bg'}></span>
            <span className={navOpen ? 'lineBottom spin bg-bg' : 'lineBottom bg-bg'}></span>

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
