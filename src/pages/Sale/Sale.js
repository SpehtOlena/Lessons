import { Checkbox, Form, Input, Radio } from "antd"
import Counter from "../../components/Counter/Counter"
import SizeBox from "../../components/SizeBox/SizeBox"
import Button from "../../components/Button/Button"
import { HeartOutlined } from "@ant-design/icons"

const Sale = () => {
	return (
		<div>
			<Form>
				<Form.Item
					label={"Street Address"}
					required>
					<Input />
				</Form.Item>
			</Form>
			<Checkbox>Text</Checkbox>
			<Radio>Text2</Radio>
			<Counter />
			<SizeBox disabled>123</SizeBox>
			<Button type={'primary'}>primary</Button>
			<Button type={'icon'} icon={<HeartOutlined />}>Click me!</Button>
			<Button >Click me!</Button>
		</div>
	)
}
export default Sale