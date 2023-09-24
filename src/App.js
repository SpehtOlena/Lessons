import './App.css';
import { useState } from 'react';
import { Button, Divider, Typography, Col, Row, Space, Anchor, Dropdown, Menu, Carousel, Image, QRCode, Table, Tag } from 'antd';
import { FullscreenOutlined, SmileFilled, SmileOutlined } from '@ant-design/icons';


function App() {
	const [loading, setLoading] = useState(false);
	const { Title, Paragraph, Text, Link } = Typography;
	const [editableStr, setEditableStr] = useState('This is an editable text.');
	const style = {
		background: '#0092ff',
		padding: '8px 0',
	};
	const items = [
		{
			label: 'Submit',
			key: '1',
		},
		{
			label: 'Lorem',
			key: '2',
		},
		{
			label: 'Continue',
			key: '3',
		},
		{
			label: 'Save',
			key: '4',
		},
		{
			label: 'Edit',
			key: '5',
		},
		{
			label: 'Exit',
			key: '6',
		}
	]

	const contentStyle: React.CSSProperties = {
		margin: 0,
		height: '50px',
		color: '#fff',
		lineHeight: '30px',
		textAlign: 'center',
		background: '#364d79',
	};

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
		},
	];

	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sydney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	];

	return (

		<div className="App">
			<h1>Ant Design</h1>

			<hr />
			<h3>Buttons</h3>
			<div className={'buttons'}>
				<Button icon={<FullscreenOutlined />} type={'primary'}>Primary</Button>
				<Button disabled icon={<FullscreenOutlined />} type={'primary'}>Primary</Button>
				<Button shape="circle">A</Button>
				<Button danger size={'large'} type={'dashed'} icon={'+'}>Dashed</Button>
				<Button size={'small'} type={'link'}>Link</Button>
				<Button danger type={'text'}>Text</Button>
			</div>

			<Divider orientation='left'>Розділювач</Divider>
			<h4>Button loading</h4>
			<Button loading={loading} icon={'+'} type={'primary'}></Button>
			<Divider orientation='center' type='vertical' />
			<Button onClick={() => {
				setLoading(!loading)
			}}>Click!</Button>

			<Divider />
			<h3>Typography</h3>
			<Typography.Text mark>Виділений текст</Typography.Text>
			<hr />
			<Text type="warning">Warning</Text>
			<hr />
			<Title>Introduction</Title>
			<Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, libero aperiam. Itaque pariatur nihil odio magnam recusandae tempore autem reiciendis.</Paragraph>

			<Paragraph>
				<ul>
					<li>
						<Link href="/docs/spec/proximity-cn">设计原则</Link>
					</li>
					<li>
						<Link href="/docs/spec/overview-cn">设计模式</Link>
					</li>
					<li>
						<Link href="/docs/resources-cn">设计资源</Link>
					</li>
				</ul>
			</Paragraph>

			<h3>Редагування тексту</h3>
			<Paragraph
				editable={{
					onChange: setEditableStr,
				}}
			>
				{editableStr}
			</Paragraph>

			<Paragraph copyable>This is a copyable text.</Paragraph>
			<Paragraph
				copyable={{
					text: 'Hello, Ant Design!',
				}}
			>
				Replace copy text.
			</Paragraph>
			<Paragraph
				copyable={{
					icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
					tooltips: ['click here', 'you clicked!!'],
				}}
			>
				Custom Copy icon and replace tooltips text.
			</Paragraph>


			<h2>Grid</h2>
			<Divider orientation="left">Vertical</Divider>
			<Row gutter={[16, 24]}>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
			</Row>

			<Divider orientation="left">Responsive</Divider>
			<Row
				gutter={{
					xs: 8,
					sm: 16,
					md: 24,
					lg: 32,
				}}
			>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
			</Row>
			<br />
			<br />
			<br />
			<>
				<Row>
					<Col span={8} style={style}>col-8</Col>
					<Col span={8} offset={8} style={style}>
						col-8
					</Col>
				</Row>
				<Row>
					<Col span={6} offset={6} style={style}>
						col-6 col-offset-6
					</Col>
					<Col span={6} offset={6} style={style}>
						col-6 col-offset-6
					</Col>
				</Row>
				<Row>
					<Col span={12} offset={6} style={style}>
						col-12 col-offset-6
					</Col>
				</Row>
			</>
			<br /><br /><br />
			<Space direction={'horizontal'} size={22}>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<Button>4</Button>

			</Space>
			<br /><br /><br />
			<Space split={<Divider type="vertical" />}>
				<Typography.Link>Link</Typography.Link>
				<Typography.Link>Link</Typography.Link>
				<Typography.Link>Link</Typography.Link>
			</Space>

			<br /><br /><br />
			<Space.Compact block>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<Button>7</Button>
				<Button>8</Button>
			</Space.Compact>

			<Dropdown menu={{ items }}>
				<Button>Click me!</Button>
			</Dropdown>

			<div>
				<Menu mode={'horizontal'} items={items} defaultSelectedKeys={['1']} />
			</div>

			<div
				style={{
					padding: '20px',
				}}
			>
				<Carousel >
					<div >
						<div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} >
							<img src="https://picsum.photos/id/237/800/600" alt="" />
						</div>
						<h3 style={contentStyle}>1</h3>
					</div>
					<div>
						<div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} >
							<img src="https://picsum.photos/id/238/800/600" alt="" />
						</div>
						<h3 style={contentStyle}>2</h3>
					</div>
					<div>
						<div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} >
							<img src="https://picsum.photos/id/239/800/600" alt="" />
						</div>
						<h3 style={contentStyle}>3</h3>
					</div>
					<div>
						<div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} >
							<img src="https://picsum.photos/id/231/800/600" alt="" />
						</div>
						<h3 style={contentStyle}>4</h3>
					</div>
				</Carousel>

				<Image.PreviewGroup
					items={[
						'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
						'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
						'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
					]}
				>
					<Image
						width={200}
						src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
					/>
				</Image.PreviewGroup>

				<QRCode value={'React'} />

				<Table columns={columns} dataSource={data} />

				<Anchor
					direction="horizontal"
					items={[
						{
							key: 'part-1',
							href: '#part-1',
							title: 'Part 1',
						},
						{
							key: 'part-2',
							href: '#part-2',
							title: 'Part 2',
						},
						{
							key: 'part-3',
							href: '#part-3',
							title: 'Part 3',
						},
					]}
				/>
			</div>
			<div>
				<div
					id="part-1"
					style={{
						width: '100vw',
						height: '100vh',
						textAlign: 'center',
						background: 'rgba(0,255,0,0.02)',
					}}
				/>
				<div
					id="part-2"
					style={{
						width: '100vw',
						height: '100vh',
						textAlign: 'center',
						background: 'rgba(0,0,255,0.02)',
					}}
				/>
				<div
					id="part-3"
					style={{
						width: '100vw',
						height: '100vh',
						textAlign: 'center',
						background: '#FFFBE9',
					}}
				/>
			</div>

		</div>
	);
}

export default App;


