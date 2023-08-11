import React from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Content from "../Content/Content";

class Compon extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false })
		}, 2000)
	}

	render() {
		const { isLoading } = this.state
		return (
			<div>
				{isLoading ? <LoadingSpinner /> : <Content />}
			</div>
		);
	}
}

export default Compon;