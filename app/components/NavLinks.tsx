import Link from 'next/link';

interface NavLinksProps {
  pageName: 'home' | 'experience';
}

export default function NavLinks({ pageName }: NavLinksProps) {
  const homeLinks = (
    <>
      <li><Link href="#log" className="nav-link">Logs</Link></li>
      <li><Link href="#musical" className="nav-link">Musicals</Link></li>
      <li><Link href="#fun" className="nav-link">Fun</Link></li>
      <li><Link href="#teaching" className="nav-link">Teaching</Link></li>
      <li><Link href="#workshops" className="nav-link">Workshops</Link></li>
      <li><Link href="/experience" className="nav-link">DevRel</Link></li>
    </>
  );

  const experienceLinks = (
    <>
      <li><Link href="/" className="nav-link">Home</Link></li>
    </>
  );

  return (
    <ul className="nav-links">
      {pageName === 'home' ? homeLinks : experienceLinks}
    </ul>
  );
}