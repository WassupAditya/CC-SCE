import React from 'react'
import styles from "./Search.module.scss"
const search = ({setSearch ,setPageNumber}) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-5">
        <input onChange={e=>{
            setPageNumber(1);
            setSearch(e.target.value)
        }} className={styles.input} type="text" placeholder='Search the Character' />
        <button onClick={e=>{e.preventDefault();}} className={`${styles.b} btn btn-primary fs-5`}>Go !</button>
    </form>
  )
}

export default search