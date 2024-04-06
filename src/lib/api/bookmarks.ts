import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

import * as env from '$env/dynamic/private';

const OPENAI_API_KEY = env.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const llmSummarize = async (bookmark) => {
	const completion = await openai.chat.completions.create({
		messages: [
			{ role: 'system', content: prompt },
			{ role: 'user', content: bookmark }
		],
		model: 'gpt-4-0125-preview',
		stream: true
	});

	const stream = OpenAIStream(completion);
	return new StreamingTextResponse(stream);
};

const prompt = `
    In Markdown in this format, follow the bulleted tasks

    ### Summary:
    - Give a simple two to three sentence description.
    ### Requirements or Instructions
    - Include any system or software requirements, or any sample code to demonstrate the use
    ### Details
    - Provide a more detailed explanation of the content as bullet points
    - Include up to a 3 paragraph summary.
    ### Other Links
    - Include a list of relevant links foud on the page with a reason why they were added
    - Exclude this section if there are no other links

    Tags:
    - Suggest hashtags in markdown format. Include specific and generic hashtags.

    Category:
    - A single category that this best fits under

    context:`;

const func = {
	name: 'summarize_site',
	description: 'Summarize a website and return a markdown template for a bookmark',
	parameters: {
		type: 'object',
		properties: {
			url: {
				type: 'string',
				format: 'uri'
			},
			title: {
				type: 'string'
			},
			summary: {
				type: 'string'
			},
			category: {
				type: 'string'
			},
			bullets: {
				type: 'array',
				items: {
					type: 'string'
				}
			},
			tags: {
				type: 'array',
				items: {
					type: 'string'
				}
			},
			detailed: {
				type: 'string'
			},
			related_links: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						url: {
							type: 'string',
							format: 'uri'
						},
						title: {
							type: 'string'
						},
						related_value: {
							type: 'string'
						}
					},
					required: ['url', 'title', 'related_value']
				}
			}
		},
		required: ['url', 'title', 'summary', 'category', 'bullets', 'detailed', 'tags']
	}
};
