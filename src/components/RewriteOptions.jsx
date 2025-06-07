import React from "react";

const tones = [
	"Make it more concise",
	"Simplify the language",
	"Be more direct",
	"Sound more professional",
	"Use a more formal tone",
	"Use a more casual tone",
	"Sound more confident",
	"Be less apologetic",
	"Soften the message",
	"Sound more friendly",
	"Make it more engaging",
	"Add a touch of humor",
	"Make it more persuasive",
	"Make it more impactful",
	"Add storytelling or emotion",
];

const RewriteOptions = ({ tone, setTone, disabled }) => (
	<div className="popup-select-wrapper">
		<label htmlFor="tone">Select Tone</label>
		<select
			id="tone"
			value={tone}
			onChange={(e) => setTone(e.target.value)}
			disabled={disabled}
			className="popup-select"
		>
			<option value="">-- Choose a tone --</option>
			{tones.map((tone) => (
				<option
					key={tone}
					value={tone}
				>
					{tone}
				</option>
			))}
		</select>
	</div>
);

export default RewriteOptions;
