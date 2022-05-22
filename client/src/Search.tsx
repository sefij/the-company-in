export default function Search(props: {addDom: (domain: string) => void, inputText: string}) {
    let inputText: string = props.inputText
    const addDomain = () => {
        props.addDom(inputText)
    }
    const handleChange = (event: any)=> {
        inputText = event.target.value
      }
  return (
    <div>
        <input type="text" defaultValue={props.inputText} onChange={handleChange}></input>
        <button onClick={addDomain}> add domain </button>
      </div>
  )
}
