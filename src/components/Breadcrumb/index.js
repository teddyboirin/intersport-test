import ArrowBreadcrumb from "../../icons/ArrowBreadcrumb.js";

export default function Breadcrumb() {
  return (
    <div className="header__breadcrumb">
      <span className="header__breadcrumb_item">Accueil</span>
      <ArrowBreadcrumb />
      <span className="header__breadcrumb_item header__breadcrumb_item--active">Nom de l'opé</span>
    </div>
  );
}
