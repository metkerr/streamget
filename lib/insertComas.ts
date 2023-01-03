export default function insertComas(data: [{ name: string }]) {
  const normalizeData = data.map((data, index) => {
    return index ? `, ${data.name}` : data.name;
  });

  return normalizeData;
}
