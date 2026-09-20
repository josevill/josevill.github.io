# Split resume and blog navigation

The resume sidebar is a table of contents for in-page section anchors on `/`. Those anchors are useless or confusing on multi-page Blog routes. Resume `/` keeps the section TOC plus a Blog link; Blog routes use a separate shell with Home / Blog / Tags / RSS. This avoids a shared sidebar that mixes scroll targets with site routes.
