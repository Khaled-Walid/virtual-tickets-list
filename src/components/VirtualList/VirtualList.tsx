import { useMemo } from 'react';
import './styles.module.css';

export interface VirtualListProps<ItemType> {
  data?: null | ItemType[];
  idExtractor: (item: ItemType) => number | string;
  ItemComponent: React.FC<ItemType>;
  SpinnerComponent?: React.FC;
  NoDataComponent?: React.FC;
}

export const VirtualList = <ItemType,>({
  data,
  ItemComponent,
  SpinnerComponent,
  NoDataComponent,
  idExtractor,
}: VirtualListProps<ItemType>): JSX.Element => {
  const loadingSpinner = data == null && SpinnerComponent != null && (
    <SpinnerComponent />
  );

  const emptyList = data != null &&
    data.length === 0 &&
    NoDataComponent != null && <NoDataComponent />;

  const cardsList = useMemo(
    () =>
      data?.map((card) => {
        return <ItemComponent key={idExtractor(card)} {...card} />;
      }),
    [data],
  );

  return (
    <ul>
      {loadingSpinner}
      {emptyList}
      {cardsList}
    </ul>
  );
};
