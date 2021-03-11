import classes from "./Layout.module.css"

const Layout=(props)=>{
    return(
        <section style={{background:"red"}}>
            <div className={classes.wrapper}>
                <article>
                    <div className={classes.title}>
                        <h3>{props.title} </h3>
                        <span className="separator"/>
                    </div>
                    <div className={classes.descFull}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout