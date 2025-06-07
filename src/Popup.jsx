import React, { useState } from "react";
import RewriteOptions from "./components/RewriteOptions";
import OutputBox from "./components/OutputBox";
import useRewriter from "./hooks/useRewriter";
import "./index.css";

function Popup() {
	const [input, setInput] = useState("");
	const [tone, setTone] = useState("");
  const [copied, setCopied] = useState(false);
	const { rewritten, loading, rewriteMessage } = useRewriter();

	const handleSubmit = () => {
		if (!input || !tone) return;
		rewriteMessage(tone, input);
    setCopied(false);
	};

	return (
		<div className="popup-container">
			<h2 className="popup-title">What I Meant to Say</h2>

			<label
				htmlFor="input"
				className="popup-label"
			>
				Your Message
			</label>
			<textarea
				id="input"
				placeholder="Paste your message here..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
				rows={4}
				className="popup-textarea"
			/>

			<RewriteOptions
				tone={tone}
				setTone={setTone}
				disabled={loading}
			/>

			{ input && tone && <button
				className="popup-button"
				onClick={handleSubmit}
				disabled={ loading}
			>
				{loading ? "Rewriting..." : "Rewrite"}
			</button>}

			<OutputBox text={rewritten} copied={copied}/>
		</div>
	);
}

export default Popup;
