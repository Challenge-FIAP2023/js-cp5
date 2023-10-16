import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../routes/home.module.css'


function Home() {

  /* Hook - useState */
  const [slidePreview, setSlidePreview] = useState(1);

  const imagens = [
    {id:'1', image:'./src/assets/img/hossomakis.jpg'},
    {id:'2', image:'./src/assets/img/niguiris.jpg'},
    {id:'3', image:'./src/assets/img/guiozas.jpg'},
    {id:'4', image:'./src/assets/img/sashimis.jpg'}
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
        <Swiper
          slidePreview={slidePreview}
          pagination={{clickable:true}}
          navigation
        >
          {imagens.map((item) =>(       
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slide" className={styles.slideItem}/>          
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Home
