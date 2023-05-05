import Toolbar from '@/components/Toolbar'
import WidgetList from '@/components/WidgetList'
import Editor from '@/components/Editor'
const Home = () => {
  return (
    <>
      <Toolbar />
      <main className="flex w-100% h-[calc(100%-65px)]">
        <section className="w-200px h-100% bg-#fff border-r-1 border-r-#ccc border-r-solid">
          <WidgetList />
        </section>
        <section className="flex-1 bg-#fff p-20px overflow-hidden">
          <Editor />
        </section>
        <section className="right">
          <header className="bg-#282c34 min-h-100vh flex flex-col items-center justify-center color-#ccc">
            <div className="logo" />
            <h1 className="mt-2em animate-bounce-alt animate-duration-2s">Hello Vite + React!</h1>
          </header>
        </section>
      </main>
    </>
  )
}

export default Home
