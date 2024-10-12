function indexLoop(arr: any[], index: number): number {
  if (index < arr.length - 1) return index + 1;
  return 0;
}

const reader = new FileReader();
reader.onload = (event) => {
  const f = (event.target?.result as string).split("\r\n");
  return f;
};

function readCSV(file: Blob) {
  if (file) return reader.readAsText(file);
}

export { indexLoop, readCSV };
