import {connect} from 'react-redux'

import Grid from '../components/Grid'

function mapStateToProps (state) {
  return {
    cells: state.cells
  }
}

export default connect(
  mapStateToProps
)(Grid)
