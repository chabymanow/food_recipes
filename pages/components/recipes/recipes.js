import { useState, useEffect, useRef } from 'react';
import Card from './cards';
import LoadScreen from './loadScreen';
import axios from 'axios';

export default function Recipes() {
	const [recipes, setRecipes] = useState([]);  
	const [loading, setLoad] = useState(""); 
	const foodNameRef = useRef();
	const getRecipe = async () => {
		
		try{
			setLoad("load");
			const URL = `https://api.edamam.com/search?q=${foodNameRef.current.value}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}&from=0&to=20`;
			console.log(URL);
			const response = await axios.get(URL);
			if (!response){
				throw new Error('Failed to fetch data');
			}
			const jsonObj = await response.data;
			if(jsonObj) setRecipes(jsonObj.hits);
		}catch(err){
			console.log(err);
		}
		setLoad("");
    };

    useEffect(()=>{}, [recipes])


	return (
		<div className="flex flex-col items-center gap-2 px-11 bg-slate-300">
			<LoadScreen visible={loading} />
			<div className='w-screen h-20 flex flex-row gap-10 items-center justify-center bg-slate-200 fixed inset-0 shadow-2xl'>
            <input type="text" placeholder="Search..."
					className="pl-4 py-4 my-5 w-64 bg-slate-100 text-slate-900 rounded-xl border-2 border-slate-300 font-raleway sm:mr-0 sm:mb-4 sm:py-1"
					ref = {foodNameRef}
			/>
            <button onClick={getRecipe}
					className="font-bold font-raleway px-12 py-2 rounded-xl shadow-md border-xl border-sky-900 bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
				>Search
			</button>

			</div>

			<div className='flex flex-wrap w-screen place-content-center  pt-20'>
            {recipes.map((obj, i) => (
                <Card recipe={obj.recipe} keys={i} />
            ))}
        </div>
               
		</div>
	);
}
