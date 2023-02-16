// Core dependencies
import { Routes, Route } from 'react-router-dom';

// Custom pages
import { Home } from '../pages/Home';
import { DishDetails } from '../pages/Dish/Details';
import { DishNew } from '../pages/Dish/New';
import { DishEdit } from '../pages/Dish/Edit';
import { NotFound } from '../pages/NotFound';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route key='001' path='/' element={<Home />} />
      <Route key='002' path='/dish-details/:dish_id' element={<DishDetails />} />     
      <Route key='003' path='/dish-new' element={<DishNew />} />   
      <Route key='004' path='/dish-edit/:dish_id' element={<DishEdit />} />   
      <Route key='999' path='*' element={<NotFound />} />
    </Routes>
  );
}