import mockyApi from '../../apis/mockyApi'
import { actionTypes } from '../const'

export const getData = () => async(dispatch) => {
    const response = await mockyApi.get('/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
    dispatch({type: actionTypes.GET_DATA, payload: response.data})
}