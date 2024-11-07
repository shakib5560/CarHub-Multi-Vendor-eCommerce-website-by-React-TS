import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Category from '@/components/category'
import Mostsearchcar from '@/components/mostsearchcar'
import About from '@/components/about'
import Faq from '@/components/faq'
import Footer from '@/components/footer'


function Home() {
  return (
   <>
     {/* Nav_Bar */}
      <Navbar />
     {/* Hero */}
      <Hero />
      {/* Category */}
      <Category />
      {/* most Search */}
      
      <h1 className=" mb-12 text-3xl font-bold text-center">Our Top Selling Cars</h1>

      <Mostsearchcar />

      {/* About */}
      
      < About />

      {/* FAQ */}

      <h1 className=" mt-20 mb-12 text-3xl font-bold text-center">Frequently Asked Questions</h1>

      < Faq />

      {/* Footer */}

      < Footer />
      
   </>  
  )
}

export default Home