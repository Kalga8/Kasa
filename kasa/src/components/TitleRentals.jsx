
function TitleRentals({ title, location }) {
	return (
		<div className="label-container">
			{" "}
			<h1 className="title-rentals">{title}</h1>{" "}
			<p className="localization-rentals">{location}</p>
		</div>
	);
}

export default TitleRentals