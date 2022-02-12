import axios from 'axios';

//synchronous action creator
const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts }
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchPosts =  () => {
    return async dispatch => {
        try {
            let posts = await axios.get('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6');
            dispatch(fetchPostsSuccess(posts.data));
        }
        catch(e){
            console.log(e)
        }
    }
}