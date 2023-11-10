import { useRouter } from 'next/router';

const Details = ({ productData }) => {

    const router = useRouter()
    if ( router.isFallback ) return <h1>Loading...</h1>
    
    return (
        <div>
            <h1> {productData.name} </h1>
            <h1> {productData.id} </h1>
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch( `${process.env.BASE_URL}/data` );
    const data = await res.json();
    const products = data.slice( 0 ,10 );

    const paths = products.map( product => ({ params: { productId: product.id.toString() } }) )
    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const { productId } = context.params;
    const res = await fetch( `${process.env.BASE_URL}/data/${productId}` )
    const productData = await res.json();

    return {
        props: {
            productData
        }
    }
}

export default Details;