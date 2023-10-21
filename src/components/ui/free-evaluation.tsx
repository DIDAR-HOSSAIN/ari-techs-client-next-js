import freeEvaluation from "@/assets/images/resource-images/freeevaluation.png"


const FreeEvaluation = () => {

    return (
       <>
         <div style={{textAlign: "center", marginTop: "20px", fontSize: "25px", color: '#1890ff' }}>
           <h1 >Get a FREE evaluation</h1>
         </div>

        <div style={{
        // use the src property of the image object
        backgroundImage: `url(${freeEvaluation.src})`,

        // other styles
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "120vh",
        marginTop:'-500px',
      }}>

        </div>
        </>
    );
       
};

export default FreeEvaluation;