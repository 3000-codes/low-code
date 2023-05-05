import Toolbar from '@/components/Toolbar'
import WidgetList from '@/components/WidgetList'
import Editor from '@/components/Editor'
import './index.scss'
const Home = () => {
  return (
    <>
      <Toolbar />
      <main className="contain">
        <section className="left">
          <WidgetList />
        </section>
        <section className="center"><Editor/></section>
        <section className="right">右侧属性栏</section>
      </main>
    </>
  )
}

export default Home
