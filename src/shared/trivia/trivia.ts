import { useState } from 'react';
import { getSessionToken, getCategories } from './trivia.api';

type TriviaCategory = {
  id: number;
  name: string;
};

export default function useTriviaStore() {
  const [sessionToken, setSessionToken] = useState('');
  const [categories, setCategories] = useState<TriviaCategory[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getTriviaCategories = () => {
    setLoading(true);
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return {
    categories,
    error,
    loading,
    getTriviaCategories,
  };
}
