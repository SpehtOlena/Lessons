import axios from "axios";
import { useState, useEffect } from "react";

const useCustomAxios = (url) => {
	const [data, setData] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getData = () => {
			setLoading(true)
			axios
				.get(url)
				.then(res => {
					setData(res.data)
					setLoading(false)
				})
				.catch(e => {
					setError(e)
					setLoading(false)
				})
		}
		getData()
	}, [url]);
	return { data, Loading, error }
}

export default useCustomAxios;