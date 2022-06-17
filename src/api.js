import { API_URL } from './config';

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);

  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  return await response.json();
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + 'filter.php?с=' + catName);

  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
