function boundValue(value: number, ceiling: number, floor: number = 0): number {
  if (value < floor) {
    return floor;
  }

  if (value > ceiling) {
    return ceiling;
  }

  return value;
}

export { boundValue };
