class PagesConfig {
  PROFILE = (username: string) => {
    return `/u/${username}`;
  };
}

export const PAGES = new PagesConfig();
