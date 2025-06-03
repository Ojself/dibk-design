import type { ListItemObject } from './NavigationBar';

export interface NavigationBarListItemProps {
  listItem: string | ListItemObject;
}

const NavigationBarListItem = ({ listItem }: NavigationBarListItemProps) => {
  if (typeof listItem === 'string') {
    return (
      <li>
        <span>{listItem}</span>
      </li>
    );
  }

  if (typeof listItem === 'object') {
    return (
      <li>
        <a href={listItem.href}>{listItem.name}</a>
      </li>
    );
  }

  return null;
};

export default NavigationBarListItem;
