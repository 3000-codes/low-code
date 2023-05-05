import Toolbar from '@/components/Toolbar'
import './index.scss'
const Home = () => {
  return (
    <>
      <Toolbar />
      <main className="contain">
        <section className="left">左侧控件栏</section>
        <section className="center">中间画布</section>
        <section className="right">右侧属性栏</section>
      </main>
    </>
  )
}

export default Home
