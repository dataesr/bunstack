import { Link } from "react-router-dom";
import useVersion from "@/hooks/useVersion";


const Header: React.FC = () => {
  const { data } = useVersion();
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    Intitulé
                    <br />officiel
                  </p>
                </div>
                <div className="fr-header__navbar">
                  <button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-476" id="button-477" title="Menu">
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                  <p className="fr-header__service-title">
                    Nom du site / service
                    {data?.version && <span className="fr-badge fr-badge--green-emeraude">{data?.version}</span>}
                  </p>
                </a>
                <p className="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-header__menu fr-modal" id="modal-476" aria-labelledby="button-477">
        <div className="fr-container">
          <button className="fr-btn--close fr-btn" aria-controls="modal-476" title="Fermer">
            Fermer
          </button>
          <div className="fr-header__menu-links">
          </div>
          <nav className="fr-nav" id="navigation-478" role="navigation" aria-label="Menu principal">
            <ul className="fr-nav__list">
              <li className="fr-nav__item">
                <Link className="fr-nav__link" to="/">Home</Link>
              </li>
              <li className="fr-nav__item">
                <Link className="fr-nav__link" to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
