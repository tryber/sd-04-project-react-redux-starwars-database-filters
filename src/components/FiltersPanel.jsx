import React, { Component } from 'react';
import FilterSearch from './FilterSearch';
import FilterColumn from './FilterColumn';
import FilterComparison from './FilterComparison';
import FilterNumber from './FilterNumber';
import FilterNumberBtn from './FilterNumberBtn';

class FiltersPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  render() {
    const { column, comparison, value } = this.state;
    return (
      <div>
        <form>
          <FilterSearch />
          <p>Filter by numbers</p>
          <FilterColumn
            onChange={(event) => this.setState({ column: event.target.value })}
            value={column}
          />
          <FilterComparison
            onChange={(event) =>
              this.setState({ comparison: event.target.value })
            }
            value={comparison}
          />
          <FilterNumber
            onChange={(event) => this.setState({ value: event.target.value })}
            value={value}
          />
          <FilterNumberBtn
            state={{ column, comparison, value }}
            clearColumnState={() => this.setState({ column: '' })}
          />
        </form>
      </div>
    );
  }
}

export default FiltersPanel;
