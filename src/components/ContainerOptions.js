const ContainerOptions = ({ options, setOptions, selected, setSelected }) => {

  const moveOptionToSelected = (id) => {
    const updateOptions = options.filter((option) => option.id !== id)
    setOptions(updateOptions)
    const updateSelected = options.filter((option) => option.id === id)
    setSelected([...selected, ...updateSelected])
  }

  return(
    <section>

      <div className="flex items-baseline justify-between">
        <h2 className="mb-3 text-lg font-medium">Options</h2>
        <button className="px-3 py-2 text-xs font-medium text-center text-white bg-black rounded cursor-not-allowed opacity-10" disabled>Select random</button>
      </div>

      <table className="w-full text-left">
        <thead className="text-xs uppercase bg-gray-100 rounded">
          <tr>
            <th className="w-4/5 p-3">Option</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, idx) => (
            <tr
              key={idx}
              className="text-sm border-b hover:bg-gray-50">
              <td className="p-3">
                <button 
                  className="w-full text-left"
                  onClick={() => moveOptionToSelected(option.id)}>
                  {option.option}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </section>
  )
}

export default ContainerOptions