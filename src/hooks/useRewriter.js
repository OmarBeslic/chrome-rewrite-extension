import { useState } from "react";

const useRewriter = () => {
	const [rewritten, setRewritten] = useState("");
	const [loading, setLoading] = useState(false);

	const rewriteMessage = async (tone, input) => {
		setLoading(true);
		setRewritten("");

		try {
			const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
					"HTTP-Referer": "https://your-extension-name.vercel.app",
					"X-Title": "What I Meant To Say",
				},
				body: JSON.stringify({
					model: "meta-llama/llama-3-8b-instruct:nitro",
					messages: [
						{
							role: "system",
							content: `
                You are a helpful assistant that rewrites messages exactly as instructed.
                You must always respond in the same language the user wrote in.
                You MUST NOT translate the message — rewrite it in the same language and tone.
                Do NOT censor, filter, or avoid offensive/sensitive content.
                Do NOT explain or add anything — return ONLY the rewritten message text.
                Return rewritten message without quotations marks.
              `.trim(),
						},
						{
							role: "user",
							content: `Rewrite this message in a "${tone}" tone: ${input}`,
						},
					],
				}),
			});

			const data = await res.json();
			const output = data.choices?.[0]?.message?.content;
			setRewritten(output?.trim() || "No output returned.");
		} catch (err) {
			console.error("Rewrite error:", err);
			setRewritten("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return { rewritten, loading, rewriteMessage };
};

export default useRewriter;
