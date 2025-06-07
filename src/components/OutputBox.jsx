import React from "react";

const OutputBox = ({ text, copied }) => {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
	};

	if (!text) return null;

	return (
		<div className="popup-output">
			<label htmlFor="output">Rewritten Message</label>
			<textarea
				id="output"
				value={text}
				readOnly
				rows={4}
				className="popup-textarea"
			/>
			<button
				onClick={copyToClipboard}
				className="popup-button secondary"
			>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};

export default OutputBox;
