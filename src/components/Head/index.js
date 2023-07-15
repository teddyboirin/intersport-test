import Timer from '../Timer';
import Intersport from '../../icons/Intersport';

export default function Head() {
  return (
    <section className="head">
      <div className="logo">
        <Intersport />
      </div>
      <div className="banderole">
        <div>DERNIERS JOURS</div>
      </div>
      <div className="head__left">
        <div className="head__left_bloc">
          <Timer />
          <div className="head__title_container head__title_container--margin">
            <span className="head__title_OP">Black</span>
            <span className="head__title_OP head__title_OP--stroke">
              Friday
            </span>
          </div>
          <div className="head__title_container flex-full">
            <span className="head__title_OP">Weeks</span>
            <span className="head__OP_last">Derniers jours</span>
          </div>
        </div>
      </div>
      <div className="head__middle" />
      <div className="head__right" />
    </section>
  );
}
