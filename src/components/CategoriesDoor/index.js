import { memo } from "react";

function CategoriesDoor() {
  return (
    <div className="categories-door">
      <ul>
        <li>
          <a href="/">Sélection exceptionnelle</a>
        </li>
        <li>
          <a href="/">Lifestyle</a>
        </li>
        <li>
          <a href="/">Grandes marques</a>
        </li>
        <li>
          <a href="/">Electronique</a>
        </li>
        <li>
          <a href="/">Sports</a>
        </li>
        <li>
          <a href="/">Musculation</a>
        </li>
      </ul>
    </div>
  );
}
export default memo(CategoriesDoor)