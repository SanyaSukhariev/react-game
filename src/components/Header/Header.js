import classes from "./Header.module.css"

const Header =(props)=>{
    console.log(props)
    return(
        <header className={classes.root}>
            <div className={classes.forest}/>
            <div className={classes.container}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
        </header>
    )
}
export  default Header