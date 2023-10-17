import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import styles from './styles.module.css';


function Home() {

  /* Hook - useState */
  const [slidePreview, setSlidePreview] = useState(1);

  const imagens = [
    {id:'1', image:'./src/assets/img/niguiris.jpg', text:'Niguiris Autênticos: A simplicidade elevada a um nível sublime. Peixes frescos sobre almofadas de arroz perfeito.', price:'R$ 34,99'},
    {id:'2', image:'./src/assets/img/guiozas.jpg', text:'Guioza Grelhada: Um aperitivo irresistível. Crocante por fora, suculento por dentro. ', price:'R$ 22,99'},
    {id:'3', image:'./src/assets/img/hossomakis.jpg', text:'Hossomakis Frescos: Um banquete de sabor em cada mordida. A combinação perfeita de arroz e frescor.', price:'R$ 28,99'},
    {id:'4', image:'./src/assets/img/combinado.jpg', text:'Combinado Especial: Uma explosão de sabores japoneses em um único prato. Delicie-se com nossas seleções variadas', price:'R$ 47,99'}
  ];

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 720){
        setSlidePreview(1);
      }else{
        setSlidePreview(2)
      }
    }

    handleResize();
    
    window.addEventListener('resize', handleResize);

    return() => {
      window.removeEventListener('resize', handleResize);
    } 
  }, [])

  return (
    <>
      <section>
        <h1>Sakura Sushi Bar</h1>
        <p>Bem-Vindo ao Sakura Sushi Bar - Sabor e Tradição Japonesa no Seu Prato</p>
        <Swiper
          slidePreview={slidePreview}
          pagination={{clickable:true}}
          navigation
        >
          {imagens.map((item) =>(       
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slide" className={styles.slideItem}/>
              <p>{item.text}</p>
              <p>{item.price}</p>
              <a href="#menu">Ver menu completo</a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id='menu'>
        <h2>Menu</h2>

        {/* ---------------------- CARDS ---------------------- */}
      
      </section>
    </>
  )
}

export default Home
