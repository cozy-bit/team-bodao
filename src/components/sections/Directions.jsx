import images from '../../data/directions'

export default function Directions() {
	
	return (
		<section>
			<h1 className='font-bold text-2xl my-2 md:text-3xl lg:text-4xl'>
				Направления
			</h1>
			<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4'>
				{images.map(el => (
					<img src={el} alt='' key={el} className='w-full' />
				))}
			</div>
		</section>
	)
}
