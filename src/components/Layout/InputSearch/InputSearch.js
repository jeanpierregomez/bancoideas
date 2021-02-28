import "./InputSearch.css";

export default function InputSearch({ setIsSearch }) {
	const handleSearch = () => {
		setIsSearch(false);
	};
	return (
		<div className="is-div">
			<label className="is-div__lbl">
				<i className="fas fa-search t-white"></i>
				<input className="is-div__lbl--input" placeholder="Buscar proyecto" />
			</label>
			<i className="fas fa-times t-white" onClick={handleSearch}></i>
		</div>
	);
}
