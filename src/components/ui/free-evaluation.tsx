import freeEvaluation from "@/assets/images/resource-images/freeevaluation.png"



const FreeEvaluation = () => {

    return (
       <>
<h1 style={{ textAlign: "center", marginTop: "200px", fontSize: "3em",backgroundColor: "#fff1f0", color: "#363636" }}>Get a FREE evaluation  .</h1>






        <div style={{
        // use the src property of the image object
        backgroundImage: `url(${freeEvaluation.src})`,

        // other styles
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        marginTop:'-500px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
      }}>

        </div>
        </>
    );
       
};

export default FreeEvaluation;