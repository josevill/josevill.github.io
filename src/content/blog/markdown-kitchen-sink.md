---
title: "Markdown kitchen sink — blog readiness check"
description: "A deliberate stress test of headings, prose length, images, quotes, code, lists, tables, and links so we can judge whether the blog is ready to use."
pubDate: 2026-08-01
updatedDate: 2026-08-01
draft: true
tags: ["meta", "markdown", "qa"]
---

Short opener: this post is intentionally noisy. Every common Markdown shape shows up once so we can eyeball spacing, contrast, and overflow before writing real notes.

## Headings ladder

# Level one (prose h1 — distinct from chrome title)

## Level two should sit between one and three

### Level three sits under two

#### Level four should stay quieter

##### Level five is rare but allowed

###### Level six closes the ladder

## Short vs long prose

One short paragraph. That is the whole idea.

This longer paragraph is here to check line length, muted body colour, and how wrapping feels next to the sidebar chrome. The blog should read as real Markdown prose — no visible `**` markers, no fake `#` prefixes — while still sharing the Catppuccin / WebTUI shell with the resume. If a sentence runs long enough to wrap several times, spacing between paragraphs and after headings should still feel even rather than cramped or airy by accident. Inline **bold**, *italic*, ***bold italic***, and `inline code` should stay legible against the mocha background without fighting the surrounding sentence.

Here is another short beat after the long one.

## Images

Wide placeholder (should respect `max-width: 100%` and not blow the layout):

![Wide 960x360 placeholder for layout testing](/img/placeholder-wide.svg)

Square placeholder (check vertical rhythm around media):

![Square 480x480 placeholder for layout testing](/img/placeholder-square.svg)

Linked image (click-through should work):

[![Wide placeholder wrapped in a link](/img/placeholder-wide.svg)](/blog/)

## Quotes

> Short quote. One line. Easy to scan.

> Longer quote block: when you ship a personal site that looks like an editor buffer, the content still has to carry weight. Typography, contrast, and breathing room matter more than novelty. If the quote wraps across multiple lines, the left border and muted colour should keep it distinct from body copy without looking like a card.

> Nested emphasis inside a quote: **bold**, *italic*, and `code` should inherit sensibly.

## Code

Inline reminder: prefer `astro check` before `astro build`. Shiki theme is **Catppuccin Mocha** (must not flatten fence tokens to the inline-code green).

Fenced block without a language:

```
plain fence
  indented line
trailing space check:
```

### TypeScript

```ts
type Post = {
  title: string;
  draft?: boolean;
};

export function isVisible(post: Post, isDev: boolean): boolean {
  return isDev || !post.draft;
}
```

### JavaScript

```js
export async function fetchPosts(tag) {
  const res = await fetch(`/api/posts?tag=${encodeURIComponent(tag)}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const { items } = await res.json();
  return items.filter((p) => !p.draft);
}
```

### TSX (React)

```tsx
type Props = { title: string; draft?: boolean };

export function PostBadge({ title, draft = false }: Props) {
  return (
    <span className={draft ? "badge draft" : "badge"}>
      {title}
      {draft && <em> · draft</em>}
    </span>
  );
}
```

### C

```c
#include <stdio.h>
#include <stdbool.h>

bool is_visible(bool draft, bool is_dev) {
  return is_dev || !draft;
}

int main(void) {
  printf("visible=%d\n", is_visible(true, true));
  return 0;
}
```

### C++

```cpp
#include <iostream>
#include <string>
#include <optional>

struct Post {
  std::string title;
  std::optional<bool> draft;
};

bool isVisible(const Post& post, bool isDev) {
  return isDev || !post.draft.value_or(false);
}

int main() {
  Post p{"Kitchen sink", true};
  std::cout << std::boolalpha << isVisible(p, true) << "\n";
}
```

### Go

```go
package main

import "fmt"

type Post struct {
	Title string
	Draft bool
}

func IsVisible(p Post, isDev bool) bool {
	return isDev || !p.Draft
}

func main() {
	p := Post{Title: "Hello", Draft: true}
	fmt.Println(IsVisible(p, true))
}
```

### WebAssembly text (WASM / WAT)

```wasm
(module
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add)
  (export "add" (func $add)))
```

### Language aliases (`golang` / `wat`)

`langAlias` in `astro.config.mjs` must resolve these fence labels (use `` ```cpp `` for C++ — a `` ```c++ `` info string is tokenized as language `c` by the Markdown pipeline, so the `c++`→`cpp` alias never runs):

```golang
package alias

func Ready(s string) bool { return len(s) > 0 }
```

```wat
(module
  (func (export "nop")))
```

### Rust

```rust
#[derive(Debug)]
struct Post<'a> {
    title: &'a str,
    draft: bool,
}

fn is_visible(post: &Post, is_dev: bool) -> bool {
    is_dev || !post.draft
}

fn main() {
    let post = Post { title: "Rust fence", draft: false };
    println!("{:?} visible={}", post, is_visible(&post, false));
}
```

### Python

```python
from dataclasses import dataclass

@dataclass
class Post:
    title: str
    draft: bool = False

def is_visible(post: Post, is_dev: bool) -> bool:
    return is_dev or not post.draft

if __name__ == "__main__":
    print(is_visible(Post("py"), is_dev=True))
```

### Bash (long line — scroll inside `pre`)

```bash
curl -fsSL "https://example.com/very/long/path/that/should/scroll-horizontally-inside-the-pre-instead-of-stretching-the-layout?query=1&another=2" | jq .
```

### JSON

```json
{
  "title": "Why this site looks like a Markdown file",
  "draft": false,
  "tags": ["meta", "astro"]
}
```

### YAML

```yaml
title: Markdown kitchen sink
draft: true
tags:
  - meta
  - markdown
  - qa
```

### SQL

```sql
SELECT id, title, pub_date
FROM posts
WHERE draft = FALSE
ORDER BY pub_date DESC
LIMIT 10;
```

### HTML

```html
<article class="blog-prose">
  <h1>Hello from the blog</h1>
  <p>Share chrome matches the resume.</p>
</article>
```

### CSS

```css
.blog-prose pre {
  overflow-x: auto;
  white-space: pre;
  max-width: 100%;
}
```

### Java

```java
public record Post(String title, boolean draft) {
  public boolean isVisible(boolean isDev) {
    return isDev || !draft;
  }
}
```

### Ruby

```ruby
Post = Struct.new(:title, :draft, keyword_init: true)

def visible?(post, is_dev:)
  is_dev || !post.draft
end

puts visible?(Post.new(title: "rb", draft: true), is_dev: true)
```

### Diff

```diff
--- a/src/lib/blog.ts
+++ b/src/lib/blog.ts
@@ -1,5 +1,5 @@
-export function isPublishedPost(post: BlogPost): boolean {
+export function isVisiblePost(post: BlogPost): boolean {
   return import.meta.env.DEV || !post.data.draft;
 }
```

### Dockerfile

```dockerfile
# multi-stage static site build
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS build
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### C# (extra)

```csharp
public sealed record Post(string Title, bool Draft = false)
{
    public bool IsVisible(bool isDev) => isDev || !Draft;
}
```

### PHP (extra)

```php
<?php
function is_visible(array $post, bool $isDev): bool {
    return $isDev || empty($post['draft']);
}

echo is_visible(['title' => 'php', 'draft' => true], true) ? 'yes' : 'no';
```

### Zig (extra)

```zig
const std = @import("std");

pub fn main() void {
    const draft = true;
    const is_dev = true;
    std.debug.print("visible={}\n", .{is_dev or !draft});
}
```

### GraphQL (extra)

```graphql
query LatestPosts($limit: Int!) {
  posts(limit: $limit, draft: false) {
    title
    pubDate
    tags
  }
}
```

## Lists

Unordered:

- First item
- Second item with **bold** and `code`
- Nested:
  - Child A
  - Child B
- Back to top level

Ordered:

1. Install dependencies
2. Run `astro dev`
3. Open `/blog/markdown-kitchen-sink/`
4. Check tags, RSS, and the home “Latest from the blog” teaser

Task-style (if the renderer supports it):

- [x] Draft kitchen-sink post
- [x] Fix anything that looks broken
- [x] Decide whether the blog is ready

## Links and separators

Internal: [Blog index](/blog/), [Tags](/blog/tags/), [meta tag](/blog/tags/meta/), [Home](/).

External: [Astro docs](https://docs.astro.build/).

---

## Table

| Feature        | Expected                         | Notes              |
| -------------- | -------------------------------- | ------------------ |
| Headings       | Clear hierarchy                  | h1–h6              |
| Images         | Scale, keep aspect               | public SVG stubs   |
| Quotes         | Left rule, muted text            | multi-line OK      |
| Code           | Scroll inside `pre`              | Shiki Catppuccin   |
| Lists          | No double markers                | WebTUI override    |
| Draft flag     | Visible in `astro dev` only      | `draft: true` here |

## Closing

If this page looks calm under stress — no overflow, readable multi-language code, images that behave, quotes that read as quotes — the blog chrome is ready for real posts. Keep this file as a draft or delete it once the check is done.
