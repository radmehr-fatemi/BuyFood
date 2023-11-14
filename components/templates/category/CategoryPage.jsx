import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//Style
import styles from "./CategoryPage.module.scss";
import CardMenu from '../../modules/card/CardMenu';

const CategoryPage = ({ data }) => {

    const [query, setQuery] = useState({ difficulty: "", time: "" });
    const router = useRouter()
    
    useEffect( () => {
        const { difficulty ,time } = router.query;
        if  (query.difficulty !== difficulty ||  query.time !== time )  {
            setQuery( {difficulty,time} )
            console.log(router.query ,query)
        }
    } ,[])
    
        const selectHandler = e => {
            setQuery({ ...query, [e.target.name]: e.target.value })
        };
 
    const searchHandler = () => {
        router.push({
            pathname: "category",
            query,
        })
    }

    return (
        <div className={styles.categoryPage} >
            <h3>Category</h3>

            <div className={styles.fields} >
                <select value={query.difficulty} name='difficulty' onChange={selectHandler}>
                    <option value="" >Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <select value={query.time} name='time' onChange={selectHandler}>
                    <option value="">Cooking time</option>
                    <option value="more">More than 30 min</option>
                    <option value="less">Less than 30 min</option>
                </select>
                <button onClick={searchHandler} >Search</button>
            </div>

            <div className={ styles.products } >
                {
                    data.map(item => <CardMenu key={item.id} {...item} />)
                }
            </div>
        </div>
    );
};

export default CategoryPage;