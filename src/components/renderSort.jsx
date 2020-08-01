function renderSort(planetsData, orderSelected, filteredByOrgerSelected) {
  const columns = Object.keys(planetsData[0]);
  return (
    <div>
      <h3>Ordenar:</h3>
      <select data-testid="column-sort" id="column-sort">
        {columns
          .filter((planet) => planet !== 'residents')
          .map((planet) => (
            <option key={planet}>{planet}</option>
          ))}
      </select>
      <input type="radio" id="ascending" name="column" data-testid="column-sort-input" value="ascending" ></input>
      <input type="radio" id="descending" name="column" data-testid="column-sort-input" value="descending" ></input>
            <button type="button"
            data-testid="column-sort-button"></button>
    </div>
  );
}
