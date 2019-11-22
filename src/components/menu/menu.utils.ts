export const cleanPathname = (pathname: string, paths: string[]): string => {
  let path = pathname.slice(0, -1);
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path
    .split("/")
    .reduce<string[]>((acc, item) => {
      if (paths.includes(item)) acc.push(item);
      return acc;
    }, [])
    .join("/");
};
