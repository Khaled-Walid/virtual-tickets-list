import { useState } from 'react';
import styles from './styles.module.css';

export interface VirtualListProps<ItemType> {
  data?: null | ItemType[];
  idExtractor: (item: ItemType) => number | string;
  ItemComponent: React.FC<ItemType>;
  SpinnerComponent?: React.FC;
  NoDataComponent?: React.FC;
  listConfig: {
    itemHeight: number;
    windowHeight: number;
    numItems: number;
  };
}

export const VirtualList = <ItemType,>({
  data,
  ItemComponent,
  SpinnerComponent,
  NoDataComponent,
  idExtractor,
  listConfig,
}: VirtualListProps<ItemType>): JSX.Element => {
  const { numItems, itemHeight, windowHeight } = listConfig;
  const [scrollTop, setScrollTop] = useState(0);
  const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight),
  );

  const loadingSpinner: JSX.Element | false = data == null &&
    SpinnerComponent != null && <SpinnerComponent />;

  const emptyList: JSX.Element | false = data != null &&
    data.length === 0 &&
    NoDataComponent != null && <NoDataComponent />;

  interface Item {
    index: number;
    style: Record<string, string>;
  }

  const items: Item[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push({
      index: i,
      style: {
        position: 'absolute',
        top: `${i * itemHeight}px`,
        width: '100%',
      },
    });
  }

  const onScroll = (e: React.UIEvent<HTMLElement>): void =>
    setScrollTop(e.currentTarget.scrollTop);

  const cardsList: JSX.Element | false = data != null && (
    <div className={styles.temp} onScroll={onScroll}>
      <ul style={{ position: 'relative', height: `${innerHeight}px` }}>
        {items.map((e: Item) => {
          return (
            <li key={idExtractor(data[e.index])} style={{ ...e.style }}>
              <ItemComponent {...data[e.index]} style={{}} />
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      {cardsList}
      {loadingSpinner}
      {emptyList}
    </>
  );
};
