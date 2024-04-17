# Contextual Bookmarks

Service to collect URLs and use an LLM to generate relevant summaries about those links. This was created so that I may some day be able to close my hundreds of phone browser tabs.

1. Basic data extraction and summarization via LLM
2. SvelteKit frontend to view and manage bookmarks
3. Bookmarks stored in [Fauna](https://fauna.com/)
4. Simple authentication via passkeys, managed by [Corbado](https://corbado.com/) currently
   - Pending an update from Corbado to customize the `aud` so the same token can be used to auhenticated to Fauna directly (via [External identity providers](https://docs.fauna.com/fauna/current/learn/security_model/external))


## Deploymnet
Authentication to Fauna should eventually be handled by the auth provider, there's no other state managemnet outside of the session (managed by Corbado). We could definitely compiled this a static SPA if we wanted to, I'm just much more familiar with SvelteKit's routing than with no Kit.