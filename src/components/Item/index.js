// import "./index.scss";
export default function Item(props) {
	const URL = props.url;
	const currentMode = props.currentMode;
	const setCurrentMode = props.setCurrentMode;
	// View mode is 0, Edit mode is 1
	if (currentMode) {
		return (
			<div className="item my-2">
				<label htmlFor="text">Text</label>
				<input type="text" value={props.title} />
				<label htmlFor="url">URL</label>
				<input type="text" value={props.url} />
				<label htmlFor="description">Description</label>
				<input type="text" value={props.description} />
				<label htmlFor="projectId">Project ID</label>
				<input type="text" value={props.projectId} />
				<button onClick={() => setCurrentMode(1)}>View</button>
			</div>
		)
	}
	else {
		if (URL) { return (<div className="item"><a href={URL}>{`${props.title}`}</a><p>{props.description}</p></div>); }
		else { return (<div className="item"><span>{`${props.title}`}</span><p>{props.description}</p></div>); }
	}
}