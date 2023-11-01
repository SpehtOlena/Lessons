import { Space, Button, InputNumber } from "antd"

const InputCounter = ({ inputCountValue, setInputCountValue }) => {
	return (
		<Space.Compact block>
			<Button disabled={inputCountValue <= 1} onClick={() => {
				if (inputCountValue > 1) {
					setInputCountValue(inputCountValue - 1)
				}
			}}>-</Button>
			<InputNumber value={inputCountValue} style={{ width: '50px' }} min={1} readOnly />
			<Button onClick={() => {
				setInputCountValue(inputCountValue + 1)
			}}>+</Button>
		</Space.Compact>
	)
}
export default InputCounter