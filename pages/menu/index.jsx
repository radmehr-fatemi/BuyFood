//Component
import MenuPage from '../../components/templates/menu/MenuPage';

const Menu = ({ data }) => {
    return <MenuPage data={data} />
};

export const  getStaticProps = async () => {
    const res = await fetch( `${process.env.BASE_URL}/data` );
    const data = await res.json();
    console.log(data)

    return {
        props: {
            data,
        }
    }
}


export default Menu;