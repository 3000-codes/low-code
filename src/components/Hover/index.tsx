
const HoverComponent = () => {
  const data = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    value: Math.floor(Math.random() * 1000) + i
  }))

  return (
    <div className="w100% h100% ">
    { data.map(item => (
          <div className="group h32px leading-32px flex b-b b-b-solid b-b-#ccc " key={item.id}>
            <div className="group-hover:text-gray-500">{item.name}</div>
            <div className="" >{item.value}</div>
          </div>
    ))
      }

    </div>

  )
}

export default HoverComponent
