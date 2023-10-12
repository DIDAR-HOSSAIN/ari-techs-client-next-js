export const getBaseUrl = ():string =>{
  return process.env.ARI_TECHS || "http://localhost:5000/api/v1"
}