"use client"
import {useState, useEffect} from "react"
import Image from "next/image"
import Room from './Room'
import Review from './Review'

const getLines = text => {
	const lines = text.split("\n")
	return lines.map((line, index) => {
		return (
			<p key={index} className="relative">
				{line}
			</p>
		)
	})
}

export default function Studio() {
	const [studio, setStudio] = useState({
		title: "",
		photo: "",
		desc: "",
		rating: "",
		openTime: "",
		closeTime: "",
		options: "",
		rooms: []
	})

	useEffect(() => {
		setStudio({
			title: "Tema Studio",
			image: "https://placehold.co/800x240.png",
			desc: "Самые вкусные пирожки с картошкой",
			rating: "4.4",
			openTime: "10:00",
			closeTime: "0:00",
			options: `Кардан — 50 ₽
					Тарелки — 50 ₽
					Другие инструменты — 50 ₽`,
			contacts: [
				{
					title: 'Телефон',
                    value: '+7 (999) 999-99-99'
				},
				{
					title: 'telegram',
					value: '@tema_studio'
				}
			],
			rooms: [
				{
					title: 'Studio 1',
					price: 300,
					image: 'https://placehold.co/320x150.png',
					desc: 'Красивая комната и конкурсы интересные'
				},
				{
					title: 'Studio 2',
					price: 900,
					image: 'https://placehold.co/320x150.png',
					desc: 'Здесь записывались Мэйби Бэйби и Дора'
				}
			],
			reviews: [
				{
					rating: 4,
					text: 'Очень красивая студия, музыканты очень красивые',
					room: 'Studio 1',
				},
				{
					rating: 5,
					text: 'Крутая студия, звук хороший, помещения просторные и удобные спасибо создателю сайта за такой удобный сайт',
					room: 'Studio 1',
				},
				{
					rating: 3,
					text: 'А мне показалось, что студия пахнет солеными огурцами, а я не люблю соленые огурцы, но сайт крутой поэтому плюс три балла',
					room: 'Studio 2',
				}
			]
		})
	}, [setStudio])

	return (
		<article>
			<div className="top mb-6">
				<Image className="rounded-2xl bottom-right-shadow mb-6" src={studio.image} width="800" height="240" alt="" />
				<h1 className="text-2xl font-bold mb-3">{studio.title}</h1>
				<span className="text-secondary block mb-4">{studio.desc}</span>

				<div className="flex text-lg gap-10">
					<span>★ {studio.rating}</span>
					<span>🕔 {studio.openTime} — {studio.closeTime}</span>
					{studio.contacts && studio.contacts.map((contact, index) =>
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-secondary">{contact.title}:</span>
                            <span className="text-secondary">{contact.value}</span>
                        </div>
					)}
				</div>
			</div>

			{studio.options &&
				<div className="mb-6 options">
					<h2 className="text-lg font-semibold mb-3 relative">Дополнительные опции</h2>
					{getLines(studio.options)}
				</div>
			}

			<div className="rooms mb-6">
				<h2 className="text-lg font-semibold mb-3 relative">Комнаты:</h2>
				<div className="rooms flex justify-between gap-4 flex-wrap mx-auto conte">{
					studio.rooms.map((room, index) =>
						<Room room={room} key={index} />
					)
				}</div>
			</div>

			{studio.reviews &&
				<div className="mb-6 options">
					<h2 className="text-lg font-semibold mb-3 relative">Отзывы:</h2>
					<div className="flex flex-col gap-10 items-center">
						{studio.reviews.map((review, index) =>
							<Review review={review} key={index}/>
						)}
					</div>
				</div>
			}
		</article>
	)
}
