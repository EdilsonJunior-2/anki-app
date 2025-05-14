import { CardStatus } from "@enums";

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

function getCardStatus(record: any) {
  const len = record.length;
  const last = len - 1;
  if (len > 1) {
    if (len === 2) {
      if (record[last].difficulty_rating > 1) return CardStatus.studied;
      return CardStatus.learned;
    }
    if (record[last].difficulty_rating === 1) {
      if (record[last - 1].difficulty_rating === 1) return CardStatus.reviewed;
      if (record.filter((r: any) => r.difficulty_rating === 1).length > 1)
        return CardStatus.relearned;
      return CardStatus.learned;
    }
    return CardStatus.studied;
  }
  return CardStatus.new;
}

function formatDateByTimestamp(timestamp: any) {
  const date = new Date(timestamp);
  return `${date.getUTCDate()}/${
    date.getUTCMonth() + 1
  }/${date.getUTCFullYear()}`;
}

export { indexLoop, readCSV, getCardStatus, formatDateByTimestamp };
