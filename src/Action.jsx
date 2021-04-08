import { types } from './ActionTypes';

export const userDetails = (userInfo) => {
    return {
        type: types.USER_SUCCESS,
        userInfo: userInfo
    }
}
export default userDetails;