# deno_video_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_video_dir)](https://github.com/justjavac/deno_video_dir/releases)
[![Build Status](https://github.com/justjavac/deno_video_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_video_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_video_dir)](https://github.com/justjavac/deno_video_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's video directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value               | Example                   |
| ------- | ------------------- | ------------------------- |
| Linux   | `XDG_VIDEOS_DIR`    | /home/justjavac/Videos    |
| macOS   | `$HOME`/Movies      | /Users/justjavac/Movies   |
| Windows | `{FOLDERID_Videos}` | C:\Users\justjavac\Videos |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import videoDir from "https://deno.land/x/video_dir/mod.ts";

videoDir();
// Lin: "/home/justjavac/Videos"
// Mac: "/Users/justjavac/Movies"
// Win: "C:\Users\justjavac\Videos"
```

## License

[deno_video_dir](https://github.com/justjavac/deno_video_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
