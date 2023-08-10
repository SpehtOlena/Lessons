import './Home.css'

const recipesLink = [
	{
		id: 1,
		name: "Борщ",
		ingredients: ["буряк", "картопля", "морква"],
		img: "https://picsum.photos/id/256/300/200",
		allIngredients: ["буряк", "картопля", "морква", "капуста", "цибуля", "м'ясо (зазвичай свинина або яловичина)"],
		description: "Традиційна українська страва зі свіжих овочів, м'яса та буряка.",
		cooking: "1. Приготуйте бульйон з м'яса та овочів.\n2. Додайте буряк та картоплю і варіть до готовності.\n3. Додайте інші овочі і варіть далі.\n4. Подавайте гарячим із сметаною та хлібом.",
	},
	{
		id: 2,
		name: "Паста карбонара",
		ingredients: ["спагетті", "бекон", "яйця"],
		img: "https://picsum.photos/id/257/300/200",
		allIngredients: ["спагетті", "бекон", "яйця", "пармезан", "чорний перець"],
		description: "Класична італійська страва з спагетті, бекону, сиром та яйцями.",
		cooking: "1. Спагетті варіть до готовності в киплячій солоній воді.\n2. Обсмажте бекон на сковороді до золотистої скоринки.\n3. Зберіть соус з яєць та пармезану.\n4. Приберіть спагетті до соусу і перемішайте.\n5. Подаємо з чорним перцем сверху.",
	},
	{
		id: 3,
		name: "Салат Цезар",
		ingredients: ["куряче філе", "листовий салат", "грінки"],
		img: "https://picsum.photos/id/258/300/200",
		allIngredients: ["куряче філе", "листовий салат", "грінки", "пармезан", "соус Цезар"],
		description: "Популярний американський салат з куркою, грінками, сиром та соусом Цезар.",
		cooking: "1. Обсмажте куряче філе на сковороді до готовності.\n2. Розріжте листовий салат та перекладіть на тарілку.\n3. Додайте куряче філе та грінки.\n4. Приправте соусом Цезар і посипте пармезаном.\n5. Перемішайте і подавайте.",
	},
	{
		id: 4,
		name: "Суші",
		ingredients: ["рис", "риба", "огірок"],
		img: "https://picsum.photos/id/259/300/200",
		allIngredients: ["рис", "риба (наприклад, лосось або тунець)", "огірок", "авокадо", "норі"],
		description: "Традиційна японська страва з рису, риби та морепродуктів.",
		cooking: "1. Приготуйте рис відповідно до інструкції на упаковці.\n2. Розгорніть норі-лист та розподіліть рис по поверхні.\n3. Додайте нарізану рибу і огірок.\n4. Скрутіть ролик і наріжте на шматочки.\n5. Подаємо з соєвим соусом та васабі.",
	},
	{
		id: 5,
		name: "Стейк",
		ingredients: ["м'ясо", "олія", "спеції"],
		img: "https://picsum.photos/id/260/300/200",
		allIngredients: ["м'ясо (зазвичай яловичина або свинина)", "олія", "спеції"],
		description: "Смажений кусок м'яса з соковитими та смачними шматками.",
		cooking: "1. Приготуйте м'ясо на грилі або на сковороді з обох боків.\n2. Додайте олію та спеції для смаку.\n3. Подаємо з печеними овочами та картоплею.",
	},
	{
		id: 6,
		name: "Пельмені",
		ingredients: ["м'ясний фарш", "тісто", "спеції"],
		img: "https://picsum.photos/id/261/300/200",
		allIngredients: ["м'ясний фарш (зазвичай яловичина або свинина)", "тісто"],
		description: "Традиційна російська страва з м'ясним фаршем у тонкому тісті.",
		cooking: "1. Розкатайте тісто і виріжте кружечки.\n2. Начиніть пельмені м'ясним фаршем.\n3. Скип'ятіть воду та додайте пельмені.\n4. Варіть до готовності.\n5. Подаємо зі сметаною.",
	},
	{
		id: 7,
		name: "Грецький салат",
		ingredients: ["помідори", "огірки", "оливки"],
		img: "https://picsum.photos/id/263/300/200",
		allIngredients: ["помідори", "огірки", "оливки", "болгарський перець", "сир Фета", "оливкова олія"],
		description: "Класичний салат з оливками, огірками, помідорами, сиром Фета та грецьким соусом.",
		cooking: "1. Наріжте овочі та сир Фета.\n2. Змішайте разом з оливками.\n3. Полийте оливковою олією.\n4. Приправте за смаком і перемішайте.",
	},
	{
		id: 8,
		name: "Лазанья",
		ingredients: ["м'ясний соус", "білий соус", "сир моцарелла"],
		img: "https://picsum.photos/id/248/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 9,
		name: "Голубці",
		ingredients: ["м'ясний фарш", "капуста", "рис"],
		img: "https://picsum.photos/id/201/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 10,
		name: "Чізбургер",
		ingredients: ["м'ясний фарш", "булка", "кетчуп"],
		img: "https://picsum.photos/id/213/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 11,
		name: "Біф Велінгтон",
		ingredients: ["Телятина", "печериці", "тісто"],
		img: "https://picsum.photos/id/208/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 12,
		name: "Палюшки",
		ingredients: ["картопля", "борошно", "сметана"],
		img: "https://picsum.photos/id/238/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 13,
		name: "Паелья",
		ingredients: ["рис", "мідії", "томати"],
		img: "https://picsum.photos/id/228/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 14,
		name: "Бограч",
		ingredients: ["м'ясо", "перець", "томати"],
		img: "https://picsum.photos/id/221/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 15,
		name: "Капрезе",
		ingredients: ["томати", "базилік", "сир моцарелла"],
		img: "https://picsum.photos/id/217/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	},
	{
		id: 16,
		name: "Капкейки",
		ingredients: ["борошно", "масло", "вершки"],
		img: "https://picsum.photos/id/218/300/200",
		allIngredients: ["м'ясний соус (зазвичай з яловичини)", "білий соус", "лазанья (тісто)", "сир моцарелла"],
		description: "Італійська страва з шарами м'ясного соусу, сирного соусу та пластівцями лазаньї.",
		cooking: "1. Приготуйте м'ясний соус та білий соус.\n2. Випікайте пластівці лазаньї.\n3. Розкладайте шари: м'ясний соус, пластівці, сирний соус, сир моцарелла.\n4. Пекти в духовці до золотистої корочки.",
	}
];




const Home = ({ setActivePage }) => {
	return (
		<div className="ListWrapper">
			<div className="List_container">
				{
					recipesLink.map((value, index) => {
						return (
							<div className='dishItem' key={value.dish}>
								<img className='dishImage' src={value.img} alt={`${value.name} photo`} />
								<h2>{value.name}</h2>
								<ul className='dishingredients' key={value.index}>
									{
										value.ingredients.map((subItem, index) => (
											<li key={subItem}>
												{subItem}
											</li>
										))
									}
								</ul>
								<button style={{ cursor: 'pointer' }} onClick={() => {
									setActivePage(
										<div className='detailsItem' key={value.detail}>
											<img className='dishImage' src={value.img} alt={`${value.name} photo`} />
											<h2>{value.name}</h2>
											<div key={value}>
												{
													<ul>{value.allIngredients.map(ingr => <li className='IngrItems' key={ingr}>{ingr}<input type='checkbox' /></li>)}</ul>
												}
											</div>
											<p>{value.description}</p>
											<p>{value.cooking}</p>
										</div>
									)
								}}>Show detailss</button>

							</div>
						)
					})
				}
			</div>
		</div>
	)
}
export default Home