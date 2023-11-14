//Component
import CategoryPage from "../../components/templates/category/CategoryPage";

const index = ({ filterData }) => {

    return <CategoryPage data={ filterData } />
};

export const getServerSideProps = async (context) => {
    const { query: { difficulty, time } } = context;
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const data = await res.json();

    const filterData = data.filter(item => {
        const difficultyResult = item.details.filter(details => (details.Difficulty && details.Difficulty.toLowerCase() == difficulty));

        const timeResult = item.details.filter(details => {
            const cookingTime = details['Cooking Time'] ?? "";
            const [cookingTimeResult] = cookingTime.split(" ");
            if (time && time == "more" && cookingTimeResult && +cookingTimeResult >= 30 ) return "true"
            if (time && time == "less" && cookingTimeResult && +cookingTimeResult < 30) return "true"
        })
        if (time && difficulty && timeResult.length && difficultyResult.length) {
            return item
        } else if (!time && difficulty && difficultyResult.length) {
            return item
        } else if (time && !difficulty && timeResult.length) {
            return item
        }
    })

    return {
        props: { filterData }
    }
}

export default index;