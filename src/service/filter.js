function filter(data, inputText) {
  if (inputText)
    return data.filter((planeta) =>
      planeta.name.toLowerCase().includes(inputText)
    );
  return data;
}

export default filter;
