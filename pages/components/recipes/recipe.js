import {AiOutlineClockCircle} from 'react-icons/ai';
import {CgDanger} from 'react-icons/cg';

export default function ShowRecipe({recipe, visible, onClose}){
    const { label, calories, cautions, image, totalTime, dietLabels, dishType, ingredients } = recipe;

    const handleClose = () => setBig(false)

    if (!visible){
        return null;
    }

    return(
        <div onClick={onClose} className="flex items-center justify-center max-w-screen max-h-screen bg-black bg-opacity-5 backdrop-blur-md fixed inset-0">
            <div className="flex flex-row w-screen min-h-screen max-h-screen m-48 bg-white text-black p-5 rounded-3xl shadow-xl overflow-y-scroll">
                <img src={image} className="rounded-md w-auto object-cover shadow-lg"/>
                <div className="flex flex-col w-full">
                    <div className="text-3xl w-1/10 ml-5 self-center mb-5">{label}</div>
                    <div className="flex flex-row justify-between w-auto">
                        
                        <div className="flex flex-col gap-3 mx-10">
                            <div>Dish type: {dishType}</div>
                            <div>
                                <p>
                                    {totalTime !== 0 ? (
                                        <span className="time flex flex-row items-center gap-2"><AiOutlineClockCircle />{totalTime} mins</span>
                                    ) : 
                                        <span className="time">Various mins</span>
                                    }
                                </p>
                            </div>
                            <div>Calories: {Math.round(calories)}cal</div>
                            <div>
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
                            <div>
                                {dietLabels.length > 0 ? (
                                    <p>Diet Labels: {dietLabels.map((label) => label + ", ")}</p>
                                    ) :
                                    <p> Diet Labels: N/A</p>
                                }
                            </div>
                            
                        </div>
                        <div>
                            <div>
                            <p className="text-xl text-orange-500 mb-3">Ingredients:</p>
                            {ingredients.length > 0 ? (
                                <div> {ingredients.map((label) => <p className="mb-2">{label['text']}</p>)}</div>
                                ) :
                                <p> Diet Labels: N/A</p>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}