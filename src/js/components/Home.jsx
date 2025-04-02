import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Prueba } from './prueba.jsx'
import { NuevaPrueba } from './nuevaPrueba.jsx'
import { PruebaUltima } from './pruebaUltima.jsx'
import { MyCard } from "./MyCard.jsx";
import { Digit } from "./digit.jsx";
//create your first component
const Home = (props) => {

	const data = [{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
		title: 'jeronimo',
		text: 'es un pajaro azul',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zu87gW73klh42UG7Q_28yQHaEn%26pid%3DApi&f=1&ipt=afa299d11b5dfc226cd38d9749c63981a5c5bd83bcee76f07b7e7ba3a05100fe&ipo=images',
		title: 'paisaje',
		text: 'es un paisaje',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Uu7ewyjiNQbu6VJNZohDqwHaEO%26pid%3DApi&f=1&ipt=401cb6fd3f7b45933c7b7a2508094b9e7e7953e3d89c0843d07a3bccf78d38dd&ipo=images',
		title: 'google',
		text: 'es un google',
		btn: 'google!'
	},

	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zu87gW73klh42UG7Q_28yQHaEn%26pid%3DApi&f=1&ipt=afa299d11b5dfc226cd38d9749c63981a5c5bd83bcee76f07b7e7ba3a05100fe&ipo=images',
		title: 'paisaje',
		text: 'es un paisaje',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Uu7ewyjiNQbu6VJNZohDqwHaEO%26pid%3DApi&f=1&ipt=401cb6fd3f7b45933c7b7a2508094b9e7e7953e3d89c0843d07a3bccf78d38dd&ipo=images',
		title: 'google',
		text: 'es un google',
		btn: 'google!'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
		title: 'jeronimo',
		text: 'es un pajaro azul',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zu87gW73klh42UG7Q_28yQHaEn%26pid%3DApi&f=1&ipt=afa299d11b5dfc226cd38d9749c63981a5c5bd83bcee76f07b7e7ba3a05100fe&ipo=images',
		title: 'paisaje',
		text: 'es un paisaje',
		btn: 'learn more'
	},

	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images',
		title: 'jeronimo',
		text: 'es un pajaro azul',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zu87gW73klh42UG7Q_28yQHaEn%26pid%3DApi&f=1&ipt=afa299d11b5dfc226cd38d9749c63981a5c5bd83bcee76f07b7e7ba3a05100fe&ipo=images',
		title: 'paisaje',
		text: 'es un paisaje',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Uu7ewyjiNQbu6VJNZohDqwHaEO%26pid%3DApi&f=1&ipt=401cb6fd3f7b45933c7b7a2508094b9e7e7953e3d89c0843d07a3bccf78d38dd&ipo=images',
		title: 'google',
		text: 'es un google',
		btn: 'google!'
	},

	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zu87gW73klh42UG7Q_28yQHaEn%26pid%3DApi&f=1&ipt=afa299d11b5dfc226cd38d9749c63981a5c5bd83bcee76f07b7e7ba3a05100fe&ipo=images',
		title: 'paisaje',
		text: 'es un paisaje',
		btn: 'learn more'
	},
	{
		imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Uu7ewyjiNQbu6VJNZohDqwHaEO%26pid%3DApi&f=1&ipt=401cb6fd3f7b45933c7b7a2508094b9e7e7953e3d89c0843d07a3bccf78d38dd&ipo=images',
		title: 'google',
		text: 'es un google',
		btn: 'google!'
	}
	]

	///objeto
	const person = {
		name: 'pepe',
		age: 25,
		city: 'Madrid'
	}
	//destructurar el objeto es extraer sus valores a variables
	// const {name, age, city} = person
	//console.log(name, age, city) --> pepe, 25, Madrid

	return (
		<div className="text-center">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images" alt="pajaro azul" />

			<p className="fs-1">valor de name: {'maria'}</p>

			<p classNamefs-2> Componente debajo:</p>
			<Prueba nameValue={'barbara'} ageValue={55} cityValue={'Sevilla'} />

			<p classNamefs-2> Componente NuevaPrueba debajo:</p>
			<NuevaPrueba name={person.name} age={person.age} city={person.city} />
			<p classNamefs-2> Componente PruebaUltima debajo:</p>
			<PruebaUltima objValue={person} />

			<MyCard imgUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9uQeXJPOGm7x6d4fFhnXxAHaD4%26pid%3DApi&f=1&ipt=6b78874da7c2715ee68a0abd5cbe37baddd33028052bd43c18881d3b50007c5d&ipo=images'
				title='jeronimo'
				text='es un pajaro azul'
				btn='learn more'
			/>

			{/* mapear un array de objetos y envir la info a un componente */}
			{/* {data.map(el => <MyCard 
				imgUrl={el.imgUrl}
				title={el.title}
				text={el.text}
				btn={el.btn}
			/>)} */}
			<div className="row">
				{/* generando estructura HTML y utilizando un Componente 
		para mostrar informacion de un array con objetos  */}
				{data.map(el =>
					<div className="col-sm-12 col-md-6 col-lg-4">
						<MyCard
							imgUrl={el.imgUrl}
							title={el.title}
							text={el.text}
							btn={el.btn}
						/>
					</div>)}

			</div>


			<div className="d-flex">

				<Digit digitValue={"icono fantastico"} />
				<Digit digitValue={<i className="fa-solid fa-clock"></i>} />
				<Digit digitValue={props.counter} />
				<Digit digitValue={props.counter} />
				<Digit digitValue={props.counter} />
				<Digit digitValue={props.counter} />
				<Digit digitValue={props.counter} />
			</div>
		</div>



	);
};

export default Home;