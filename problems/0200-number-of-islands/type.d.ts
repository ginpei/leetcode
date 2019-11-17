export type MapTypeDef = {
  water: '0';
  land: '1';
  boomed: 'x';
};

export type GridCell = ValueOf<MapTypeDef>;
