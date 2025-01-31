import NavLinks from './NavLinks';

interface NavigationProps {
  pageName: 'home' | 'experience';
}

export default function Navigation({ pageName }: NavigationProps) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <NavLinks pageName={pageName} />
        </div>
      </div>
    </nav>
  );
}