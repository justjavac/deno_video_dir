/** Returns the path to the user's video directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value               | Example                  |
 * | ------- | ------------------- | ------------------------- |
 * | Linux   | `XDG_VIDEOS_DIR`    | /home/justjavac/Videos    |
 * | macOS   | `$HOME`/Movies      | /Users/justjavac/Movies   |
 * | Windows | `{FOLDERID_Videos}` | C:\Users\justjavac\Videos |
 */
export default function videoDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      return Deno.env.get("XDG_VIDEOS_DIR") ?? null;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Movies`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_Videos") ?? null;
  }

  return null;
}
