//Component
import MenuPage from '../../components/templates/menu/MenuPage';

const Menu = ({ data }) => {
    return <MenuPage data={data} />
};

export const  getStaticProps = async () => {
    const res = await fetch( `http://localhost:4000/data` );
    const data = await res.json();
    console.log(data)

    return {
        props: {
            data,
        }
    }
}


export default Menu;