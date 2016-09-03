import React, {PropTypes} from 'react'

const Grid = ({cells}) => (
  <div>
    GRID
  </div>
)

Grid.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.bool).isRequired
  ).isRequired
}

export default Grid
