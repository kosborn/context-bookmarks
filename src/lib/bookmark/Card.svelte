<script>
	import { Badge } from '@/components/ui/badge';
	import { Button } from '@/components/ui/button';
	import {
		CardTitle,
		CardDescription,
		CardHeader,
		CardContent,
		Card,
		CardFooter
	} from '@/components/ui/card';

	import { Star, Trash2, FileEdit } from 'lucide-svelte';

	import Highlight from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import SvelteMarkdown from 'svelte-markdown';

	import 'github-markdown-css/github-markdown.css';

	export let bookmark;
</script>

<Card class="bg-gray-800 text-white">
	<CardHeader>
		<div class="flex items-center justify-between">
			<div>
				<div class="flex items-center gap-2">
					<CardTitle>{bookmark.title}</CardTitle>
					<CardDescription class="text-sm">Domain: {new URL(bookmark.url).host}</CardDescription>
				</div>
				<CardDescription>Written by: React Team</CardDescription>
				<CardDescription>URL: <a href={bookmark.url}>{bookmark.url}</a></CardDescription>
				<CardDescription>Category: {bookmark.category}</CardDescription>
			</div>
			<div class="flex">
				<img
					alt="Screenshot"
					class="rounded-lg object-cover object-center"
					height="100"
					src="/placeholder.svg"
					style={{
						aspectRatio: '100/100',
						objectFit: 'cover'
					}}
					width="100"
				/>
				<div class="ml-4 flex">
					<Button size="icon" variant="ghost">
						<Star class="h-4 w-4" />
						<span class="sr-only">Star/Favorite</span>
					</Button>
					<Button size="icon" variant="ghost">
						<FileEdit class="h-4 w-4" />
						<span class="sr-only">Edit</span>
					</Button>
					<Button size="icon" variant="ghost">
						<Trash2 class="h-4 w-4" />
						<span class="sr-only">Delete</span>
					</Button>
				</div>
			</div>
		</div>
	</CardHeader>
	<CardContent>
		<div class="markdown-body h-auto w-full rounded-sm border-gray-700 p-5">
			<SvelteMarkdown source={bookmark.results} />
		</div>

		{#if bookmark.summary}
			<div>
				<h3 class="text-lg font-bold">Summary</h3>
				<p class="text-sm text-gray-400">
					{bookmark.summary}
				</p>
			</div>
		{/if}
		{#if bookmark.description}
			<div>
				<h3 class="mt-4 text-lg font-bold">Description</h3>
				<p class="text-sm text-gray-400">
					{bookmark.description}
				</p>
			</div>
		{/if}
		{#if bookmark.bulletPoints}
			<div>
				<h3 class="mt-4 text-lg font-bold">Bullet Points</h3>
				<ul class="list-inside list-disc text-sm text-gray-400">
					{#each bookmark.bulletPoints as bulletPoint}
						<li>{bulletPoint}</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if bookmark.installationInstructions}
			<div>
				<h3 class="mt-4 text-lg font-bold">Installation Instructions</h3>
				<p class="text-sm text-gray-400">
					{bookmark.installationInstructions}
				</p>
			</div>
		{/if}
		{#if bookmark.codeExamples}
			<div>
				<h3 class="mt-4 text-lg font-bold">Code Examples</h3>
				<Highlight language={javascript} code={bookmark.codeExamples} />
			</div>
		{/if}
		{#if bookmark.relatedLinks}
			<div>
				<h3 class="mt-4 text-lg font-bold">Related Links</h3>
				<ul class="list-inside list-disc text-sm text-gray-400">
					{#each bookmark.relatedLinks as relatedLink}
						<li>
							<a class="underline" href={relatedLink}></a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</CardContent>
	<CardFooter>
		<div class="flex w-full items-center justify-between">
			<div class="w-3/4">
				{#if bookmark.tags}
					<div class="flex flex-wrap gap-2">
						{#each bookmark.tags as tag}
							<Badge class="rounded-full" href="#/{tag}">#{tag}</Badge>
						{/each}
					</div>
				{/if}
			</div>
			<div>
				Created on: {new Date(bookmark.ts.isoString).toLocaleDateString()}
			</div>
		</div>
	</CardFooter>
</Card>

<!-- <h3 class="mt-4 text-lg font-bold">Bullet Points</h3>
<ul class="list-inside list-disc text-sm text-gray-400">
	<li>Introduction to JSX</li>
	<li>Components and Props</li>
	<li>State and Lifecycle</li>
	<li>Handling Events</li>
</ul>
<h3 class="mt-4 text-lg font-bold">Installation Instructions</h3>
<p class="text-sm text-gray-400">
	Install React via npm using the command:
	<code class="rounded-sm bg-gray-700 px-1">`npm install react`</code>
	and
	<code class="rounded-sm bg-gray-700 px-1">`react-dom`</code>
</p>
<h3 class="mt-4 text-lg font-bold">Code Examples</h3>
<Highlight
	language={javascript}
	code={`function Hello() {
return <h1>Hello, world!</h1>;
}
ReactDOM.render(
<Hello />,
document.getElementById('root')
);`}
/>

<h3 class="mt-4 text-lg font-bold">Related Links</h3>
<ul class="list-inside list-disc text-sm text-gray-400">
	<li>
		<a class="underline" href="#"> React Community Support </a>
	</li>
	<li>
		<a class="underline" href="#"> React Tutorial </a>
	</li>
</ul>
<h3 class="mt-4 text-lg font-bold">Tags</h3>
<div class="flex flex-wrap gap-2">
	<Badge class="rounded-full">#React</Badge>
	<Badge class="rounded-full">#JavaScript</Badge>
	<Badge class="rounded-full">#Web Development</Badge>
	<Badge class="rounded-full">#Frontend</Badge>
	<Badge class="rounded-full">#Documentation</Badge>
</div> -->
