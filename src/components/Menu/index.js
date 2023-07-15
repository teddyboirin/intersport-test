import { memo } from 'react';
import DataMenu from '../../datas/menu';

function Menu() {
  return (
    <div className="header__second_block">
      <ul>
        {DataMenu.map((item) => {
          return item.isPromotion ? (
            <li>
              <a className="promotion" href={item.link}>{item.name}</a>
            </li>
          ) : (
            <li>
            <a href={item.link}>{item.name}</a>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
export default memo(Menu);