import Image from "next/image";
import Main from './components/Main'
import Product from './components/Product';


export default function Home() {
  return (
    <>
     <Main/>
     <Product title={'Hotel'} img={'/imgHotel.jpg'}/>
     <Product title={'Resort'} img={'/imgResort.jpg'}/>
     <Product title={'Restaurant'} img={'/imgRestaurant.jpg'}/>
    </>

  );
}
