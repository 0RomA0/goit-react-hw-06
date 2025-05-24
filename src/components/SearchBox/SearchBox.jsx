import style from "./SearchBox.module.css"

export default function SearchBox({value, onChange}) {

    return (
        <div className={ style.containerInput }>
            <label className={style.label} htmlFor=""> Finde contacts by name </label>
            <input className={style.input} type="text" value={value} onChange={(event) => onChange(event.target.value)} />
        </div>
    )
}