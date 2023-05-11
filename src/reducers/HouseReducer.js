import { ADD_HOUSE ,REMOVE_HOUSE, SELECT_HOUSE, UPDATE_HOUSE} from '../Action'
import uuid from 'react-native-uuid'

const initialState = {

     update:false,
     idx:-1,

     houses : [{ division : '지출' , money: 1700 , detail:'맛동산' ,kind:'간식', regDate :'2023-05-01' , id:uuid.v4() }]
     


}

const HouseReducer = (state=initialState,action) => {
    switch (action.type){
        case UPDATE_HOUSE:
            state.houses[action.house.index] = action.house;
            return { update:false , idx:-1, houses:state.houses };
        case SELECT_HOUSE:
           
           const sel_idx = state.houses.findIndex(house=>house.id === action.house.id)
          
            return {
                update:action.house.flag , 
                idx:sel_idx,houses:state.houses
            }

        case ADD_HOUSE :
            action.house.flag=true;
            return{
                update:false,
                idx:-1,
                houses:[ ...state.houses , action.house ]
            }; 
            
        case REMOVE_HOUSE:
            const index = state.houses.findIndex(house =>house.id === action.house.id)
              return{ 
                update:false,
                idx:-1,
                houses:[ ...state.houses.slice(0,index) , ...state.houses.slice(index+1)]
              };

            default:
                return state;
    }
}

export default HouseReducer;