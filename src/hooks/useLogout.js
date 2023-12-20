import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";


export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch: workoutDispatch} = useWorkoutsContext();
    
    const logout = () =>{
        // remove user from the storage
        localStorage.removeItem('user');

        // dispatch the user 
        dispatch({type: 'LOGOUT'});
        workoutDispatch({type: 'SET_WORKOUTS', payload: null});
    }

    return {logout};
}