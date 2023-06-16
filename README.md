# Lazy Image Generator
A CLI tool to generate low-resolution images primarily for use in DOM Lazy Loading.

## Arguments
Both arguments are required for use. Both directories must already exist. Note: all contents in the `--outDir` directory will be purged and re-generated.
```
--inDir [directory]		Specify the directory which contains input images
--outDir [directory]	Specify the directory which shrunk images will be output to
```

## Adding to build tools
### Example: Integration with Vite
```json
// package.json

"scripts": {
	// scripts ...
	"dev": "lazy-image-generator [options] && [existing dev scripts]",
	"build": "lazy-image-generator [options] && [existing build scripts]",
	// ... scripts
},
```

## Run manually
```bash
$ npx lazy-image-generator [options]
```

## License
Lazy Image Generator | A CLI tool to generate low-resolution images primarily for use in DOM Lazy Loading.

Copyright (C) 2023 Lachlan Rehder

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.