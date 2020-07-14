import React from 'react'
import { connect } from 'react-redux'; 

const TableContent = (props) => {
	console.log(props);
	return (
		<tbody>
			
		</tbody>
	)
}

const mapStateToProps = (state) => ({
	data: state.reducerAPI.data,
})

export default connect(mapStateToProps)(TableContent);
