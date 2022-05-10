export const range = (length: number, start = 0) =>
  Array.from({ length }, (_, i) => i + start);

export const shuffle = (l: any[]) =>
  l
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
