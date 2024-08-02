function Host({ name, picture }) {
	const [firstName, lastName] = name.split(" ");

	return (
		<div className="host-profil">
			<p>
				{firstName}
				<br />
				{lastName}
			</p>
			<img
				className="host-picture"
				src={picture}
				alt={name}
			/>
		</div>
	);
}

export default Host