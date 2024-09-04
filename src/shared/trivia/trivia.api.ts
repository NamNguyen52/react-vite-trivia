export function getSessionToken() {
  const SESSION_TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';
  return fetch(SESSION_TOKEN_URL).then((response) => response.json());
}

interface TriviaCategory {
  id: number;
  name: string;
}

interface GetCategoriesResponse {
  data: TriviaCategory[];
}

export function getCategories(): Promise<GetCategoriesResponse> {
  console.log('******getCategories*******');
  const CATEGORY_URL = 'https://opentdb.com/api_category.php';
  return fetch(CATEGORY_URL).then((response) => response.json());
}
