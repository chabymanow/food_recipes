import { useState } from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {CgDanger} from 'react-icons/cg';
import ShowRecipe from './recipe';

export default function Card ({recipe, keys}){
    const { label, calories, cautions, image, totalTime, dietLabels, dishType } = recipe;
    const [bigMode, setBig] = useState(false);

    const handleClose = () => setBig(false)

    return (
        <div className={bigMode ? "big" : ""}>
            <div key={keys} className='flex flex-col flex-shrink w-1/10 h-1/10 max-w-sm m-5 border-2 rounded-xl p-3 bg-gradient-to-b text-black from-teal-100 to-slate-200 shadow-xl'>
                <img className="w-100 h-100 self-center rounded-lg border-2" src={image} />
                <h2 className="text-xl text-zinc-800 my-4 w-72 h-8">{label}</h2>
                <div className='my-3'>
                {dishType.length > 0 ? (
                    <div className='flex flex-row items-center gap-2 text-l text-slate-900'>
                        Type: {dishType.map((label, i) => label + ", ")}
                    </div>
                ): 
                    <div className='flex flex-row items-center gap-2 text-l text-slate-900'>
                        Caution: None
                    </div>                
                }
                </div>
                
                <p className="text-l my-2">Calories: {Math.round(calories)}</p>
                <p>
                {totalTime !== 0 ? (
                    <span className="time flex flex-row items-center gap-2"><AiOutlineClockCircle />{totalTime} mins</span>
                ) : 
                    <span className="time">Various mins</span>
                }
                </p>
                <div className='cal my-1 text-l'>
                {dietLabels.length > 0 ? (

                        <p>Diet Labels: {dietLabels.map((label) => label + ", ")}</p>
                    ) :
                    <p> Diet Labels: N/A</p>
                }
                </div>
                <div className='my-1 text-l text-slate-900'>
                {cautions.length > 0 ? (
                    <div className='flex flex-row items-center gap-1 text-red-700'>
                        <CgDanger />Caution: {cautions.map((label) => label + ", ")}
                    </div>
                ): 
                    <div>
                        Caution: None
                    </div>                
                }
                </div>
                <button onClick={() => setBig(true)} className="cursor-pointer bg-sky-600 px-4 py-3 rounded-lg hover:bg-sky-300">See this...</button>
            </div>
            <ShowRecipe recipe={recipe} visible={bigMode} onClose={handleClose}/>
        </div>
    )
}