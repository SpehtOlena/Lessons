import './UserCard.css';
import Card2 from '../Card/Card2';


const users = [
	{ id: 1, name: "Іван", age: 30, email: "ivan@example.com", city: "Київ", isVisible: true, gender: "male" },
	{ id: 2, name: "Марія", age: 25, email: "maria@example.com", city: "Львів", isVisible: true, gender: "female" },
	{ id: 3, name: "Петро", age: 40, email: "petro@example.com", city: "Харків", isVisible: true, gender: "male" },
	{ id: 4, name: "Анна", age: 35, email: "anna@example.com", city: "Одеса", isVisible: false, gender: "female" },
	{ id: 5, name: "Джон", age: 28, email: "john@example.com", city: "Сан-Франциско", isVisible: true, gender: "male" },
	{ id: 6, name: "Кетрін", age: 32, email: "catherine@example.com", city: "Лондон", isVisible: false, gender: "female" },
	{ id: 7, name: "Алекс", age: 27, email: "alex@example.com", city: "Москва", isVisible: true, gender: "male" },
	{ id: 8, name: "Лілі", age: 29, email: "lily@example.com", city: "Париж", isVisible: true, gender: "female" },
	{ id: 9, name: "Девід", age: 45, email: "david@example.com", city: "Берлін", isVisible: true, gender: "male" },
	{ id: 10, name: "Оля", age: 31, email: "olya@example.com", city: "Київ", isVisible: false, gender: "female" },
	{ id: 11, name: "Макс", age: 38, email: "max@example.com", city: "Нью-Йорк", isVisible: true, gender: "male" },
	{ id: 12, name: "Еліза", age: 22, email: "eliza@example.com", city: "Токіо", isVisible: false, gender: "female" },
	{ id: 13, name: "Міхал", age: 36, email: "michal@example.com", city: "Варшава", isVisible: true, gender: "male" },
	{ id: 14, name: "Софія", age: 24, email: "sofia@example.com", city: "Мадрид", isVisible: true, gender: "female" },
	{ id: 15, name: "Юрій", age: 41, email: "yuri@example.com", city: "Київ", isVisible: true, gender: "male" }
];


const UserCard4 = () => {
	const filteredData = users.filter((item => item.gender === 'female'))
	return (
		<div>
			{
				users.length > 16 ?
					<div>Занадто довгий масив</div> :
					<ul className={'user_container'}>
						{
							filteredData.map(item => (
								item.isVisible && <Card2 value={item} key={item.id} />
							))
						}
					</ul>
			}
		</div>

	)
}
export default UserCard4