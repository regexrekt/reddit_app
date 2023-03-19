import { selectPosts } from "../utils/selectors";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDisplay } from "../components/posts/postsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export const SearchBar = () => {

    const currentPostsSlice = useSelector(selectPosts)

    const [term, setTerm] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        
        if (e.keyCode === 13 || e.target.getAttribute('id') === 'magnifyingGlass') {
            e.preventDefault();
            const searchResults = []
            currentPostsSlice.posts.forEach(post => {
                if (post.title.toLowerCase().includes(term.toLowerCase())) {
                    searchResults.push(post)
                }
            })
            if (searchResults.length > 0) {
                dispatch(loadDisplay(searchResults))
            } else {
                window.alert('Search term not found') //FIX THIS
            };
            setTerm('')
        }
    }

    return (
        <div className='searchArea'>
            <input type='text' name='search' onChange={handleChange} onKeyDown={handleSubmit} placeholder='search'/>
            <FontAwesomeIcon id='magnifyingGlass' className='search' icon={faMagnifyingGlass} onClick={handleSubmit}/>
        </div>
    )

}