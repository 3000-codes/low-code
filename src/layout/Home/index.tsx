import Toolbar from '@/components/Toolbar'
import WidgetList from '@/components/WidgetList'
import Editor from '@/components/Editor'

const Home = () => {
  return (
    <>
      <Toolbar />
      <main className="w-full h-[calc(100vh-65px)] flex">
        <section className="w-50 h-full bg-white border-r border-gray-300">
          <WidgetList />
        </section>
        <section className="flex-1 bg-white p-5 overflow-auto"><Editor/></section>
        <section className="w-75 h-full bg-white border-l border-gray-300">右侧属性栏</section>
      </main>
    </>
  )
}

export default Home
