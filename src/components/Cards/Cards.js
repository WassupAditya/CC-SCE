import React from 'react'
import styles from "./Cards.module.scss"
import { Link } from 'react-router-dom';
const cards = ({ results, page }) => {

    let display;
    // {/* <div className= {`${styles.badge}   position-absolute badge bg-danger`} >{status}</div> */}
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x
            return (
                <Link
                style={{textDecoration: "none"}}
                to={`${page}${id}`}
                className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark" key={id} >

                    <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
                        <img className={`${styles.img} img-fluid`} src={image} alt="" />
                        <div style={{ padding: "10px" }} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if (status === "Dead") {
                            return (<div className={`${styles.badge} position-absolute badge bg-danger `} >{status}</div>)
                        } else if (status === "Alive") {
                            return (<div className={`${styles.badge} position-absolute badge bg-success `} >{status}</div>)
                        }
                        else {
                            return <div className={`${styles.badge} position-absolute badge bg-secondary`} >{status}</div>
                        }
                    })()}

                </Link>)
        })
    } else {
        display = "No Characters Found :/"
    }

    return (
        < >{display}</>
    )
}

export default cards